import MasterControl from '@ui/shared/control';
import { Element } from '@element';
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
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            pattern: this.pattern,
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend', [
                'span', { $text: this.label }
            ]
        ],
        'm-label', { $text: this.label }
    ]);

    protected valueParser(value: any, oldValue: any) {
        if (this.type === 'number') {
            if (value === '') {
                value = null;
            } else {
                value = isNaN(+value) ? value : +value;
            }
        }
        return { value, oldValue };
    }

    protected valueUpdater(value) {
        this.empty = value === null || value === undefined || value === '';
        this.controlTemplate.nodes[0].element.value = value ?? null;
    }

    onConnected() {
        this
            .on('click', (event: any) => {
                if (event.target.tagName === 'INPUT') return;
                this.controlTemplate.nodes[0].element.focus();
            }, { id: this, passive: true })
            .on('input', '[part=body]', (event: any) => {
                this.value = event.target.value;
            }, { id: this, passive: true });
        this.valueUpdater(this.value);
    }

    onDisconnected() {
        this.off('input', { id: this });
    }

    render() {
        this.controlTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}