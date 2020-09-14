const fragment = document.createDocumentFragment();

window.Master = function (selector: any, attr?: { [key: string]: any }, ...children: (Element | string)[]) {
    if (typeof selector === 'function') {
        return new MasterTemplate(selector);
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

class MasterTemplate {

    constructor(
        private template: () => any[]
    ) { }

    container: any;
    nodes: TemplateNode[] = [];

    render(container) {

        // tslint:disable-next-line: prefer-for-of
        const oldNodes: TemplateNode[] = this.nodes;
        this.nodes = [];

        (function generate(tokens: any[], eachNodes: TemplateNode[]) {
            let eachNode: TemplateNode;
            for (const token of tokens) {
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    eachNode = { tag: token };
                    eachNodes.push(eachNode);
                } else if (Array.isArray(token)) {
                    generate(token, eachNode.children = []);
                } else if (tokenType === 'function') {
                    const children = token().reduce((acc, eachToken) => {
                        return acc.concat(eachToken);
                    }, []);
                    generate(children, eachNode.children = []);
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
        })(this.template(), this.nodes);

        if (this.nodes && this.container === container) {
            (function renderNodes(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    eachOldNodes
                        .forEach((eachNode) => eachNode.element.remove());
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        let eachOldNode = eachOldNodes[i];
                        if (eachOldNode?.element && eachNode.tag === eachOldNode.tag) {
                            if (!eachNodes[i + 1]) {
                                eachOldNodes.splice(i + 1)
                                    .forEach((deletedOldNode) => deletedOldNode.element.remove());
                            }
                            if (eachNode.$if !== false) {
                                eachNode.element = eachOldNode.element;
                                const attr = eachNode.attr;
                                const oldAttr = eachOldNode?.attr;
                                if (attr) {
                                    for (const eachAttrKey in attr) {
                                        const value = attr[eachAttrKey];
                                        const oldValue = oldAttr[eachAttrKey];
                                        if (value !== oldValue) {
                                            eachNode.element.attr(eachAttrKey, value);
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
                                            eachNode.element.css(eachPropKey, value);
                                        }
                                    }
                                }
                                if (eachNode.$text !== eachOldNode.$text) {
                                    eachNode.element.textContent = eachNode.$text;
                                }
                                if (eachNode.children) {
                                    renderNodes(eachNode.children, eachOldNode.children, eachNode.element);
                                }
                            } else if (eachOldNode.element) {
                                eachOldNode.element.remove();
                                const removed = eachNode.$removed;
                                if (removed) removed(eachOldNode.element);
                            }
                        } else {
                            if (eachOldNode?.element && eachNode.$if === false) {
                                eachOldNode.element.remove();
                                const removed = eachNode.$removed;
                                if (removed) removed(eachOldNode.element);
                                continue;
                            } else if (eachNode.$if === false) {
                                continue;
                            }
                            let skipChildren = false;
                            eachNode.element = document.createElement(eachNode.tag);
                            const created = eachNode.$created;
                            if (created) created(eachNode.element);
                            if (eachOldNode?.element) {
                                eachOldNode.element.before(eachNode.element);
                                eachOldNode = (eachOldNode.element.remove() as undefined);
                                const removed = eachNode.$removed;
                                if (removed) removed(eachOldNode.element);
                            }
                            const attr = eachNode.attr;
                            if (attr) {
                                eachNode.element.attr(attr);
                            }
                            const css = eachNode.$css;
                            if (css) {
                                eachNode.element.css(css);
                            }
                            if (eachNode.$html !== undefined) {
                                eachNode.element.innerHTML = eachNode.$html;
                                skipChildren = true;
                            } else if (eachNode.$text !== undefined) {
                                eachNode.element.textContent = eachNode.$text;
                            }
                            if (!skipChildren && eachNode.children) {
                                renderNodes(eachNode.children, [], eachNode.element);
                            }

                            if (i === 0) {
                                parent.prepend(eachNode.element);
                            } else {
                                const existedNode =
                                    eachNodes
                                        .slice(0, i)
                                        .reverse()
                                        .find((nearNode) => nearNode.$if !== false && nearNode.element);

                                if (existedNode) {
                                    existedNode.element.after(eachNode.element);
                                } else {
                                    parent.appendChild(eachNode.element);
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
                    if (eachNode.$if === false) return;
                    const element = document.createElement(eachNode.tag);
                    const created = eachNode.$created;
                    if (created) created(element);
                    eachNode.element = element;
                    let skipChildren = false;
                    if (eachNode.$html !== undefined) {
                        element.innerHTML = eachNode.$html;
                        skipChildren = true;
                    } else if (eachNode.$text !== undefined) {
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
                    if (!skipChildren && eachNode.children) {
                        create(eachNode.children, element);
                    }
                    eachFragment.appendChild(element);
                });
                parent.appendChild(eachFragment);
            })(this.nodes, container);
        }
    }

    remove() {
        if (this.nodes) {
            this.container = null;
            this.nodes
                .forEach((eachNode) => eachNode.element.remove());
            this.nodes = [];
        }
        return this;
    }
}
