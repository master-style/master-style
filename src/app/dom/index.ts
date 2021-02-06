import './traversings';

import { on, off } from './event-listener';
import { attr, toggleAttr, css, addClass, toggleClass, rmClass } from './manipulations';

const fragment = document.createDocumentFragment();

function $(
    elementOrSelector: Element | Node | Window | string,
    attrOptions?: { [key: string]: any },
    ...children: (Element | string)[]
) {
    const isSelector = typeof elementOrSelector === 'string';
    let element;
    if (isSelector && !attrOptions) {
        element = document.querySelector(elementOrSelector as string);
    } else if (isSelector && attrOptions) {
        element = document.createElement(elementOrSelector as string, attrOptions && attrOptions.is ? { is: attrOptions.is } : undefined);
        if (Object.keys(attrOptions).length) attr.call(element, attrOptions);
        if (attrOptions.html) {
            element.innerHTML = attrOptions.html;
        }
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
    } else {
        element = elementOrSelector;
    }

    if (element === window) {
        Object.assign(element, {
            on,
            off
        });
    } else {
        Object.assign(element, {
            on,
            off,
            css,
            attr,
            toggleAttr,
            addClass,
            rmClass,
            toggleClass
        });
    }

    return element;
}

export {
    $, on, off, attr, toggleAttr, css, addClass, rmClass
}