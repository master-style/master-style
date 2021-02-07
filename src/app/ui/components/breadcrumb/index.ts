import { Element, ClickableElement } from '../../../element';
import css from './breadcrumb.scss';

const NAME = 'breadcrumb';


@Element('m-' + NAME)
export class BreadcrumbElement extends ClickableElement {
    static css = css;

    slotTemplate = [
        'slot', { name: 'head' },
        'slot', { part: 'body' }
    ];
}
