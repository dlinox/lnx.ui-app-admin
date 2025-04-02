import{a as O,O as f,P as h,z as m,B as i,A as y,W as F,x as V,d as N,u as q,D as E,f as D,e as $,I as K,r as U,h as l,q as X,aV as Y,aq as Z,aC as G,a0 as J,U as Q,aW as ee,aX as oe,aY as re,aZ as ne,a_ as se,aw as c}from"./index-BOXL2TiF.js";const le={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function te(r){const{lineHeight:e,borderRadius:d,fontWeightStrong:v,baseColor:t,dividerColor:C,actionColor:P,textColor1:g,textColor2:s,closeColorHover:u,closeColorPressed:b,closeIconColor:p,closeIconColorHover:x,closeIconColorPressed:n,infoColor:o,successColor:I,warningColor:z,errorColor:S,fontSize:T}=r;return Object.assign(Object.assign({},le),{fontSize:T,lineHeight:e,titleFontWeight:v,borderRadius:d,border:`1px solid ${C}`,color:P,titleTextColor:g,iconColor:s,contentTextColor:s,closeBorderRadius:d,closeColorHover:u,closeColorPressed:b,closeIconColor:p,closeIconColorHover:x,closeIconColorPressed:n,borderInfo:`1px solid ${f(t,h(o,{alpha:.25}))}`,colorInfo:f(t,h(o,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:o,contentTextColorInfo:s,closeColorHoverInfo:u,closeColorPressedInfo:b,closeIconColorInfo:p,closeIconColorHoverInfo:x,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${f(t,h(I,{alpha:.25}))}`,colorSuccess:f(t,h(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:s,closeColorHoverSuccess:u,closeColorPressedSuccess:b,closeIconColorSuccess:p,closeIconColorHoverSuccess:x,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${f(t,h(z,{alpha:.33}))}`,colorWarning:f(t,h(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:s,closeColorHoverWarning:u,closeColorPressedWarning:b,closeIconColorWarning:p,closeIconColorHoverWarning:x,closeIconColorPressedWarning:n,borderError:`1px solid ${f(t,h(S,{alpha:.25}))}`,colorError:f(t,h(S,{alpha:.08})),titleTextColorError:g,iconColorError:S,contentTextColorError:s,closeColorHoverError:u,closeColorPressedError:b,closeIconColorError:p,closeIconColorHoverError:x,closeIconColorPressedError:n})}const ie={name:"Alert",common:O,self:te},ae=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[m("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),m("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),F({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("right-adjust",[m("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),ce=Object.assign(Object.assign({},E.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ge=N({name:"Alert",inheritAttrs:!1,props:ce,slots:Object,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:v,mergedRtlRef:t}=q(r),C=E("Alert","-alert",ae,ie,r,e),P=D("Alert",t,e),g=$(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=C.value,{fontSize:I,borderRadius:z,titleFontWeight:S,lineHeight:T,iconSize:H,iconMargin:R,iconMarginRtl:_,closeIconSize:W,closeBorderRadius:w,closeSize:A,closeMargin:B,closeMarginRtl:M,padding:j}=o,{type:a}=r,{left:k,right:L}=se(R);return{"--n-bezier":n,"--n-color":o[c("color",a)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":o[c("closeColorHover",a)],"--n-close-color-pressed":o[c("closeColorPressed",a)],"--n-close-icon-color":o[c("closeIconColor",a)],"--n-close-icon-color-hover":o[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":o[c("closeIconColorPressed",a)],"--n-icon-color":o[c("iconColor",a)],"--n-border":o[c("border",a)],"--n-title-text-color":o[c("titleTextColor",a)],"--n-content-text-color":o[c("contentTextColor",a)],"--n-line-height":T,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":S,"--n-icon-size":H,"--n-icon-margin":R,"--n-icon-margin-rtl":_,"--n-close-size":A,"--n-close-margin":B,"--n-close-margin-rtl":M,"--n-padding":j,"--n-icon-margin-left":k,"--n-icon-margin-right":L}}),s=v?K("alert",$(()=>r.type[0]),g,r):void 0,u=U(!0),b=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:P,mergedClsPrefix:e,mergedBordered:d,visible:u,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(u.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:C,cssVars:v?void 0:g,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),l(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,v={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},X(this.$attrs,v)),this.closable&&l(Y,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${e}-alert__border`}),this.showIcon&&l("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(d.icon,()=>[l(Q,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return l(ne,null);case"info":return l(re,null);case"warning":return l(oe,null);case"error":return l(ee,null);default:return null}}})])),l("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},G(d.header,t=>{const C=t||this.title;return C?l("div",{class:`${e}-alert-body__title`},C):null}),d.default&&l("div",{class:`${e}-alert-body__content`},d))):null}})}});export{ge as _};
