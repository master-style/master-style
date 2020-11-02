const fragment = document.createDocumentFragment();
const div = document.createElement('div');

window.Master = function (selector: any, attr?: { [key: string]: any }, ...children: (Element | string)[]) {
    if (typeof selector === 'function') {
        return new Template(selector);
    } else if (attr) {
        const element: Element = document.createElement(selector, attr && attr.is ? { is: attr.is } : undefined);
        if (Object.keys(attr).length) element.attr(attr);
        if (children.length) {
            if (children.length > 1) {
                const eachFragment = fragment.cloneNode();
                for (const eachChild of children) {
                    eachFragment.appendChild(
                        typeof eachChild === 'string' ?
                            document.createTextNode(eachChild as any) :
                            eachChild
                    );
                }
                element.appendChild(eachFragment);
            } else {
                element.appendChild(
                    typeof children[0] === 'string' ?
                        document.createTextNode(children[0] as any) :
                        children[0]
                );
            }
        }
        return (element as any);
    } else {
        return document.querySelectorAll(selector);
    }
};

const removeNode = (node) => {
    if (!node?.element) return;
    node.element.remove();
    const removed = node.$removed;
    if (removed) removed(node.element, node);
};

const removeNodes = (eachNodes, isRoot?: boolean) => {
    eachNodes
        .forEach((eachNode) => {
            const element = eachNode.element;
            if (element) {
                // 父層被移除，後代也將一併被移除，無須再執行後代的 .remove()
                if (isRoot) element.remove();
                const removed = eachNode.$removed;
                if (removed) removed(element, eachNode);
            }
            if (eachNode.children) {
                removeNodes(eachNode.children);
            }
        });
};

class Template {

    constructor(
        private template: () => any[]
    ) { }

    container: any;
    nodes: TemplateNode[] = [];

    render(container) {

        if (!container) return;

        // tslint:disable-next-line: prefer-for-of
        const oldNodes: TemplateNode[] = this.nodes;
        this.nodes = [];

        (function generate(tokens: any[], eachNodes: TemplateNode[]) {
            let eachNode: TemplateNode;
            for (const token of tokens) {
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    eachNode = {
                        tag: token,
                        children: null
                    };
                    eachNodes.push(eachNode);
                } else {
                    const hasIf = eachNode.hasOwnProperty('$if');
                    const whether = hasIf && eachNode.$if || !hasIf;
                    if (Array.isArray(token) && whether) {
                        if (!eachNode.children) eachNode.children = [];
                        generate(token, eachNode.children);
                    } else if (tokenType === 'function' && whether) {
                        let children = token();
                        if (!children) continue;
                        children = children.reduce((acc, eachToken) => {
                            return acc.concat(eachToken);
                        }, []);
                        if (!eachNode.children) eachNode.children = [];
                        generate(children, eachNode.children);
                    } else if (tokenType === 'object') {
                        const attr = token;
                        eachNode.attr = {};
                        for (const attrKey in attr) {
                            const eachAttrValue = attr[attrKey];
                            if (attrKey[0] !== '$') {
                                eachNode.attr[attrKey] = eachAttrValue;
                            } else {
                                eachNode[attrKey] = eachAttrValue;
                            }
                        }
                    }
                }
            }
        })(this.template(), this.nodes);

