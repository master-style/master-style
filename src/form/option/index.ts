import { Element, MasterElement, Attr } from '@master/element';
import { SelectElement } from '../select';

const NAME = 'option';

@Element('m-' + NAME)
export class OptionElement extends MasterElement {

    static shadow = false;

    updating: boolean;

    @Attr()
    disabled: boolean;

    @Attr({
        update(option: OptionElement, selected) {
            const select = (option.parentElement as SelectElement);
            if (option.ready && !select.updating) {
                const select = (option.parentElement as SelectElement);

                // 防止無限循環更新
                if (select.updating) {
                    return;
                };

                select.updating = true;

                if (!select.multiple && selected) {
                    select.options.forEach((eachOption) => {
                        if (option !== eachOption) {
                            eachOption.selected = false;
                        }
                    });
                }

                select.composeValue();
                select.updating = false;
            }
        },
        reflect: false
    })
    selected: boolean;

    @Attr({
        update(option: OptionElement, value) {
            // compose value when selected option value changed
            if (option.ready && option.selected) {
                const select = (option.parentElement as SelectElement);
                select.composeValue();
            }
            option.empty = value === null || value === undefined || value === '';
        },
        reflect: false
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean = false;

    select: SelectElement;

    onConnected() {
        this.select = (this.parentElement as any);

        // select the option when value is included in the select value
        if (!this.selected) {
            this.select.selectOptionByValue(this.select.value);
        }
    }

    onDisconnected() { }

}
