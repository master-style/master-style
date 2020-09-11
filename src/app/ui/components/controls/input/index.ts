import MasterControl from '../core';

import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'input';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterInput extends MasterControl {

    controlTemplate = $(() => [
        'input', {
            part: 'body',
            type: this.type,
            name: this.name,
            label: this.label,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readOnly: this.readOnly,
            validate: this.validate,
            invalidate: this.invalidate,
            warning: this.warning
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend'
        ]
    ]);

    protected valueHandler(value: any, oldValue: any) {
        if (this.type === 'number') {
            if (value === '') {
                value = oldValue;
            } else {
                value = isNaN(+value) ? value : +value;
            }
            return { value, oldValue };
        }
    }

    render() {
        this.template.render(this.shadowRoot);
        this.controlTemplate.render(this);
    }
}

console.log(HTMLInputElement.prototype);