        if (this.nodes.length && this.container === container) {
            (function renderNodes(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    removeNodes(eachOldNodes, true);
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    if (eachOldNodes && eachOldNodes.length > eachNodes.length) {
                        removeNodes(eachOldNodes.splice(eachNodes.length), true);
                    }

                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        const eachOldNode = eachOldNodes && eachOldNodes[i];
                        const existing = !!eachOldNode?.element;
                        const same = eachNode.tag === eachOldNode?.tag;
                        const hasIf = eachNode.hasOwnProperty('$if');
                        const whether = hasIf && eachNode.$if || !hasIf;

                        if (
                            existing && !whether ||
                            existing && whether && !same
                        ) {
                            removeNode(eachOldNode);
                        }

                        if (!whether) continue;

                        if (existing && same) {
                            const element = eachNode.element = eachOldNode?.element;
                            const attr = eachNode.attr;
                            const oldAttr = eachOldNode?.attr;
                            if (attr) {
                                for (const eachAttrKey in attr) {
                                    const value = attr[eachAttrKey];
                                    const oldValue = oldAttr[eachAttrKey];
                                    if (value !== oldValue) {
                                        element.attr(eachAttrKey, value);
                                    }
                                }
                            }
                            const css = eachNode.$css;
                            const oldCss = eachOldNode?.$css;
                            if (css) {
                                for (const eachPropKey in css) {
                                    const value = css[eachPropKey];
                                    const oldValue = oldCss[eachPropKey];
                                    if (value !== oldValue) {
                                        element.css(eachPropKey, value);
                                    }
                                }
                            }
                            if ('$on' in eachNode) {
                                if (eachOldNode.$on) {
                                    for (const eachEventType in eachOldNode.$on) {
                                        const eachHandle = eachOldNode.$on[eachEventType];
                                        element.off(eachHandle);
                                    }
                                }
                                for (const eachEventType in eachNode.$on) {
                                    const eachHandle = eachNode.$on[eachEventType];
                                    element.on(eachEventType, eachHandle, {
                                        passive: true
                                    });
                                }
                            }
                            if (
                                '$html' in eachNode && eachNode.$html !== eachOldNode.$html
                            ) {
                                element.innerHTML = eachNode.$html;
                                if (eachOldNode) {
                                    eachOldNode.children = null;
                                }
                            } else if (
                                '$text' in eachNode && eachNode.$text !== eachOldNode.$text
                            ) {
                                element.textContent = eachNode.$text;
                            }
                            if (eachNode.children) {
                                renderNodes(eachNode.children, eachOldNode?.children, element);
                            }
                            const updated = eachNode.$updated;
                            if (updated) updated(element, eachNode);
                        } else {
                            let element;
                            if (eachNode.$namespace) {
                                element = document.createElementNS(eachNode.$namespace, eachNode.tag);
                            } else {
                                element = eachNode.tag === 'div'
                                    ? div.cloneNode()
                                    : document.createElement(eachNode.tag);
                            }
                            eachNode.element = element;

                            const attr = eachNode.attr;
                            if (attr) {
                                element.attr(attr);
                            }

                            const css = eachNode.$css;
                            if (css) {
                                element.css(css);
                            }

                            if ('$on' in eachNode) {
                                for (const eachEventType in eachNode.$on) {
                                    const eachHandle = eachNode.$on[eachEventType];
                                    if (eachHandle) {
                                        element.on(eachEventType, eachHandle, {
                                            passive: true
                                        });
                                    }
                                }
                            }

                            if ('$html' in eachNode) {
                                element.innerHTML = eachNode.$html;
                                if (eachOldNode) {
                                    eachOldNode.children = null;
                                }
                            } else if ('$text' in eachNode) {
                                element.textContent = eachNode.$text;
                            }

                            if (eachNode.children) {
                                renderNodes(eachNode.children, eachOldNode?.children, element);
                            }

                            const created = eachNode.$created;
                            if (created) created(element, eachNode);
                            const updated = eachNode.$updated;
                            if (updated) updated(element, eachNode);

                            if (i === 0) {
                                parent.appendChild(element);
                            } else {
                                const existedNode =
                                    eachNodes
                                        .slice(0, i)
                                        .reverse()
                                        .find((nearNode) => {
                                            const eachHasIf = nearNode.hasOwnProperty('$if');
                                            return (eachHasIf && nearNode.$if || !eachHasIf)
                                                && nearNode.element;
                                        });

                                if (existedNode) {
                                    existedNode.element.after(element);
                                } else {
                                    parent.prepend(element);
                                }
                            }
                        }
                    }
                }
            })(this.nodes, oldNodes, container);
        } else {
            this.container = container;
            (function create(eachNodes, parent) {
                const eachFragment = fragment.cloneNode();
                eachNodes.forEach((eachNode) => {
                    const hasIf = eachNode.hasOwnProperty('$if');
                    if (hasIf && !eachNode.$if) return;
                    let element;
                    if (eachNode.$namespace) {
                        element = document.createElementNS(eachNode.$namespace, eachNode.tag);
                    } else {
                        element = eachNode.tag === 'div'
                            ? div.cloneNode()
                            : document.createElement(eachNode.tag);
                    }
                    eachNode.element = element;
                    const created = eachNode.$created;
                    if (created) created(element, eachNode);
                    const updated = eachNode.$updated;
                    if (updated) updated(element, eachNode);
                    if ('$on' in eachNode) {
                        for (const eachEventType in eachNode.$on) {
                            const eachHandle = eachNode.$on[eachEventType];
                            if (eachHandle) {
                                element.on(eachEventType, (event) => {
                                    eachHandle(event, element);
                                }, {
                                    passive: true
                                });
                            }
                        }
                    }
                    if ('$html' in eachNode) {
                        element.innerHTML = eachNode.$html;
                    } else if ('$text' in eachNode) {
                        element.textContent = eachNode.$text;
                    }
                    const attr = eachNode.attr;
                    if (attr) {
                        element.attr(attr);
                    }
                    const css = eachNode.$css;
                    if (css) {
                        element.css(css);
                    }
                    if (eachNode.children) {
                        create(eachNode.children, element);
                    }
                    eachFragment.appendChild(element);
                });
                parent.appendChild(eachFragment);
            })(this.nodes, container);
        }
    }

    remove() {
        if (this.nodes.length) {
            this.container = null;
            removeNodes(this.nodes, true);
            this.nodes = [];
        }
        return this;
    }
}
