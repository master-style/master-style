/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Master=e():t.Master=e()}(self,(function(){return(()=>{var t={7043:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,":host{--p: var(--modal-p, 1.25rem);--r: var(--modal-r, 0.625rem);--max-width: var(--modal-max-width, var(--wrap-xs));position:fixed;z-index:1050;left:0px;top:0px;display:flex;width:100vw;height:100%;align-items:center;justify-content:center;flex-direction:column;flex-wrap:nowrap;contain:style;padding:var(--p)}:host([placement=left]){--p: 0px;--r: 0px;right:auto}:host([placement=left]) [part=root]{margin-left:0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0}:host([placement=right]){--p: 0px;--r: 0px;right:0;left:auto}:host([placement=right]) [part=root]{margin-right:0;height:100%}:host([placement=top]){--p: 0px;bottom:auto}:host([placement=top]) [part=root]{margin-top:0;width:100%;max-height:100%;border-top-left-radius:0;border-top-right-radius:0}:host([placement=bottom]){--p: 0px;top:auto;bottom:0}:host([placement=bottom]) [part=root]{margin-bottom:0;width:100%;max-height:100%;border-bottom-left-radius:0;border-bottom-right-radius:0}:host([changing]) [part=root]{will-change:height,opacity}:host([changing]) ::slotted(m-header){z-index:1050}:host(.full){width:100% !important;max-width:100% !important}:host(.full) [part=root]{height:100%}:host(.fill){--r: 0px;--p: 0px;width:100% !important;max-width:100% !important}:host(.fill) [part=root]{height:100%}[part=root]{max-width:var(--max-width);position:relative;contain:style;display:flex;flex:0 0 auto;margin:auto;flex-direction:column;max-height:100%;width:100%;border-radius:var(--r);overflow:hidden;background-color:var(--bg-body);mask-image:radial-gradient(circle, black, black);-webkit-mask-image:-webkit-radial-gradient(circle, black, black)}::slotted(m-content){--content-offset-top: calc(var(--modal-offset-top, 0px) + env(safe-area-inset-top));--content-offset-bottom: calc(var(--modal-offset-bottom, 0px) + env(safe-area-inset-bottom));height:100%;min-height:0;flex:0 0 auto}::slotted(m-header),::slotted(m-footer){position:absolute;z-index:1050;flex:0 0 auto}[part=close]{--button-bg-color: transparent;--button-bg-color-hover: transparent;color:var(--f-fader);position:absolute;z-index:1050;top:.5rem;left:.5rem;border-radius:50%;font-size:1.25rem}[part=close] m-icon{--icon-stroke-width: 3px}:host([close-button=cross]) [part=close]{right:.5rem;left:auto}@media(max-width: 1023.98px){:host{--p: 0.625rem}}:host{--max-width: var(--wrap-xxs)}slot[name=icon]::slotted(*),[part=icon]{margin:2.875rem auto 0 auto;font-size:4rem;border-radius:50%}[part=icon][name=check]{color:var(--green)}[part=icon][name=cross]{color:var(--red);transform:rotate(90deg)}[part=title]{text-align:center;font-weight:500;margin:2.5rem 2rem;font-size:1.875rem}[part=title]~[part=text],[part=title]~slot[name=body]::slotted([slot=body]){margin-top:-1.5rem !important;padding-top:0 !important}[part=title]+[part=form]{margin-top:-2.5rem}[part=form]:not(:first-of-type){margin-top:-2rem}[part=controls]{display:flex;flex-direction:column;padding:2rem;margin:-0.5rem}[part=controls] m-input,[part=controls] m-button,[part=controls] m-textarea,[part=controls] m-select{margin:.5rem}[part=text]{text-align:center;margin:2rem;color:var(--f-theme-fader);font-size:var(--f-sm);line-height:1.4}[part=icon]+[part=title],slot[name=icon]+[part=title]{margin-top:1.5rem}slot[name=body]::slotted([slot=body]){padding:2rem !important}[part=foot]{display:flex}[part=foot] m-button{flex:1 1 0;border-radius:0;border-top:1px solid var(--b-fadest)}[part=foot] m-button:not(:first-child){border-left:1px solid var(--b-fadest)}[part=cancel]{--button-f-color: var(--f-fader)}",""]);const i=r},3412:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,":host{--p: var(--modal-p, 1.25rem);--r: var(--modal-r, 0.625rem);--max-width: var(--modal-max-width, var(--wrap-xs));position:fixed;z-index:1050;left:0px;top:0px;display:flex;width:100vw;height:100%;align-items:center;justify-content:center;flex-direction:column;flex-wrap:nowrap;contain:style;padding:var(--p)}:host([placement=left]){--p: 0px;--r: 0px;right:auto}:host([placement=left]) [part=root]{margin-left:0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0}:host([placement=right]){--p: 0px;--r: 0px;right:0;left:auto}:host([placement=right]) [part=root]{margin-right:0;height:100%}:host([placement=top]){--p: 0px;bottom:auto}:host([placement=top]) [part=root]{margin-top:0;width:100%;max-height:100%;border-top-left-radius:0;border-top-right-radius:0}:host([placement=bottom]){--p: 0px;top:auto;bottom:0}:host([placement=bottom]) [part=root]{margin-bottom:0;width:100%;max-height:100%;border-bottom-left-radius:0;border-bottom-right-radius:0}:host([changing]) [part=root]{will-change:height,opacity}:host([changing]) ::slotted(m-header){z-index:1050}:host(.full){width:100% !important;max-width:100% !important}:host(.full) [part=root]{height:100%}:host(.fill){--r: 0px;--p: 0px;width:100% !important;max-width:100% !important}:host(.fill) [part=root]{height:100%}[part=root]{max-width:var(--max-width);position:relative;contain:style;display:flex;flex:0 0 auto;margin:auto;flex-direction:column;max-height:100%;width:100%;border-radius:var(--r);overflow:hidden;background-color:var(--bg-body);mask-image:radial-gradient(circle, black, black);-webkit-mask-image:-webkit-radial-gradient(circle, black, black)}::slotted(m-content){--content-offset-top: calc(var(--modal-offset-top, 0px) + env(safe-area-inset-top));--content-offset-bottom: calc(var(--modal-offset-bottom, 0px) + env(safe-area-inset-bottom));height:100%;min-height:0;flex:0 0 auto}::slotted(m-header),::slotted(m-footer){position:absolute;z-index:1050;flex:0 0 auto}[part=close]{--button-bg-color: transparent;--button-bg-color-hover: transparent;color:var(--f-fader);position:absolute;z-index:1050;top:.5rem;left:.5rem;border-radius:50%;font-size:1.25rem}[part=close] m-icon{--icon-stroke-width: 3px}:host([close-button=cross]) [part=close]{right:.5rem;left:auto}@media(max-width: 1023.98px){:host{--p: 0.625rem}}",""]);const i=r},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},453:(t,e,o)=>{"use strict";function n(t){return(e,o)=>{const n=o.split("Emitter")[0],r=new CustomEvent(n,t),i=function(e){if(this.emit||(null==t?void 0:t.force))return r.data=e,this.dispatchEvent(r),r};return{get:()=>i}}}o.d(e,{j:()=>n})},5109:(t,e,o)=>{"use strict";o.d(e,{Ps:()=>r,W_:()=>d,fI:()=>a,Qu:()=>g,kh:()=>i}),o(6472);const n={reflect:!0,observe:!0,render:!0};function r(t){return t=Object.assign(Object.assign({},n),t),(e,o)=>{t.type=Reflect.getMetadata("design:type",e,o).name,t.propKey=o;const n="_"+o,r=t.key=t.key||o.replace(/([A-Z])/g,(t=>"-"+t[0])).toLowerCase(),i=e.constructor,s=t.update,a=t.parse,c={get(){return this[n]},set(e,o){const i=this[n];a&&(e=a(this,e,i)),e!==i&&(this[n]=e,this.initial&&(s&&s(this,e,i),t.reflect&&!o&&("Boolean"===t.type?this.toggleAttribute(r,!!e):this.setAttribute(r,e)),t.render&&this.render&&this.render()))}};return t.set=c.set,t.observe&&(i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(r)),i.attrsOptions?i.attrsOptions=Object.assign({},i.attrsOptions):i.attrsOptions={},i.attrsOptions[r]=t,c}}function i(t){return t&&"none"!==t}const s={render:!0};function a(t){return t=Object.assign(Object.assign({},s),t),(e,o)=>{t.type=Reflect.getMetadata("design:type",e,o).name;const n="_"+o,r=e.constructor,i=t.update,s=t.parse,a={get(){return this[n]},set(e){const o=this[n];s&&(e=s(this,e,o)),e!==o&&(this[n]=e,this.initial&&(i&&i(this,e,o),t.render&&this.render&&this.render()))}};return r.propsOptions?r.propsOptions=Object.assign({},r.propsOptions):r.propsOptions={},r.propsOptions[o]=t,a}}const c=new CustomEvent("ready"),l={shadow:!0};function d(t){return t=Object.assign(Object.assign({},l),t),function(e){e.elementName=t.tag.replace("m-","");const o=e.prototype,n=e.attrsOptions,r=e.propsOptions,i=o.onConnected,s=o.onDisconnected,a=o.onAttrChanged;o.attributeChangedCallback=function(t,e,o){if(o===e)return;const r=n[t],i=r.type;o=p(o,i),e=p(e,i),r.set.call(this,o,!0),a&&a.call(this,t,o,e)},o.connectedCallback=function(){if(this.ready=!1,this.initial=!1,r)for(const t in e.propsOptions){const e=r[t],o=this["_"+t],n=e.update;n&&n(this,o)}if(n){const t=this.attributes;for(const e in n){const o=n[e],r=this["_"+o.propKey],i=t[e];if(void 0===r)continue;let s,a;if(i&&(a=p(i.value,o.type)),a!==r){if(void 0!==a)s=a;else{if(void 0===r)continue;s=r}o.reflect&&("Boolean"===o.type?this.toggleAttribute(e,s):this.setAttribute(e,s))}}}if(t.shadow&&!this.shadowRoot){const e=this.attachShadow({mode:"open"});if(t.css&&e.adoptedStyleSheets){const o=new CSSStyleSheet;o.replaceSync(t.css),e.adoptedStyleSheets=[o]}else if(t.css){const o=document.createElement("style");o.innerHTML=t.css,e.appendChild(o)}}if(this.render&&this.render(),this.initial=!0,n)for(const t in e.attrsOptions){const e=n[t],o=this["_"+e.propKey],r=e.update;r&&r(this,o)}this.ready=!0,this.emit&&this.dispatchEvent(c),i&&i.call(this)},o.disconnectedCallback=function(){this.removeRender&&this.removeRender(),s&&s.call(this)},window.customElements.define(t.tag,e)}}const p=(t,e)=>{if("undefined"!==t)switch(e){case"Number":return""===t?null:isNaN(+t)?t:+t;case"Boolean":return!(""!==t&&!t);default:return t}};var h=o(9312);class u extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>{const t=!this.href&&"anchor"!==this.type||this.disabled?this.type||this.disabled?"button":null:"a",e=["m-icon",{$if:this.busy,name:"spinner",part:"spinner"}];switch(t){case"button":return[t,{class:"touch",part:"root",disabled:this.disabled,type:this.type},this.slotTemplate||["slot"],e];case"a":return[t,{class:"touch",part:"root",href:this.href,download:this.download,rel:this.rel,target:this.target},this.slotTemplate||["slot"],e];default:return["div",{part:"root"},this.slotTemplate||["slot"],e]}}))}render(){this.template.render(this.shadowRoot)}}(0,h.gn)([r({update(t,e,o){"submit"===e?t.on("click",(e=>{const o=t.closest("form");if(o.querySelectorAll("m-input,m-textarea,m-select,m-check").forEach((t=>{t.dirty=!0})),o){if(!o.checkValidity())return;o.requestSubmit?o.requestSubmit():o.submit()}}),{id:[t],passive:!0}):"submit"===e&&"submit"!==o||t.off({id:[t]})}}),(0,h.w6)("design:type",String)],u.prototype,"type",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Boolean)],u.prototype,"busy",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",String)],u.prototype,"rel",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",String)],u.prototype,"href",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Boolean)],u.prototype,"disabled",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Number)],u.prototype,"download",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",String)],u.prototype,"target",void 0);var f=o(453);class g extends HTMLElement{constructor(){super(...arguments),this.hidden=!1,this.duration=500,this.easing="cubic-bezier(.25,.8,.25,1)",this.triggerEvent="click",this.emit=!1,this.animations=[]}prepare(){return(0,h.mG)(this,void 0,void 0,(function*(){if(this.triggerEvent){const t="toggle-"+this.constructor.elementName;$("["+t+"]").forEach((e=>{if(this.matches(e.getAttribute(t))){e.toggleAttribute("aria-expanded",!this.hidden);const t=e.querySelector(".toggled");t&&t.toggleAttribute("active",!this.hidden)}}))}if(this.animation)for(const t of this.animations)t.reverse();else if(this.duration){this.toggleAttribute("changing",!0),yield this.toggling({easing:this.easing,duration:this.duration});const t=this.hidden;t&&this.toggleAttribute("hidden",!0);const e=t?this.onClosed:this.onOpened;e&&e.call(this),this.toggleAttribute("changing",!1),this.animation=null,this.animations=[]}}))}open(){return(0,h.mG)(this,void 0,void 0,(function*(){if(!this.hidden)return;this._hidden=!1,this.toggleAttribute("hidden",!1);const t=this.onOpen;t&&(yield t.call(this)),this.openEmitter(),yield this.changing=this.prepare(),this.openedEmitter()}))}close(){return(0,h.mG)(this,void 0,void 0,(function*(){if(this.hidden)return;this._hidden=!0;const t=this.onClose;t&&(yield t.call(this)),this.closeEmitter(),yield this.changing=this.prepare(),this.closedEmitter()}))}toggle(t){return(0,h.mG)(this,void 0,void 0,(function*(){t="boolean"==typeof t?t:this.hidden,yield t?this.open():this.close()}))}onDisconnected(){document.body.off({id:[this,this.constructor.elementName]})}}(0,h.gn)([r({update(t,e){if(t.ready){const o=t[e?"onClose":"onOpen"];o&&o(),t.prepare()}}}),(0,h.w6)("design:type",Boolean)],g.prototype,"hidden",void 0),(0,h.gn)([r({reflect:!1}),(0,h.w6)("design:type",Object)],g.prototype,"duration",void 0),(0,h.gn)([r({reflect:!1}),(0,h.w6)("design:type",Boolean)],g.prototype,"fade",void 0),(0,h.gn)([r({reflect:!1}),(0,h.w6)("design:type",Object)],g.prototype,"easing",void 0),(0,h.gn)([r({reflect:!1,update(t,e,o){const n=t.constructor.elementName;if(o&&document.body.off({id:[t,n]}),e){const o="toggle-"+n,r=e.split(","),i=t.handleTrigger;document.body.on(r.join(" "),"["+o+"]",(function(e){const n=this;if(this.disabled)return;const s=n.getAttribute(o);if(!t.matches(s))return;const a=e.type;let c;if(r.length>1){if(c=t.hidden,c&&-1===r[0].split(" ").indexOf(a)||!c&&-1===r[1].split(" ").indexOf(a))return;if(i&&!1===i.call(t,e,c))return}else c=!("checked"in n)||"input"!==a&&"change"!==a?t.hidden:!!n.checked;c&&!t.animation&&(t.trigger=n),t.toggle(c)}),{passive:!0,id:[t,n]})}}}),(0,h.w6)("design:type",String)],g.prototype,"triggerEvent",void 0),(0,h.gn)([r({reflect:!1,render:!1}),(0,h.w6)("design:type",Boolean)],g.prototype,"emit",void 0),(0,h.gn)([(0,f.j)(),(0,h.w6)("design:type",Function)],g.prototype,"openEmitter",void 0),(0,h.gn)([(0,f.j)(),(0,h.w6)("design:type",Function)],g.prototype,"closeEmitter",void 0),(0,h.gn)([(0,f.j)(),(0,h.w6)("design:type",Function)],g.prototype,"openedEmitter",void 0),(0,h.gn)([(0,f.j)(),(0,h.w6)("design:type",Function)],g.prototype,"closedEmitter",void 0);class y extends HTMLElement{constructor(){super(...arguments),this.dirty=!1,this.touched=!1}validate(){if(!this.ready)return;this.valid=this.validity.valid,this.invalid=!this.validity.valid;let t=!1;for(const o in this.validity){const n=this.validity[o],r=this["when"+(e=o,e.charAt(0).toUpperCase()+e.slice(1))];if(r&&(t=t||r),n&&r)return console.log(this,this.prompt,o,n),void(this.prompt=r)}var e;t||this.toggleAttribute("prompt",!1)}render(){this.controlTemplate.render(this),this.template.render(this.shadowRoot)}}(0,h.gn)([r({render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"emit",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Boolean)],y.prototype,"busy",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",String)],y.prototype,"name",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Boolean)],y.prototype,"disabled",void 0),(0,h.gn)([r(),(0,h.w6)("design:type",Boolean)],y.prototype,"required",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenBadInput",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenCustomError",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenPatternMismatch",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenRangeOverflow",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenRangeUnderflow",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenStepMismatch",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenTooLong",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenTypeMismatch",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenValueMissing",void 0),(0,h.gn)([r({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],y.prototype,"whenValid",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",String)],y.prototype,"prompt",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"valid",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"warning",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"invalid",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"dirty",void 0),(0,h.gn)([r({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],y.prototype,"touched",void 0)},6828:(t,e,o)=>{"use strict";o.r(e),o.d(e,{DialogElement:()=>l});var n=o(9312),r=o(5109),i=o(1637),s=o(7043);const a=(t,e,o)=>o?Object.assign({},o,e):e;var c;!function(t){t.success="check",t.error="cross"}(c||(c={}));let l=class extends i.ModalElement{constructor(){super(...arguments),this.lightTemplate=window.Master((()=>["div",{$if:this.icon,slot:"icon",$html:this.icon&&this.iconOnBusy||this.icon},"article",{$if:this.body,slot:"body",class:"prose",$html:this.body&&this.bodyOnBusy||this.body}])),this.contentTokens=()=>["m-icon",{class:"animated",$if:this.type,part:"icon",name:c[this.type]},"slot",{$if:this.icon,name:"icon"},"h2",{$if:this.title,part:"title",$text:this.busy&&this.titleOnBusy||this.title},"p",{$if:this.text,part:"text",$text:this.busy&&this.textOnBusy||this.text},"slot",{name:"body",$if:this.body,$text:this.busy&&this.bodyOnBusy||this.body},"form",{part:"form",$created:t=>this.form=t.on("submit",(t=>{console.log(t),t.preventDefault()}))},["div",{$if:this.controls.length,part:"controls",class:"y"},this.controls,"div",{part:"foot"},["m-button",this.cancelButton,"m-button",this.rejectButton,"m-button",this.acceptButton]]],this._hidden=!0,this._duration=300,this._placement="center",this.controls=[],this.role="dialog",this.acceptButton={$if:!0,$text:"ok",$on:{click:()=>this.accept()},busy:!1,disabled:!1},this.rejectButton={$if:!1,$text:"deny",$on:{click:()=>this.reject()},busy:!1,disabled:!1},this.cancelButton={$if:!1,$text:"cancel",$on:{click:()=>this.cancel()},style:"--button-f-color: var(--f-fade)",busy:!1,disabled:!1},this.busy=!1}get data(){const t={};let e=!0;return this.form.querySelectorAll("m-input,m-select,m-textarea,m-check").map((o=>{o.name&&(t[o.name]=o.value,e=e&&o.valid)})),{value:t,valid:e}}handleAction(t){return(0,n.mG)(this,void 0,void 0,(function*(){let e=!0;this.lastAction=t;const o=this["on"+t.charAt(0).toUpperCase()+t.slice(1)];if(o){const n=o(this.data,this);if(n instanceof Promise){const o=this[t+"Button"];this.busy=o.busy=!0;try{e=yield n}catch(t){e=!1}this.busy=o.busy=!1}else e=n}return e&&this.close(),e}))}accept(){return(0,n.mG)(this,void 0,void 0,(function*(){yield this.handleAction("accept")}))}reject(){return(0,n.mG)(this,void 0,void 0,(function*(){yield this.handleAction("reject")}))}cancel(){return(0,n.mG)(this,void 0,void 0,(function*(){yield this.handleAction("cancel")}))}onClosed(){this.remove()}};(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",Array)],l.prototype,"controls",void 0),(0,n.gn)([(0,r.Ps)({observe:!1,render:!1}),(0,n.w6)("design:type",Object)],l.prototype,"role",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"title",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"titleOnBusy",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"text",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"textOnBusy",void 0),(0,n.gn)([(0,r.fI)({parse:a}),(0,n.w6)("design:type",Object)],l.prototype,"acceptButton",void 0),(0,n.gn)([(0,r.fI)({parse:a}),(0,n.w6)("design:type",Object)],l.prototype,"rejectButton",void 0),(0,n.gn)([(0,r.fI)({parse:a}),(0,n.w6)("design:type",Object)],l.prototype,"cancelButton",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"body",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"bodyOnBusy",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"type",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"typeOnBusy",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"icon",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",String)],l.prototype,"iconOnBusy",void 0),(0,n.gn)([(0,r.fI)(),(0,n.w6)("design:type",Boolean)],l.prototype,"busy",void 0),l=(0,n.gn)([(0,r.W_)({tag:"m-dialog",css:s.Z})],l);const d=document.createElement("m-dialog");window.$.dialog=t=>{const e=d.cloneNode();for(const o in t){const n=t[o];e[o]=n}return document.body.appendChild(e),e.open(),console.log(e.acceptButton),e}},1637:(t,e,o)=>{"use strict";o.d(e,{ModalElement:()=>v});var n=o(9312),r=o(5109),i=!1;if("undefined"!=typeof window){var s={get passive(){i=!0}};window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],l=!1,d=-1,p=void 0,h=void 0,u=function(t){return c.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},f=function(t){var e=t||window.event;return!!u(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},g=o(3412);const y="modal",m="px";let v=class extends r.Qu{constructor(){super(...arguments),this.contentTokens=()=>["slot",{$created:t=>this.wrap=t}],this.template=window.Master((()=>["m-overlay",{part:"overlay",$if:(0,r.kh)(this.overlay),$created:t=>this.overlayElement=t},"div",{part:"root",$created:t=>this.root=t},[...this.contentTokens(),"m-button",{part:"close",class:"round xs",$if:this.closeButton,$created:t=>this.closeElement=t},["m-icon",{name:this.closeButton,direction:"left"}]]])),this.overlay="static"}render(){this.template.render(this.shadowRoot),this.lightTemplate&&this.lightTemplate.render(this)}removeRender(){this.template.remove()}toggling(t){let e,o,n;if("origin"===this.placement&&this.trigger){!this.hidden&&this.hideTrigger&&this.trigger.toggleClass("invisible",!0),o=this.children.filter((t=>t.matches("m-content")))[0],o&&(o.disable(),o.to({x:0,y:0},this.duration));const t=this.trigger.getBoundingClientRect(),n=this.root.getBoundingClientRect(),r=t.width/n.width;console.log(n);const i=t.left-n.left+(t.width-n.width)/2,s=t.top-n.top+(t.height-n.height)/2;e=[{transform:`translate(${i+m}, ${s+m}) scale(${r})`,height:t.height/r+m,opacity:this.fade?0:1},{transform:"translate(0,0) scale(1)",height:n.height+m,opacity:1}]}else if(this.placement&&"origin"!==this.placement)if("center"===this.placement)e=[{transform:`scale(${this.hidden?.9:1.1})`,opacity:0},{transform:"scale(1)",opacity:1}];else{let o,r,i,s;switch(this.placement){case"right":r="X",i="100%",this.pushing&&(s=-this.root.offsetWidth/3);break;case"left":r="X",i="-100%",this.pushing&&(s=this.root.offsetWidth/3);break;case"bottom":r="Y",i="100%",this.pushing&&(s=-this.root.offsetHeight/3);break;case"top":r="Y",i="-100%",this.pushing&&(s=this.root.offsetHeight/3)}this.pushing&&(o=[{transform:"translate"+r+"(0)"},{transform:"translate"+r+"("+s+"px)"}],this.hidden&&o.reverse(),n=document.querySelector(this.pushing),n&&this.animations.push(n.animate(o,Object.assign(Object.assign({},t),{fill:"both"})))),e=[{transform:"translate"+r+"("+i+")"},{transform:"translate"+r+"(0)"}]}else e=[{opacity:0},{opacity:1}];const s=[{opacity:0},{opacity:1}];return this.hidden&&(e.reverse(),s.reverse()),(0,r.kh)(this.overlay)&&this.animations.push(this.overlayElement.animate(s,t)),this.animation=this.root.animate(e,t),this.animations.push(this.animation),new Promise((t=>{this.animation.onfinish=()=>{const e=this.hidden;var n;e&&this.trigger&&this.hideTrigger&&this.trigger.toggleClass("invisible",!1),o&&(e?(n=o.root)?(c=c.filter((function(t){return t.targetElement!==n})),a?(n.ontouchstart=null,n.ontouchmove=null,l&&0===c.length&&(document.removeEventListener("touchmove",f,i?{passive:!1}:void 0),l=!1)):c.length||(void 0!==h&&(document.body.style.paddingRight=h,h=void 0),void 0!==p&&(document.body.style.overflow=p,p=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):(function(t,e){if(t){if(!c.some((function(e){return e.targetElement===t}))){var o={targetElement:t,options:e||{}};c=[].concat(function(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}(c),[o]),a?(t.ontouchstart=function(t){1===t.targetTouches.length&&(d=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var o=t.targetTouches[0].clientY-d;!u(t.target)&&(e&&0===e.scrollTop&&o>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&o<0?f(t):t.stopPropagation())}(e,t)},l||(document.addEventListener("touchmove",f,i?{passive:!1}:void 0),l=!0)):function(t){if(void 0===h){var e=!!t&&!0===t.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;e&&o>0&&(h=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===p&&(p=document.body.style.overflow,document.body.style.overflow="hidden")}(e)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")}(o.root),o.enable())),t()}}))}};(0,n.gn)([(0,r.Ps)(),(0,n.w6)("design:type",String)],v.prototype,"placement",void 0),(0,n.gn)([(0,r.Ps)({reflect:!1}),(0,n.w6)("design:type",String)],v.prototype,"pushing",void 0),(0,n.gn)([(0,r.Ps)({reflect:!1}),(0,n.w6)("design:type",Boolean)],v.prototype,"closeOnScroll",void 0),(0,n.gn)([(0,r.Ps)({update(t,e,o){(e&&o||!e&&o)&&t.closeElement.off({id:[y]}),e&&t.closeElement.on("click",(()=>t.close()),{passive:!0,id:[y]})}}),(0,n.w6)("design:type",String)],v.prototype,"closeButton",void 0),(0,n.gn)([(0,r.Ps)({reflect:!1}),(0,n.w6)("design:type",Boolean)],v.prototype,"hideTrigger",void 0),(0,n.gn)([(0,r.Ps)({reflect:!1,update(t,e,o){"close"!==o&&"none"!==o||t.overlayElement.off({id:[y]}),"close"===e&&t.overlayElement.on("click",(()=>t.close()),{passive:!0,id:[y]})}}),(0,n.w6)("design:type",String)],v.prototype,"overlay",void 0),v=(0,n.gn)([(0,r.W_)({tag:"m-modal",css:g.Z})],v)},9312:(t,e,o)=>{"use strict";function n(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function i(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}o.d(e,{gn:()=>n,w6:()=>r,mG:()=>i}),Object.create,Object.create},6472:(t,e,o)=>{var n;!function(t){!function(e){var n="object"==typeof o.g?o.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=i(t);function i(t,e){return function(o,n){"function"!=typeof t[o]&&Object.defineProperty(t,o,{configurable:!0,writable:!0,value:n}),e&&e(o,n)}}void 0===n.Reflect?n.Reflect=t:r=i(n.Reflect,r),function(t){var e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol,n=o&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=o&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,s={__proto__:[]}instanceof Array,a=!i&&!s,c={create:i?function(){return R(Object.create(null))}:s?function(){return R({__proto__:null})}:function(){return R({})},has:a?function(t,o){return e.call(t,o)}:function(t,e){return e in t},get:a?function(t,o){return e.call(t,o)?t[o]:void 0}:function(t,e){return t[e]}},l=Object.getPrototypeOf(Function),d="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,p=d||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],o=function(){function t(t,e,o){this._index=0,this._keys=t,this._values=e,this._selector=o}return t.prototype["@@iterator"]=function(){return this},t.prototype[r]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var o=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:o,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var o=this._find(t,!0);return this._values[o]=e,this},e.prototype.delete=function(e){var o=this._find(e,!1);if(o>=0){for(var n=this._keys.length,r=o+1;r<n;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new o(this._keys,this._values,n)},e.prototype.values=function(){return new o(this._keys,this._values,i)},e.prototype.entries=function(){return new o(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[r]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function s(t,e){return[t,e]}}():Map,h=d||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new p}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[r]=function(){return this.keys()},t}():Set,u=new(d||"function"!=typeof WeakMap?function(){var t=c.create(),o=n();return function(){function t(){this._key=n()}return t.prototype.has=function(t){var e=r(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=r(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){return r(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=r(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=n()},t}();function n(){var e;do{e="@@WeakMap@@"+s()}while(c.has(t,e));return t[e]=!0,e}function r(t,n){if(!e.call(t,o)){if(!n)return;Object.defineProperty(t,o,{value:c.create()})}return t[o]}function i(t,e){for(var o=0;o<e;++o)t[o]=255*Math.random()|0;return t}function s(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):i(new Uint8Array(t),t):i(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var o="",n=0;n<16;++n){var r=e[n];4!==n&&6!==n&&8!==n||(o+="-"),r<16&&(o+="0"),o+=r.toString(16).toLowerCase()}return o}}():WeakMap);function f(t,e,o){var n=u.get(t);if(k(n)){if(!o)return;n=new p,u.set(t,n)}var r=n.get(e);if(k(r)){if(!o)return;r=new p,n.set(e,r)}return r}function g(t,e,o){if(y(t,e,o))return!0;var n=I(e);return!O(n)&&g(t,n,o)}function y(t,e,o){var n=f(e,o,!1);return!k(n)&&!!n.has(t)}function m(t,e,o){if(y(t,e,o))return v(t,e,o);var n=I(e);return O(n)?void 0:m(t,n,o)}function v(t,e,o){var n=f(e,o,!1);if(!k(n))return n.get(t)}function b(t,e,o,n){f(o,n,!0).set(t,e)}function w(t,e){var o=x(t,e),n=I(t);if(null===n)return o;var r=w(n,e);if(r.length<=0)return o;if(o.length<=0)return r;for(var i=new h,s=[],a=0,c=o;a<c.length;a++){var l=c[a];i.has(l)||(i.add(l),s.push(l))}for(var d=0,p=r;d<p.length;d++)l=p[d],i.has(l)||(i.add(l),s.push(l));return s}function x(t,e){var o=[],n=f(t,e,!1);if(k(n))return o;for(var i=function(t){var e=M(t,r);if(!B(e))throw new TypeError;var o=e.call(t);if(!S(o))throw new TypeError;return o}(n.keys()),s=0;;){var a=P(i);if(!a)return o.length=s,o;var c=a.value;try{o[s]=c}catch(t){try{$(i)}finally{throw t}}s++}}function _(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function O(t){return null===t}function S(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(_(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var o=3===e?"string":5===e?"number":"default",r=M(t,n);if(void 0!==r){var i=r.call(t,o);if(S(i))throw new TypeError;return i}return function(t,e){if("string"===e){var o=t.toString;if(B(o)&&!S(r=o.call(t)))return r;if(B(n=t.valueOf)&&!S(r=n.call(t)))return r}else{var n;if(B(n=t.valueOf)&&!S(r=n.call(t)))return r;var r,i=t.toString;if(B(i)&&!S(r=i.call(t)))return r}throw new TypeError}(t,"default"===o?"number":o)}function j(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function T(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function B(t){return"function"==typeof t}function A(t){return"function"==typeof t}function M(t,e){var o=t[e];if(null!=o){if(!B(o))throw new TypeError;return o}}function P(t){var e=t.next();return!e.done&&e}function $(t){var e=t.return;e&&e.call(t)}function I(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===l)return e;if(e!==l)return e;var o=t.prototype,n=o&&Object.getPrototypeOf(o);if(null==n||n===Object.prototype)return e;var r=n.constructor;return"function"!=typeof r||r===t?e:r}function R(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,o,n){if(k(o)){if(!T(t))throw new TypeError;if(!A(e))throw new TypeError;return function(t,e){for(var o=t.length-1;o>=0;--o){var n=(0,t[o])(e);if(!k(n)&&!O(n)){if(!A(n))throw new TypeError;e=n}}return e}(t,e)}if(!T(t))throw new TypeError;if(!S(e))throw new TypeError;if(!S(n)&&!k(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),function(t,e,o,n){for(var r=t.length-1;r>=0;--r){var i=(0,t[r])(e,o,n);if(!k(i)&&!O(i)){if(!S(i))throw new TypeError;n=i}}return n}(t,e,o=j(o),n)})),t("metadata",(function(t,e){return function(o,n){if(!S(o))throw new TypeError;if(!k(n)&&!function(t){switch(_(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;b(t,e,o,n)}})),t("defineMetadata",(function(t,e,o,n){if(!S(o))throw new TypeError;return k(n)||(n=j(n)),b(t,e,o,n)})),t("hasMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),g(t,e,o)})),t("hasOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),y(t,e,o)})),t("getMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),m(t,e,o)})),t("getOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=j(o)),v(t,e,o)})),t("getMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=j(e)),w(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=j(e)),x(t,e)})),t("deleteMetadata",(function(t,e,o){if(!S(e))throw new TypeError;k(o)||(o=j(o));var n=f(e,o,!1);if(k(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var r=u.get(e);return r.delete(o),r.size>0||u.delete(e),!0}))}(r)}()}(n||(n={}))}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(6828)})()}));