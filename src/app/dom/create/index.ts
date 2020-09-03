
window.Master = function (selector: string, attr?: { [key: string]: any }, ...children: (Element | string)[]) {
    if (attr) {
        const element: Element = document.createElement(selector, attr && attr.is ? { is: attr.is } : undefined);
        if (Object.keys(attr).length) element.attr(attr);
        if (children.length) {
            if (children.length > 1) {
                const fragment = document.createDocumentFragment();
                for (const eachChild of children) {
                    fragment.appendChild(
                        typeof eachChild === 'string' ?
                            document.createTextNode(eachChild as any) :
                            eachChild
                    );
                }
                element.appendChild(fragment);
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

// const template = Master.template('div', { class: 'blue', name: 'aron' }, [])
// const render = Master.render(template);
// 第一次 render 後，將 template 存在 render 本身
// 第Ｎ次 render，都將與前一次 render 之 template 比對，一有異動便局部更新：
// - 局部更新 attr 異動
// - 局部更新 text 異動
// - 局部更新 node 異動 ( tagName /  )

this.color = 'fuck';

const template = () => [
    'div', { class: 'test', $text: '1' }, [
        'div', {
            name: this.color,
            class: 'blue',
            $text: '2'
        },
        'div', { $text: '2' },
        'div', { $text: '2' },
        'div', { $text: '2' }, [
            'div', { $text: '3' },
            'div', { $text: '3' }, [
                'div', { $text: '4' }, [
                    'div', { $text: '5' }
                ]
            ]
        ],
        'div', { $text: '2' }
    ],
    'div', { $text: '1' },
    'div', { $text: '1' },
    'div', { $text: '1' }, [
        'div', { $text: '2' },
    ],
    'div', { $text: '1' }
];

interface cache {
    tag: string,
    attr?: { [key: string]: any },
    children?: cache[],
    element?: Element
};

Master.Render = class MasterRender {
    run(createTemplate) {
        // tslint:disable-next-line: prefer-for-of
        console.time('t1');
        const nodes: cache[] = [];
        (function generate(layer: any[], trees: cache[]) {
            let element: cache;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < layer.length; i++) {
                const current = layer[i];
                if (typeof current === 'string') {
                    element = {
                        tag: current
                    };
                    trees.push(element);
                } else if (Array.isArray(current)) {
                    element.children = [];
                    generate(current, element.children);
                } else if (typeof current === 'object') {
                    element.attr = current;
                }
            }
        })(createTemplate(), nodes);

        const fragment = document.createDocumentFragment();
        (function render(eachNodes, container) {
            const eachFragment = fragment.cloneNode();
            eachNodes.forEach((eachNode) => {
                const element = document.createElement(eachNode.tag);
                eachNode.element = element;
                if (eachNode.attr) {
                    if (eachNode.attr.$text) {
                        element.textContent = eachNode.attr['$text'];
                        delete eachNode.attr.$text;
                    }
                    element.attr(eachNode.attr);
                }
                if (eachNode.children) {
                    render(eachNode.children, element);
                }
                eachFragment.appendChild(element);
            });
            container.appendChild(eachFragment);
        })(nodes, target);

        console.timeEnd('t1');
        console.log(caches);
    }
};

const render = new Master.Render();
let target;
setTimeout(()=> {

    target = document.querySelector('doc-create');
    render.run(template);
}, 1000);
