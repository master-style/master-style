import { Element } from '@element';

import css from './index.scss';

const NAME = 'header';

@Element({
    tag: 'm-' + NAME,
    css
})
export class HeaderElement extends HTMLElement {

    template: MasterTemplate = $(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
