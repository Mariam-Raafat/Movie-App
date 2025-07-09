import{a as Ct,b as kt,c as Lt,d as zt,e as At}from"./chunk-4UC6AJYY.js";import{b as ft,f as vt,g as y,h as Q,j as q,k as yt,l as k,m as w,o as _t,q as $t,r as xt}from"./chunk-WK7UBQRA.js";import{b as wt,c as St,e as It,f as Tt,h as Mt,i as Pt,j as Bt,k as Et,m as Ft}from"./chunk-YHULYJE4.js";import{a as H,b as Dt,c as Ot,d as Nt,e as jt,f as Rt,g as Vt}from"./chunk-IONHZB2F.js";import{a as W}from"./chunk-W7AA2VMU.js";import{a as G}from"./chunk-JANHW2XO.js";import{b as A,d as bt,e as dt,f as pt,i as _,r as gt,s as ht,u as mt}from"./chunk-5CXJVPRN.js";import"./chunk-HEVQ3NIT.js";import{$a as nt,Ab as Y,Gb as V,Hb as lt,Ib as C,Ja as $,Ka as E,Na as F,Oa as m,P,Pb as st,Q as B,Qa as L,U as d,Ub as tt,Vb as ct,Ya as x,Z as U,Za as J,_ as Z,_a as K,ab as it,ac as g,bb as a,bc as ut,cb as l,db as s,eb as p,fb as z,gb as D,hb as rt,ib as X,la as ot,lb as v,ma as S,mb as c,nb as O,ob as N,pb as I,rb as T,sb as M,vb as j,wa as et,wb as R,xb as at,ya as r,yb as h,zb as f}from"./chunk-BU46OXKY.js";var to=["content"],oo=["loadingicon"],eo=["icon"],no=["*"],Gt=t=>({class:t});function io(t,e){t&1&&rt(0)}function ro(t,e){if(t&1&&p(0,"span",8),t&2){let o=c(3);a("ngClass",o.iconClass()),x("aria-hidden",!0)("data-pc-section","loadingicon")}}function ao(t,e){if(t&1&&p(0,"SpinnerIcon",9),t&2){let o=c(3);a("styleClass",o.spinnerIconClass())("spin",!0),x("aria-hidden",!0)("data-pc-section","loadingicon")}}function lo(t,e){if(t&1&&(z(0),m(1,ro,1,3,"span",6)(2,ao,1,4,"SpinnerIcon",7),D()),t&2){let o=c(2);r(),a("ngIf",o.loadingIcon),r(),a("ngIf",!o.loadingIcon)}}function so(t,e){}function co(t,e){if(t&1&&m(0,so,0,0,"ng-template",10),t&2){let o=c(2);a("ngIf",o.loadingIconTemplate||o._loadingIconTemplate)}}function uo(t,e){if(t&1&&(z(0),m(1,lo,3,2,"ng-container",2)(2,co,1,1,null,5),D()),t&2){let o=c();r(),a("ngIf",!o.loadingIconTemplate&&!o._loadingIconTemplate),r(),a("ngTemplateOutlet",o.loadingIconTemplate||o._loadingIconTemplate)("ngTemplateOutletContext",C(3,Gt,o.iconClass()))}}function bo(t,e){if(t&1&&p(0,"span",8),t&2){let o=c(2);at(o.icon),a("ngClass",o.iconClass()),x("data-pc-section","icon")}}function po(t,e){}function go(t,e){if(t&1&&m(0,po,0,0,"ng-template",10),t&2){let o=c(2);a("ngIf",!o.icon&&(o.iconTemplate||o._iconTemplate))}}function ho(t,e){if(t&1&&(z(0),m(1,bo,1,4,"span",11)(2,go,1,1,null,5),D()),t&2){let o=c();r(),a("ngIf",o.icon&&!o.iconTemplate&&!o._iconTemplate),r(),a("ngTemplateOutlet",o.iconTemplate||o._iconTemplate)("ngTemplateOutletContext",C(3,Gt,o.iconClass()))}}function mo(t,e){if(t&1&&(l(0,"span",12),h(1),s()),t&2){let o=c();x("aria-hidden",o.icon&&!o.label)("data-pc-section","label"),r(),f(o.label)}}function fo(t,e){if(t&1&&p(0,"p-badge",13),t&2){let o=c();a("value",o.badge)("severity",o.badgeSeverity)}}var vo=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,yo={root:({instance:t,props:e})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!e.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading,"p-button-link":e.link,[`p-button-${e.severity}`]:e.severity,"p-button-raised":e.raised,"p-button-rounded":e.rounded,"p-button-text":e.text,"p-button-outlined":e.outlined,"p-button-sm":e.size==="small","p-button-lg":e.size==="large","p-button-plain":e.plain,"p-button-fluid":e.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Qt=(()=>{class t extends Q{name="button";theme=vo;classes=yo;static \u0275fac=(()=>{let o;return function(i){return(o||(o=S(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var _o=(()=>{class t extends q{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new L;onFocus=new L;onBlur=new L;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(o){this._buttonProps=o,o&&typeof o=="object"&&Object.entries(o).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ft(this.fluid)?!!n:this.fluid}_componentStyle=d(Qt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"content":this._contentTemplate=o.template;break;case"icon":this._iconTemplate=o.template;break;case"loadingicon":this._loadingIconTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}ngOnChanges(o){super.ngOnChanges(o);let{buttonProps:n}=o;if(n){let i=n.currentValue;for(let u in i)this[u]=i[u]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,o])=>!!o).reduce((o,[n])=>o+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let o;return function(i){return(o||(o=S(t)))(i||t)}})();static \u0275cmp=$({type:t,selectors:[["p-button"]],contentQueries:function(n,i,u){if(n&1&&(I(u,to,5),I(u,oo,5),I(u,eo,5),I(u,vt,4)),n&2){let b;T(b=M())&&(i.contentTemplate=b.first),T(b=M())&&(i.loadingIconTemplate=b.first),T(b=M())&&(i.iconTemplate=b.first),T(b=M())&&(i.templates=b)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",g],loading:[2,"loading","loading",g],loadingIcon:"loadingIcon",raised:[2,"raised","raised",g],rounded:[2,"rounded","rounded",g],text:[2,"text","text",g],plain:[2,"plain","plain",g],severity:"severity",outlined:[2,"outlined","outlined",g],link:[2,"link","link",g],tabindex:[2,"tabindex","tabindex",ut],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",g],fluid:[2,"fluid","fluid",g],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([Qt]),F,ot],ngContentSelectors:no,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(O(),l(0,"button",0),v("click",function(b){return i.onClick.emit(b)})("focus",function(b){return i.onFocus.emit(b)})("blur",function(b){return i.onBlur.emit(b)}),N(1),m(2,io,1,0,"ng-container",1)(3,uo,3,5,"ng-container",2)(4,ho,3,5,"ng-container",2)(5,mo,2,3,"span",3)(6,fo,1,2,"p-badge",4),s()),n&2&&(a("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),x("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),r(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),r(),a("ngIf",i.loading),r(),a("ngIf",!i.loading),r(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),r(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[_,A,bt,pt,dt,$t,yt,_t,w,k,y],encapsulation:2,changeDetection:0})}return t})(),Wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=E({type:t});static \u0275inj=B({imports:[_,_o,y,y]})}return t})();var $o=["*"],xo=({dt:t})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${t("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${t("overlaybadge.outline.color")};
}
`,Co={root:"p-overlaybadge"},Ut=(()=>{class t extends Q{name="overlaybadge";theme=xo;classes=Co;static \u0275fac=(()=>{let o;return function(i){return(o||(o=S(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),ko=(()=>{class t extends q{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(o){this._size=o,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=d(Ut);constructor(){super()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=$({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",g],size:"size"},features:[V([Ut]),F],ngContentSelectors:$o,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,i){n&1&&(O(),l(0,"div",0),N(1),p(2,"p-badge",1),s()),n&2&&(r(2),R(i.style),a("styleClass",i.styleClass)("badgeSize",i.badgeSize)("severity",i.severity)("value",i.value)("badgeDisabled",i.badgeDisabled))},dependencies:[_,w,k,y],encapsulation:2,changeDetection:0})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=E({type:t});static \u0275inj=B({imports:[ko,y,y]})}return t})();var Jt=Dt({providedIn:"root"},Rt({movies:[],currentPage:1,totalResults:0,isLoading:!1}),Ot(t=>({hasMovies:tt(()=>t.movies().length>0)})),jt(t=>{let e=d(W);return{loadMovies:(o=1)=>{H(t,{isLoading:!0,currentPage:o}),e.getMoviesList(o).subscribe({next:n=>{H(t,{movies:n.results,totalResults:n.total_results,isLoading:!1})},error:()=>{H(t,{isLoading:!1})}})}}}),Nt({onInit:t=>{let e=d(G);ct(()=>{let o=e.currentLang();t.loadMovies(t.currentPage())})}}));var wo=()=>({overflow:"hidden",height:"450px"}),Xt=t=>["movie-details",t],So=(t,e)=>e.id;function Io(t,e){t&1&&(l(0,"div",9)(1,"div",10)(2,"span",11),h(3,"Loading..."),s()()())}function To(t,e){if(t&1&&(l(0,"a",23),p(1,"img",24),s(),p(2,"p-badge",25)),t&2){let o=c().$implicit,n=c(3);a("routerLink",C(4,Xt,o.id)),r(),a("src",o.poster_url,et),r(),a("value",o.vote_average.toFixed(1))("styleClass",n.getRating(o.vote_average))}}function Mo(t,e){if(t&1){let o=X();l(0,"div",13)(1,"p-card",17),m(2,To,3,6,"ng-template",null,0,st),l(4,"div",17)(5,"a",18)(6,"span",19),h(7),s()(),l(8,"p",20),h(9),s(),l(10,"button",21),v("click",function(){let i=U(o).$implicit,u=c(3);return Z(u.watchListStore.toggleWatchList(i))}),p(11,"i",22),s()()()()}if(t&2){let o=e.$implicit,n=c(3);r(),R(lt(6,wo)),r(4),a("routerLink",C(7,Xt,o.id)),r(2),f(o.original_title),r(2),f(o.release_date),r(2),a("ngClass",n.watchListStore.isInWatchList(o.id)()?"pi pi-heart-fill text-warning":"pi pi-heart")}}function Po(t,e){if(t&1&&(l(0,"div",14)(1,"p"),h(2),s()()),t&2){let o=c(3);r(2),f(o.translateService.translate("NoMovies"))}}function Bo(t,e){if(t&1){let o=X();l(0,"div",12),nt(1,Mo,12,9,"div",13,So,!1,Po,3,1,"div",14),s(),l(4,"div",15)(5,"p-paginator",16),v("onPageChange",function(i){U(o);let u=c(2);return Z(u.onPageChange(i))}),s()()}if(t&2){let o=c(2);r(),it(o.moviesStore.movies()),r(4),a("rows",o.rows)("totalRecords",o.totalResults)("first",(o.moviesStore.currentPage()-1)*o.rows)}}function Eo(t,e){if(t&1&&J(0,Io,4,0,"div",9)(1,Bo,6,4),t&2){let o=c();K(o.moviesStore.isLoading()?0:1)}}function Fo(t,e){t&1&&p(0,"app-tv-list")}var Kt=class t{moviesStore=d(Jt);watchListStore=d(Vt);translateService=d(G);_router=d(gt);_formBuilder=d(Et);tmdb=d(W);activeTab="movies";tvShows=[];tvIsLoading=!1;tvPage=1;rows=20;totalResults=20*this.rows;searchForm=this._formBuilder.group({searchInput:["",St.required]});onSubmit(){let e=this.searchForm.get("searchInput")?.value?.trim();e&&this._router.navigate(["search-result"],{queryParams:{q:e}})}onPageChange(e){let o=e.page+1;this.activeTab==="movies"?this.moviesStore.loadMovies(o):this.loadTvShows(o)}loadTvShows(e=1){this.tvIsLoading=!0,this.tmdb.getTvShowsList(e).subscribe({next:o=>{this.tvShows=o.results,this.tvPage=e,this.totalResults=o.total_results,this.tvIsLoading=!1},error:()=>{this.tvIsLoading=!1}})}getRating(e){return e>=7?"bg-success":e>=5?"bg-warning":"bg-danger"}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=$({type:t,selectors:[["app-movie-list"]],decls:18,vars:12,consts:[["header",""],[1,"container"],[1,"hero-section","mb-5"],[1,"container","p-5"],[1,"d-flex","gap-3",3,"ngSubmit","formGroup"],["type","text","formControlName","searchInput",1,"form-control",3,"placeholder"],[1,"btn","btn-warning"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"btn","btn-outline-secondary",3,"click"],[1,"text-center","my-5"],["role","status",1,"spinner-border","text-warning"],[1,"visually-hidden"],[1,"row"],[1,"col-6","col-md-3","col-lg-2","mb-5"],[1,"col-12","text-center"],[1,"mb-5"],[1,"mb-5",3,"onPageChange","rows","totalRecords","first"],[1,"position-relative"],[1,"nav-link",3,"routerLink"],[1,"movie-title"],[1,"release-date"],[1,"position-absolute","top-50","start-100","nav-link","me-2","watchlist",3,"click"],[3,"ngClass"],[3,"routerLink"],["alt","Poster",1,"w-100",2,"height","300px","object-fit","cover",3,"src"],["badgeSize","xlarge","severity","contrast",1,"position-absolute","end-0",3,"value","styleClass"]],template:function(o,n){o&1&&(l(0,"div",1)(1,"div",2)(2,"div",3)(3,"h1"),h(4),s(),l(5,"p"),h(6),s(),l(7,"form",4),v("ngSubmit",function(){return n.onSubmit()}),p(8,"input",5),l(9,"button",6),h(10),s()()()(),l(11,"div",7)(12,"button",8),v("click",function(){return n.activeTab="movies",n.moviesStore.loadMovies(1)}),h(13),s(),l(14,"button",8),v("click",function(){return n.activeTab="tv"}),h(15),s()(),J(16,Eo,2,1)(17,Fo,1,0,"app-tv-list"),s()),o&2&&(r(4),f(n.translateService.translate("Welcome")),r(2),f(n.translateService.translate("Explore")),r(),a("formGroup",n.searchForm),r(),a("placeholder",n.translateService.translate("SearchPlaceholder")),r(2),f(n.translateService.translate("Search")),r(2),j("active",n.activeTab==="movies"),r(),Y(" ",n.translateService.translate("NowPlaying")," "),r(),j("active",n.activeTab==="tv"),r(),Y(" ",n.translateService.translate("TvShows")," "),r(),K(n.activeTab==="movies"?16:n.activeTab==="tv"?17:-1))},dependencies:[_,A,mt,ht,Wt,xt,kt,Ct,w,k,Zt,zt,Lt,Ft,Mt,wt,It,Tt,Pt,Bt,At],styles:[".hero-section[_ngcontent-%COMP%]{background-color:#f3f1f1}.release-date[_ngcontent-%COMP%]{color:gray;font-size:1rem}.movie-title[_ngcontent-%COMP%]{font-size:1rem}.watchlist[_ngcontent-%COMP%]{cursor:pointer}"]})};export{Kt as MovieList};
