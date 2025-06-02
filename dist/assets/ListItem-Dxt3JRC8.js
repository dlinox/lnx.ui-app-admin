import{a as D,O as m,x as p,z as s,ca as H,cb as M,A as v,B as n,Q as B,d as u,h as t,u as E,f as O,G as f,p as I,H as L,e as K,K as S,i as T,ba as V}from"./index-BOyx2DGO.js";function A(o){const{textColor2:r,cardColor:e,modalColor:l,popoverColor:d,dividerColor:a,borderRadius:b,fontSize:i,hoverColor:c}=o;return{textColor:r,color:e,colorHover:c,colorModal:l,colorHoverModal:m(l,c),colorPopover:d,colorHoverPopover:m(d,c),borderColor:a,borderColorModal:m(l,a),borderColorPopover:m(d,a),borderRadius:b,fontSize:i}}const G={common:D,self:A},Q=p([s("list",`
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
 `,[v("show-divider",[s("list-item",[p("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),v("clickable",[s("list-item",`
 cursor: pointer;
 `)]),v("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),v("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[p("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),v("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),s("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),H(s("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),M(s("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),q=Object.assign(Object.assign({},f.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),h=B("n-list"),J=u({name:"List",props:q,slots:Object,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:e,mergedRtlRef:l}=E(o),d=O("List",l,r),a=f("List","-list",Q,G,o,r);I(h,{showDividerRef:L(o,"showDivider"),mergedClsPrefixRef:r});const b=K(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:g,textColor:x,color:C,colorModal:_,colorPopover:z,borderColor:R,borderColorModal:$,borderColorPopover:P,borderRadius:k,colorHover:w,colorHoverModal:y,colorHoverPopover:j}}=a.value;return{"--n-font-size":g,"--n-bezier":c,"--n-text-color":x,"--n-color":C,"--n-border-radius":k,"--n-border-color":R,"--n-border-color-modal":$,"--n-border-color-popover":P,"--n-color-modal":_,"--n-color-popover":z,"--n-color-hover":w,"--n-color-hover-modal":y,"--n-color-hover-popover":j}}),i=e?S("list",void 0,b,o):void 0;return{mergedClsPrefix:r,rtlEnabled:d,cssVars:e?void 0:b,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var o;const{$slots:r,mergedClsPrefix:e,onRender:l}=this;return l==null||l(),t("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},r.header?t("div",{class:`${e}-list__header`},r.header()):null,(o=r.default)===null||o===void 0?void 0:o.call(r),r.footer?t("div",{class:`${e}-list__footer`},r.footer()):null)}}),N=u({name:"ListItem",slots:Object,setup(){const o=T(h,null);return o||V("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:r}=this;return t("li",{class:`${r}-list-item`},o.prefix?t("div",{class:`${r}-list-item__prefix`},o.prefix()):null,o.default?t("div",{class:`${r}-list-item__main`},o):null,o.suffix?t("div",{class:`${r}-list-item__suffix`},o.suffix()):null,this.showDivider&&t("div",{class:`${r}-list-item__divider`}))}});export{N as _,J as a};
