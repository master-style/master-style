/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Master=e():t.Master=e()}(self,(function(){return(()=>{var t={8112:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,'::slotted(input),::slotted(textarea),input,textarea{cursor:text;border:0;font-weight:inherit;color:inherit;-webkit-appearance:none;white-space:nowrap;font-family:inherit;font-size:inherit;text-align:inherit;line-height:inherit;letter-spacing:inherit;-webkit-text-fill-color:unset;outline:none;background-color:transparent;-webkit-user-drag:none;-ms-user-select:text;user-select:text;-webkit-user-select:text;touch-action:manipulation;-webkit-touch-action:manipulation;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}::slotted(:-webkit-autofill),:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;border-style:dashed !important;caret-color:var(--f-theme);-webkit-text-fill-color:var(--f-blue)}::-webkit-inner-spin-button,::-webkit-outer-spin-button{display:none}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:-ms-input-placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}::placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}:-moz-read-only{cursor:default;caret-color:transparent}:host{position:relative;display:inline-flex;align-items:flex-start;font-size:var(--f-size);line-height:1.2}:host(.xs){--f-size: var(--f-xs);--py: .5rem;--px: .8rem;--size: 2rem;--label-px: .25rem;--label-f-size: .65625rem}:host(.sm){--py: 0.65625rem;--label-px: .25rem;--size: 2.5rem}:host(.lg){--f-size: var(--f-md);--py: 1rem;--px: 1.2rem;--size: 3.5rem;--label-px: .3125rem;--label-f-size: .9375rem}:host(.outlined),:host(.underlined){--b-color: var(--b-fader);--b-color-active: var(--b-fade);backdrop-filter:none}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) fieldset{border-color:var(--b-color-active)}}:host([readonly]:not(.output)) fieldset{border-style:dashed}:host(:active:not([readonly]):not([disabled])) fieldset,:host(:focus-within:not([readonly]):not([disabled])) fieldset,:host([focused]:not([readonly]):not([disabled])) fieldset{--b-width: 2px;border-color:var(--b-color-active)}:host(:active:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:active:not([readonly]):not([disabled])) [part=body],:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:focus-within:not([readonly]):not([disabled])) [part=body],:host([focused]:not([readonly]):not([disabled])) ::slotted([part=body]),:host([focused]:not([readonly]):not([disabled])) [part=body]{color:var(--f-fade)}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=head]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=foot]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=body]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) [part=body]{opacity:0;transition-delay:0s}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) legend{max-width:0}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) label{transition-delay:.1s;transform:translate(0, var(--py))}:host(.outlined){border-radius:.3125rem}:host(.outlined) fieldset{border-width:var(--b-width)}:host(.outlined) legend{transition:max-width .2s cubic-bezier(0.33, 1, 0.68, 1) .1s;margin-left:0;will-change:max-width}:host(.outlined[label]:not([label=""])) [part=label]{padding:0 var(--label-px);letter-spacing:inherit;contain:strict}:host(.outlined[busy]) legend,:host(.outlined[expanded]) legend,:host(.outlined[label]:not([empty]):not(:focus-within)) legend{transition:none;margin-left:0}:host(.outlined[label]:active:not([readonly]):not([disabled])) legend,:host(.outlined[label]:focus-within:not([readonly]):not([disabled])) legend,:host(.outlined[label][focused]:not([readonly]):not([disabled])) legend{transition:max-width .2s ease-in;margin-left:-1px;height:2px}:host(.underlined){--px: 0}:host(.underlined) fieldset{border-bottom-width:var(--b-width)}:host(.underlined) ::slotted([part=head]),:host(.underlined) ::slotted([part=foot]),:host(.underlined) ::slotted([part=body]),:host(.underlined) m-icon,:host(.underlined) [part=body]{padding-top:calc(var(--py) + .125rem);padding-bottom:calc(var(--py) - .125rem)}label{position:absolute;top:0;left:var(--px);display:block;-ms-user-select:none;user-select:none;pointer-events:none;transition-property:transform,opacity;will-change:transform,opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:.2s;transform-origin:left;line-height:inherit;color:var(--label-f-color);transform:scale(0.75) translate(0, -65%);white-space:nowrap;letter-spacing:inherit;font-weight:inherit}fieldset{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;margin:0;display:flex;color:var(--theme, var(--f-theme-fader));border-color:var(--b-color);border-width:0;border-style:solid;padding:0 calc(var(--px) - .3125rem);border-radius:inherit;pointer-events:none}legend{max-width:100%;height:1px;font-size:var(--label-f-size);line-height:0;padding:0;margin:0;contain:layout paint style;-ms-user-select:none;user-select:none;visibility:hidden}::slotted(:invalid){box-shadow:none}::slotted([part=head]),::slotted([part=foot]),::slotted([part=body]),m-icon,[part=body]{box-sizing:border-box;padding-top:var(--py);padding-bottom:var(--py);transition:opacity .2s .1s cubic-bezier(0, 0, 0.2, 1);will-change:opacity;min-height:var(--size)}::slotted([part=body]),[part=body]{z-index:1;display:flex;text-overflow:ellipsis;-ms-text-overflow:ellipsis;align-items:center;contain:style;width:100%;padding-left:var(--px);padding-right:var(--px)}::slotted([part=head]),::slotted([part=foot]),m-icon{display:flex;-ms-user-select:none;user-select:none;white-space:nowrap;align-items:center}::slotted([part=head]){margin-right:.3125rem;padding-left:var(--px);order:-1}:host(.outlined) ::slotted([part=head]){margin-right:-0.6875rem}::slotted([part=foot]){order:1;margin-left:.3125rem;padding-right:var(--px);font-size:var(--f-xxs);color:var(--f-fade)}:host([busy]){pointer-events:none !important}:host([busy]) ::slotted([part=body]),:host([busy]) [part=body]{visibility:hidden}:host([busy]) [part=icon]{visibility:hidden}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host([disabled]){-webkit-text-fill-color:var(--f-fadest);cursor:no-drop !important;color:var(--f-fadest) !important}:host([disabled]) fieldset{border-style:dashed;border-color:var(--b-color) !important}:host([disabled]):after{display:none}[part=clear]{--button-bg-color-hover: var(--theme-fade);--button-f-color: var(--f-fadest);--button-f-size: var(--f-xxs);--button-size: 1.25rem;--icon-stroke-width: 3px;border-radius:50%}[part=clear]+[part=icon]{margin-left:.25rem}[part=foot]{display:flex;align-items:center;height:var(--size);padding-right:calc(var(--px) / 1.5)}:host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=""])[dirty]):after,:host([prompt]:not([prompt=""])[touched]):after,:host([prompt]:not([prompt=""])[class*=-dirty]):after,:host([prompt]:not([prompt=""])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}:host{--f-size: var(--textarea-f-size, var(--f-sm));--b-width: var(--textarea-b-width, 1px);--b-color: var(--textarea-b-color, var(--b-fade));--py: var(--textarea-py, .90625rem);--px: var(--textarea-px, 1rem);--size: var(--textarea-size, 3rem);--label-px: var(--textarea-label-px, .25rem);--label-f-size: var(--textarea-label-f-size, var(--f-xxs));--label-f-color: var(--textarea-label-f-color, var(--f-theme-fader));flex-direction:column}::slotted([part=body]){overflow:visible;white-space:pre-wrap;min-height:var(--size)}::slotted([part=foot]){margin-left:auto;padding:.5rem .6rem;min-height:auto}:host(:not([disabled])) ::slotted([part=body]){-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, black var(--py), black calc(100% - var(--py)), rgba(0, 0, 0, 0) 100%)}',""]);const i=r},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var d=[].concat(t[a]);n&&r[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),e.push(d))}},e}},453:(t,e,o)=>{"use strict";function n(t){return(e,o)=>{const n=o.split("Emitter")[0],r=new CustomEvent(n,t),i=function(e){if(this.emit||(null==t?void 0:t.force))return r.data=e,this.dispatchEvent(r),r};return{get:()=>i}}}o.d(e,{j:()=>n})},5109:(t,e,o)=>{"use strict";o.d(e,{Ps:()=>r,w5:()=>h,W_:()=>a}),o(6472);const n={reflect:!0,observe:!0,render:!0};function r(t){return t=Object.assign(Object.assign({},n),t),(e,o)=>{t.type=Reflect.getMetadata("design:type",e,o).name,t.propKey=o;const n="_"+o,r=t.key=t.key||o.replace(/([A-Z])/g,(t=>"-"+t[0])).toLowerCase(),i=e.constructor,s=t.update,a=t.parse,d={get(){return this[n]},set(e,o){const i=this[n];a&&(e=a(this,e,i)),e!==i&&(this[n]=e,this.initial&&(s&&s(this,e,i),t.reflect&&!o&&("Boolean"===t.type?this.toggleAttribute(r,!!e):this.setAttribute(r,e)),t.render&&this.render&&this.render()))}};return t.set=d.set,t.observe&&(i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(r)),i.attrsOptions?i.attrsOptions=Object.assign({},i.attrsOptions):i.attrsOptions={},i.attrsOptions[r]=t,d}}const i=new CustomEvent("ready"),s={shadow:!0};function a(t){return t=Object.assign(Object.assign({},s),t),function(e){e.elementName=t.tag.replace("m-","");const o=e.prototype,n=e.attrsOptions,r=e.propsOptions,s=o.onConnected,a=o.onDisconnected,l=o.onAttrChanged;o.attributeChangedCallback=function(t,e,o){if(o===e)return;const r=n[t],i=r.type;o=d(o,i),e=d(e,i),r.set.call(this,o,!0),l&&l.call(this,t,o,e)},o.connectedCallback=function(){if(this.ready=!1,this.initial=!1,r)for(const t in e.propsOptions){const e=r[t],o=this["_"+t],n=e.update;n&&n(this,o)}if(n){const t=this.attributes;for(const e in n){const o=n[e],r=this["_"+o.propKey],i=t[e];if(void 0===r)continue;let s,a;if(i&&(a=d(i.value,o.type)),a!==r){if(void 0!==a)s=a;else{if(void 0===r)continue;s=r}o.reflect&&("Boolean"===o.type?this.toggleAttribute(e,s):this.setAttribute(e,s))}}}if(t.shadow&&!this.shadowRoot){const e=this.attachShadow({mode:"open"});if(t.css&&e.adoptedStyleSheets){const o=new CSSStyleSheet;o.replaceSync(t.css),e.adoptedStyleSheets=[o]}else if(t.css){const o=document.createElement("style");o.innerHTML=t.css,e.appendChild(o)}}if(this.render&&this.render(),this.initial=!0,n)for(const t in e.attrsOptions){const e=n[t],o=this["_"+e.propKey],r=e.update;r&&r(this,o)}this.ready=!0,this.emit&&this.dispatchEvent(i),s&&s.call(this)},o.disconnectedCallback=function(){this.removeRender&&this.removeRender(),a&&a.call(this)},window.customElements.define(t.tag,e)}}const d=(t,e)=>{if("undefined"!==t)switch(e){case"Number":return""===t?null:isNaN(+t)?t:+t;case"Boolean":return!(""!==t&&!t);default:return t}};var l=o(9312);class p extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>{const t=!this.href&&"anchor"!==this.type||this.disabled?this.type||this.disabled?"button":null:"a",e=["m-icon",{$if:this.busy,name:"spinner",part:"spinner"}];switch(t){case"button":return[t,{class:"touch",part:"root",disabled:this.disabled,type:this.type},this.slotTemplate||["slot"],e];case"a":return[t,{class:"touch",part:"root",href:this.href,download:this.download,rel:this.rel,target:this.target},this.slotTemplate||["slot"],e];default:return["div",{part:"root"},this.slotTemplate||["slot"],e]}}))}render(){this.template.render(this.shadowRoot)}}(0,l.gn)([r({update(t,e,o){"submit"===e?t.on("click",(e=>{const o=t.closest("form");if(o.querySelectorAll("m-input,m-textarea,m-select,m-check").forEach((t=>{t.dirty=!0})),o){if(!o.checkValidity())return;o.requestSubmit?o.requestSubmit():o.submit()}}),{id:[t],passive:!0}):"submit"===e&&"submit"!==o||t.off({id:[t]})}}),(0,l.w6)("design:type",String)],p.prototype,"type",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Boolean)],p.prototype,"busy",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",String)],p.prototype,"rel",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",String)],p.prototype,"href",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Boolean)],p.prototype,"disabled",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Number)],p.prototype,"download",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",String)],p.prototype,"target",void 0);var c=o(453);class u extends HTMLElement{constructor(){super(...arguments),this.hidden=!1,this.duration=500,this.easing="cubic-bezier(.25,.8,.25,1)",this.triggerEvent="click",this.emit=!1,this.animations=[]}prepare(){return(0,l.mG)(this,void 0,void 0,(function*(){if(this.triggerEvent){const t="toggle-"+this.constructor.elementName;$("["+t+"]").forEach((e=>{if(this.matches(e.getAttribute(t))){const t=this.hidden;e.toggleAttribute("aria-expanded",!t),e.toggleAttribute("active",!t);const o=e.querySelector(".toggled");o&&o.toggleAttribute("active",!this.hidden)}}))}if(this.animation)for(const t of this.animations)t.reverse();else if(this.duration){this.toggleAttribute("changing",!0),yield this.toggling({easing:this.easing,duration:this.duration});const t=this.hidden;t&&this.toggleAttribute("hidden",!0),this.toggleAttribute("changing",!1),this.animation=null,this.animations=[];const e=t?this.onClosed:this.onOpened;e&&e.call(this)}}))}open(){return(0,l.mG)(this,void 0,void 0,(function*(){if(!this.hidden)return!1;this._hidden=!1,this.toggleAttribute("hidden",!1);const t=this.onOpen;return t&&(yield t.call(this)),this.openEmitter(),yield this.changing=this.prepare(),this.openedEmitter(),!0}))}close(){return(0,l.mG)(this,void 0,void 0,(function*(){if(this.hidden)return!1;this._hidden=!0;const t=this.onClose;return t&&(yield t.call(this)),this.closeEmitter(),yield this.changing=this.prepare(),this.closedEmitter(),!0}))}toggle(t){return(0,l.mG)(this,void 0,void 0,(function*(){t="boolean"==typeof t?t:this.hidden,yield t?this.open():this.close()}))}onDisconnected(){document.body.off({id:[this,this.constructor.elementName]})}}(0,l.gn)([r({update(t,e){if(t.ready){const o=t[e?"onClose":"onOpen"];o&&o(),t.prepare()}}}),(0,l.w6)("design:type",Boolean)],u.prototype,"hidden",void 0),(0,l.gn)([r({reflect:!1}),(0,l.w6)("design:type",Object)],u.prototype,"duration",void 0),(0,l.gn)([r({reflect:!1}),(0,l.w6)("design:type",Boolean)],u.prototype,"fade",void 0),(0,l.gn)([r({reflect:!1}),(0,l.w6)("design:type",Object)],u.prototype,"easing",void 0),(0,l.gn)([r({reflect:!1,update(t,e,o){const n=t.constructor.elementName;if(o&&document.body.off({id:[t,n]}),e){const o="toggle-"+n,r=e.split(","),i=t.handleTrigger;document.body.on(r.join(" "),"["+o+"]",(function(e){const n=this;if(this.disabled)return;const s=n.getAttribute(o);if(!t.matches(s))return;const a=e.type;let d;if(r.length>1){if(d=t.hidden,d&&-1===r[0].split(" ").indexOf(a)||!d&&-1===r[1].split(" ").indexOf(a))return;if(i&&!1===i.call(t,e,d))return}else d=!("checked"in n)||"input"!==a&&"change"!==a?t.hidden:!!n.checked;d&&!t.animation&&(t.trigger=n),t.toggle(d)}),{passive:!0,id:[t,n]})}}}),(0,l.w6)("design:type",String)],u.prototype,"triggerEvent",void 0),(0,l.gn)([r({reflect:!1,render:!1}),(0,l.w6)("design:type",Boolean)],u.prototype,"emit",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"openEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"closeEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"openedEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"closedEmitter",void 0);class h extends HTMLElement{constructor(){super(...arguments),this.dirty=!1,this.touched=!1}validate(){if(!this.ready)return;let t;this.valid=this.validity.valid,this.invalid=!this.validity.valid;for(const o in this.validity){const n=this.validity[o],r=this["when"+(e=o,e.charAt(0).toUpperCase()+e.slice(1))];if(void 0!==r){if(n){t=r;break}t=""}}var e;void 0!==t?this.prompt=t:this.toggleAttribute("prompt",!1)}render(){this.controlTemplate.render(this),this.template.render(this.shadowRoot)}}(0,l.gn)([r({render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"emit",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Boolean)],h.prototype,"busy",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",String)],h.prototype,"name",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Boolean)],h.prototype,"disabled",void 0),(0,l.gn)([r(),(0,l.w6)("design:type",Boolean)],h.prototype,"required",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenBadInput",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenCustomError",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenPatternMismatch",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenRangeOverflow",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenRangeUnderflow",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenStepMismatch",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenTooLong",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenTypeMismatch",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenValueMissing",void 0),(0,l.gn)([r({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenValid",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",String)],h.prototype,"prompt",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"valid",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"warning",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"invalid",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"dirty",void 0),(0,l.gn)([r({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"touched",void 0)},9579:(t,e,o)=>{"use strict";o.r(e),o.d(e,{TextareaElement:()=>a});var n=o(9312),r=o(5109),i=o(8112);const s="textarea";let a=class extends r.w5{constructor(){super(...arguments),this.controlTemplate=window.Master((()=>["textarea",{part:"body",name:this.name,placeholder:this.placeholder,disabled:this.disabled,required:this.required,readonly:this.readOnly,rows:this.rows,$created:t=>{this.body=t,this.validity=t.validity}}])),this.template=window.Master((()=>["slot","fieldset",["legend",["span",{part:"label",$text:this.label}]],"label",{$text:this.label},"m-icon",{$if:this.busy,name:"spinner",part:"spinner"}])),this.role="textbox",this.rows=1}onConnected(){this.validate(),this.on("click",(t=>{t.target!==this.body&&this.body.focus()}),{id:[s],passive:!0}),this.body.on("input",(t=>{this.value=t.target.value,this.dirty||(this.dirty=!0)}),{id:[s],passive:!0}).on("focusout",(()=>{this.touched=!0}),{id:[s],passive:!0,once:!0})}};(0,n.gn)([(0,r.Ps)({observe:!1,render:!1}),(0,n.w6)("design:type",Boolean)],a.prototype,"empty",void 0),(0,n.gn)([(0,r.Ps)({observe:!1,render:!1}),(0,n.w6)("design:type",String)],a.prototype,"role",void 0),(0,n.gn)([(0,r.Ps)({key:"readonly"}),(0,n.w6)("design:type",Boolean)],a.prototype,"readOnly",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",String)],a.prototype,"placeholder",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",String)],a.prototype,"label",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",String)],a.prototype,"type",void 0),(0,n.gn)([(0,r.Ps)({render:!1}),(0,n.w6)("design:type",Boolean)],a.prototype,"expanded",void 0),(0,n.gn)([(0,r.Ps)({reflect:!1,render:!1,update(t,e){t.empty=null==e||""===e,t.body.value=null!=e?e:null,t.validate()}}),(0,n.w6)("design:type",Object)],a.prototype,"value",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",Number)],a.prototype,"maxLength",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",Number)],a.prototype,"minLength",void 0),(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",Number)],a.prototype,"rows",void 0),a=(0,n.gn)([(0,r.W_)({tag:"m-"+s,css:i.Z})],a)},9312:(t,e,o)=>{"use strict";function n(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function i(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{d(n.next(t))}catch(t){i(t)}}function a(t){try{d(n.throw(t))}catch(t){i(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))}o.d(e,{gn:()=>n,w6:()=>r,mG:()=>i}),Object.create,Object.create},6472:(t,e,o)=>{var n;!function(t){!function(e){var n="object"==typeof o.g?o.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=i(t);function i(t,e){return function(o,n){"function"!=typeof t[o]&&Object.defineProperty(t,o,{configurable:!0,writable:!0,value:n}),e&&e(o,n)}}void 0===n.Reflect?n.Reflect=t:r=i(n.Reflect,r),function(t){var e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol,n=o&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=o&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,s={__proto__:[]}instanceof Array,a=!i&&!s,d={create:i?function(){return R(Object.create(null))}:s?function(){return R({__proto__:null})}:function(){return R({})},has:a?function(t,o){return e.call(t,o)}:function(t,e){return e in t},get:a?function(t,o){return e.call(t,o)?t[o]:void 0}:function(t,e){return t[e]}},l=Object.getPrototypeOf(Function),p="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],o=function(){function t(t,e,o){this._index=0,this._keys=t,this._values=e,this._selector=o}return t.prototype["@@iterator"]=function(){return this},t.prototype[r]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var o=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:o,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var o=this._find(t,!0);return this._values[o]=e,this},e.prototype.delete=function(e){var o=this._find(e,!1);if(o>=0){for(var n=this._keys.length,r=o+1;r<n;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new o(this._keys,this._values,n)},e.prototype.values=function(){return new o(this._keys,this._values,i)},e.prototype.entries=function(){return new o(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[r]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function s(t,e){return[t,e]}}():Map,u=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new c}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[r]=function(){return this.keys()},t}():Set,h=new(p||"function"!=typeof WeakMap?function(){var t=d.create(),o=n();return function(){function t(){this._key=n()}return t.prototype.has=function(t){var e=r(t,!1);return void 0!==e&&d.has(e,this._key)},t.prototype.get=function(t){var e=r(t,!1);return void 0!==e?d.get(e,this._key):void 0},t.prototype.set=function(t,e){return r(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=r(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=n()},t}();function n(){var e;do{e="@@WeakMap@@"+s()}while(d.has(t,e));return t[e]=!0,e}function r(t,n){if(!e.call(t,o)){if(!n)return;Object.defineProperty(t,o,{value:d.create()})}return t[o]}function i(t,e){for(var o=0;o<e;++o)t[o]=255*Math.random()|0;return t}function s(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):i(new Uint8Array(t),t):i(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var o="",n=0;n<16;++n){var r=e[n];4!==n&&6!==n&&8!==n||(o+="-"),r<16&&(o+="0"),o+=r.toString(16).toLowerCase()}return o}}():WeakMap);function f(t,e,o){var n=h.get(t);if(k(n)){if(!o)return;n=new c,h.set(t,n)}var r=n.get(e);if(k(r)){if(!o)return;r=new c,n.set(e,r)}return r}function y(t,e,o){if(g(t,e,o))return!0;var n=C(e);return!O(n)&&y(t,n,o)}function g(t,e,o){var n=f(e,o,!1);return!k(n)&&!!n.has(t)}function v(t,e,o){if(g(t,e,o))return b(t,e,o);var n=C(e);return O(n)?void 0:v(t,n,o)}function b(t,e,o){var n=f(e,o,!1);if(!k(n))return n.get(t)}function m(t,e,o,n){f(o,n,!0).set(t,e)}function w(t,e){var o=x(t,e),n=C(t);if(null===n)return o;var r=w(n,e);if(r.length<=0)return o;if(o.length<=0)return r;for(var i=new u,s=[],a=0,d=o;a<d.length;a++){var l=d[a];i.has(l)||(i.add(l),s.push(l))}for(var p=0,c=r;p<c.length;p++)l=c[p],i.has(l)||(i.add(l),s.push(l));return s}function x(t,e){var o=[],n=f(t,e,!1);if(k(n))return o;for(var i=function(t){var e=M(t,r);if(!z(e))throw new TypeError;var o=e.call(t);if(!S(o))throw new TypeError;return o}(n.keys()),s=0;;){var a=P(i);if(!a)return o.length=s,o;var d=a.value;try{o[s]=d}catch(t){try{B(i)}finally{throw t}}s++}}function _(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function O(t){return null===t}function S(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(_(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var o=3===e?"string":5===e?"number":"default",r=M(t,n);if(void 0!==r){var i=r.call(t,o);if(S(i))throw new TypeError;return i}return function(t,e){if("string"===e){var o=t.toString;if(z(o)&&!S(r=o.call(t)))return r;if(z(n=t.valueOf)&&!S(r=n.call(t)))return r}else{var n;if(z(n=t.valueOf)&&!S(r=n.call(t)))return r;var r,i=t.toString;if(z(i)&&!S(r=i.call(t)))return r}throw new TypeError}(t,"default"===o?"number":o)}function j(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function T(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function z(t){return"function"==typeof t}function A(t){return"function"==typeof t}function M(t,e){var o=t[e];if(null!=o){if(!z(o))throw new TypeError;return o}}function P(t){var e=t.next();return!e.done&&e}function B(t){var e=t.return;e&&e.call(t)}function C(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===l)return e;if(e!==l)return e;var o=t.prototype,n=o&&Object.getPrototypeOf(o);if(null==n||n===Object.prototype)return e;var r=n.constructor;return"function"!=typeof r||r===t?e:r}function R(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,o,n){if(k(o)){if(!T(t))throw new TypeError;if(!A(e))throw new TypeError;return function(t,e){for(var o=t.length-1;o>=0;--o){var n=(0,t[o])(e);if(!k(n)&&!O(n)){if(!A(n))throw new TypeError;e=n}}return e}(t,e)}if(!T(t))throw new TypeError;if(!S(e))throw new TypeError;if(!S(n)&&!k(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),function(t,e,o,n){for(var r=t.length-1;r>=0;--r){var i=(0,t[r])(e,o,n);if(!k(i)&&!O(i)){if(!S(i))throw new TypeError;n=i}}return n}(t,e,o=j(o),n)})),t("metadata",(function(t,e){return function(o,n){if(!S(o))throw new TypeError;if(!k(n)&&!function(t){switch(_(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;m(t,e,o,n)}})),t("defineMetadata",(function(t,e,o,n){if(!S(o))throw new TypeError;return k(n)||(n=j(n)),m(t,e,o,n)})),t("hasMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),y(t,e,o)})),t("hasOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),g(t,e,o)})),t("getMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),v(t,e,o)})),t("getOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),b(t,e,o)})),t("getMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=j(e)),w(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=j(e)),x(t,e)})),t("deleteMetadata",(function(t,e,o){if(!S(e))throw new TypeError;k(o)||(o=j(o));var n=f(e,o,!1);if(k(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var r=h.get(e);return r.delete(o),r.size>0||h.delete(e),!0}))}(r)}()}(n||(n={}))}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(9579)})()}));