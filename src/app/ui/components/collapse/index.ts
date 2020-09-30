import { Element, Attr, ToggleableElement } from '@element';
import css from './index.scss';

const NAME = 'collapse';
const PX = 'px';

@Element({
    tag: 'm-' + NAME,
    css
})
export class CollapseElement extends ToggleableElement {

    template = $(() => ['slot']);

    @Attr()
    name: string;

    @Attr()
    collapseX: boolean = false;

    @Attr()
    collapseY: boolean = false;

    protected toggling(
        options: KeyframeEffectOptions
    ) {

        const keyframes = [];
        const startKeyframe: any = {};
        const endKeyframe: any = {};

        if (this.collapseY || this.collapseX && this.collapseY) {
            startKeyframe.height = 0 + PX;
            endKeyframe.height = this.offsetHeight + PX;
        }

        if (this.collapseX || this.collapseX && this.collapseY) {
            startKeyframe.width = 0 + PX;
            endKeyframe.width = this.offsetWidth + PX;
        }

        if (this.fade) {
            startKeyframe.opacity = 0;
            endKeyframe.opacity = 1;
        }

        if (this.hidden) {
            keyframes.push(endKeyframe, startKeyframe);
        } else {
            keyframes.push(startKeyframe, endKeyframe);
        }

        console.log(keyframes);

        this.animation = this.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}
