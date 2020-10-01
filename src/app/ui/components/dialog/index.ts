import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';

enum TYPE_ICON {
    success = 'check',
    error = 'cross'
}

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    template = $(() => [
        'div', {
            slot: 'icon',
            $if: this.icon,
            $html: this.icon
        }
    ]);

    slotTokens = () => [
        'm-icon', {
            class: 'animated',
            $if: this.type,
            part: 'icon',
            name: TYPE_ICON[this.type]
        },
        'slot', {
            $if: this.icon,
            name: 'icon'
        },
        'h2', {
            $if: this.title,
            $text: this.title
        },
        'p', {
            $if: this.text,
            $text: this.text
        },
        'div', {
            $if: this.content,
            $text: this.content
        },
        'div', {
            part: 'foot'
        }, [
            'm-button', {
                $text: 'CANCEL'
            },
            'm-button', {
                $text: 'OK'
            }
        ]
    ]

    @Attr()
    duration: number = 300;

    @Attr({ reflect: false, observe: false })
    title: string = 'Created';

    @Attr({ reflect: false, observe: false })
    text: string = 'The user has been created by Aron.';

    @Attr({ reflect: false, observe: false })
    content: string;

    @Attr({ reflect: false, observe: false })
    type: string = 'success';

    @Attr({ reflect: false, observe: false })
    icon: string;

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';

}
