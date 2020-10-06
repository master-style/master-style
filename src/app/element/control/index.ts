import { Attr } from '../attr';

const NAME = 'control';

export class ControlElement extends HTMLElement {

    validity: ValidityState;

    body: any;

    @Attr()
    busy: boolean;

    @Attr()
    name: string;

    @Attr()
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr()
    promptValid: string;

    @Attr()
    promptWarning: string;

    @Attr()
    promptInvalid: string;

    @Attr({ observe: false, render: false })
    valid: boolean;

    @Attr({ observe: false, render: false })
    warning: boolean;

    @Attr({ observe: false, render: false })
    invalid: boolean;

    @Attr({ observe: false, render: false })
    dirty: boolean = false;

    @Attr({ observe: false, render: false })
    touched: boolean = false;

    validate() {
        this.valid = this.validity.valid;
        this.invalid = !this.validity.valid;
    }

    render() {
        (this as any).controlTemplate.render(this);
        (this as any).template.render(this.shadowRoot);
    }
}
