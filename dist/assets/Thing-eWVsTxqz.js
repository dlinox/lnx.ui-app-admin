import{a as $,O as b,x as h,z as l,A as m,B as d,aM as T,aN as B,d as C,u as z,f as w,D as x,p as M,G as H,e as y,I as R,h as t,Q as L,i as V,ar as F,_ as W}from"./index-CuctqQ8B.js";function K(r){const{textColor2:e,cardColor:n,modalColor:i,popoverColor:c,dividerColor:v,borderRadius:u,fontSize:s,hoverColor:a}=r;return{textColor:e,color:n,colorHover:a,colorModal:i,colorHoverModal:b(i,a),colorPopover:c,colorHoverPopover:b(c,a),borderColor:v,borderColorModal:b(i,v),borderColorPopover:b(c,v),borderRadius:u,fontSize:s}}const A={name:"List",common:$,self:K};function G(r){const{textColor1:e,textColor2:n,fontWeightStrong:i,fontSize:c}=r;return{fontSize:c,titleTextColor:e,textColor:n,titleFontWeight:i}}const N={name:"Thing",common:$,self:G},Q=h([l("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[m("show-divider",[l("list-item",[h("&:not(:last-child)",[d("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),m("clickable",[l("list-item",`
 cursor: pointer;
 `)]),m("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),m("hoverable",[l("list-item",`
 border-radius: var(--n-border-radius);
 `,[h("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[d("divider",`
 background-color: transparent;
 `)])])]),m("bordered, hoverable",[l("list-item",`
 padding: 12px 20px;
 `),d("header, footer",`
 padding: 12px 20px;
 `)]),d("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),l("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d("prefix",`
 margin-right: 20px;
 flex: 0;
 `),d("suffix",`
 margin-left: 20px;
 flex: 0;
 `),d("main",`
 flex: 1;
 `),d("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),T(l("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),B(l("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),q=Object.assign(Object.assign({},x.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),S=L("n-list"),Y=C({name:"List",props:q,slots:Object,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:n,mergedRtlRef:i}=z(r),c=w("List",i,e),v=x("List","-list",Q,A,r,e);M(S,{showDividerRef:H(r,"showDivider"),mergedClsPrefixRef:e});const u=y(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:f,textColor:o,color:g,colorModal:p,colorPopover:_,borderColor:E,borderColorModal:P,borderColorPopover:j,borderRadius:k,colorHover:O,colorHoverModal:D,colorHoverPopover:I}}=v.value;return{"--n-font-size":f,"--n-bezier":a,"--n-text-color":o,"--n-color":g,"--n-border-radius":k,"--n-border-color":E,"--n-border-color-modal":P,"--n-border-color-popover":j,"--n-color-modal":p,"--n-color-popover":_,"--n-color-hover":O,"--n-color-hover-modal":D,"--n-color-hover-popover":I}}),s=n?R("list",void 0,u,r):void 0;return{mergedClsPrefix:e,rtlEnabled:c,cssVars:n?void 0:u,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;const{$slots:e,mergedClsPrefix:n,onRender:i}=this;return i==null||i(),t("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},e.header?t("div",{class:`${n}-list__header`},e.header()):null,(r=e.default)===null||r===void 0?void 0:r.call(e),e.footer?t("div",{class:`${n}-list__footer`},e.footer()):null)}}),Z=C({name:"ListItem",slots:Object,setup(){const r=V(S,null);return r||F("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:e}=this;return t("li",{class:`${e}-list-item`},r.prefix?t("div",{class:`${e}-list-item__prefix`},r.prefix()):null,r.default?t("div",{class:`${e}-list-item__main`},r):null,r.suffix?t("div",{class:`${e}-list-item__suffix`},r.suffix()):null,this.showDivider&&t("div",{class:`${e}-list-item__divider`}))}}),J=l("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[l("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),l("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[l("thing-header-wrapper",`
 flex: 1;
 `)]),l("thing-main",`
 flex-grow: 1;
 `,[l("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[d("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),d("description",[h("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),d("content",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("footer",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("action",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),U=Object.assign(Object.assign({},x.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ee=C({name:"Thing",props:U,slots:Object,setup(r,{slots:e}){const{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:c}=z(r),v=x("Thing","-thing",J,N,r,n),u=w("Thing",c,n),s=y(()=>{const{self:{titleTextColor:f,textColor:o,titleFontWeight:g,fontSize:p},common:{cubicBezierEaseInOut:_}}=v.value;return{"--n-bezier":_,"--n-font-size":p,"--n-text-color":o,"--n-title-font-weight":g,"--n-title-text-color":f}}),a=i?R("thing",void 0,s,r):void 0;return()=>{var f;const{value:o}=n,g=u?u.value:!1;return(f=a==null?void 0:a.onRender)===null||f===void 0||f.call(a),t("div",{class:[`${o}-thing`,a==null?void 0:a.themeClass,g&&`${o}-thing--rtl`],style:i?void 0:s.value},e.avatar&&r.contentIndented?t("div",{class:`${o}-thing-avatar`},e.avatar()):null,t("div",{class:`${o}-thing-main`},!r.contentIndented&&(e.header||r.title||e["header-extra"]||r.titleExtra||e.avatar)?t("div",{class:`${o}-thing-avatar-header-wrapper`},e.avatar?t("div",{class:`${o}-thing-avatar`},e.avatar()):null,e.header||r.title||e["header-extra"]||r.titleExtra?t("div",{class:`${o}-thing-header-wrapper`},t("div",{class:`${o}-thing-header`},e.header||r.title?t("div",{class:`${o}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?t("div",{class:`${o}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null),e.description||r.description?t("div",{class:[`${o}-thing-main__description`,r.descriptionClass],style:r.descriptionStyle},e.description?e.description():r.description):null):null):t(W,null,e.header||r.title||e["header-extra"]||r.titleExtra?t("div",{class:`${o}-thing-header`},e.header||r.title?t("div",{class:`${o}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?t("div",{class:`${o}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null):null,e.description||r.description?t("div",{class:[`${o}-thing-main__description`,r.descriptionClass],style:r.descriptionStyle},e.description?e.description():r.description):null),e.default||r.content?t("div",{class:[`${o}-thing-main__content`,r.contentClass],style:r.contentStyle},e.default?e.default():r.content):null,e.footer?t("div",{class:`${o}-thing-main__footer`},e.footer()):null,e.action?t("div",{class:`${o}-thing-main__action`},e.action()):null))}}});export{Y as _,ee as a,Z as b};
