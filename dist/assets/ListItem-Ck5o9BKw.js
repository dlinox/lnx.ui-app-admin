import{a as M,O as m,x as u,z as n,A as v,B as s,aM as j,aN as B,d as f,u as H,f as E,D as p,p as I,G as L,e as O,I as K,h as t,Q as S,i as T,aK as V}from"./index-BOXL2TiF.js";function A(o){const{textColor2:e,cardColor:r,modalColor:l,popoverColor:d,dividerColor:a,borderRadius:b,fontSize:i,hoverColor:c}=o;return{textColor:e,color:r,colorHover:c,colorModal:l,colorHoverModal:m(l,c),colorPopover:d,colorHoverPopover:m(d,c),borderColor:a,borderColorModal:m(l,a),borderColorPopover:m(d,a),borderRadius:b,fontSize:i}}const G={name:"List",common:M,self:A},N=u([n("list",`
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
 `,[v("show-divider",[n("list-item",[u("&:not(:last-child)",[s("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),v("clickable",[n("list-item",`
 cursor: pointer;
 `)]),v("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),v("hoverable",[n("list-item",`
 border-radius: var(--n-border-radius);
 `,[u("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[s("divider",`
 background-color: transparent;
 `)])])]),v("bordered, hoverable",[n("list-item",`
 padding: 12px 20px;
 `),s("header, footer",`
 padding: 12px 20px;
 `)]),s("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[u("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),n("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("prefix",`
 margin-right: 20px;
 flex: 0;
 `),s("suffix",`
 margin-left: 20px;
 flex: 0;
 `),s("main",`
 flex: 1;
 `),s("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),j(n("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),B(n("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Q=Object.assign(Object.assign({},p.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),h=S("n-list"),F=f({name:"List",props:Q,slots:Object,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r,mergedRtlRef:l}=H(o),d=E("List",l,e),a=p("List","-list",N,G,o,e);I(h,{showDividerRef:L(o,"showDivider"),mergedClsPrefixRef:e});const b=O(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:g,textColor:x,color:C,colorModal:_,colorPopover:z,borderColor:R,borderColorModal:$,borderColorPopover:P,borderRadius:k,colorHover:w,colorHoverModal:y,colorHoverPopover:D}}=a.value;return{"--n-font-size":g,"--n-bezier":c,"--n-text-color":x,"--n-color":C,"--n-border-radius":k,"--n-border-color":R,"--n-border-color-modal":$,"--n-border-color-popover":P,"--n-color-modal":_,"--n-color-popover":z,"--n-color-hover":w,"--n-color-hover-modal":y,"--n-color-hover-popover":D}}),i=r?K("list",void 0,b,o):void 0;return{mergedClsPrefix:e,rtlEnabled:d,cssVars:r?void 0:b,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var o;const{$slots:e,mergedClsPrefix:r,onRender:l}=this;return l==null||l(),t("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},e.header?t("div",{class:`${r}-list__header`},e.header()):null,(o=e.default)===null||o===void 0?void 0:o.call(e),e.footer?t("div",{class:`${r}-list__footer`},e.footer()):null)}}),J=f({name:"ListItem",slots:Object,setup(){const o=T(h,null);return o||V("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:e}=this;return t("li",{class:`${e}-list-item`},o.prefix?t("div",{class:`${e}-list-item__prefix`},o.prefix()):null,o.default?t("div",{class:`${e}-list-item__main`},o):null,o.suffix?t("div",{class:`${e}-list-item__suffix`},o.suffix()):null,this.showDivider&&t("div",{class:`${e}-list-item__divider`}))}});export{F as _,J as a};
