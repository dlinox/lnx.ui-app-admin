import{r as I,e as F,Z as Re,p as Xe,d as fe,i as fn,bJ as ft,aI as Je,bK as ht,b9 as gt,G as te,ay as cn,h as s,q as vt,a2 as bn,aP as He,bL as on,g as ke,o as Tn,a as Ae,z as H,B as M,x as ce,u as De,D as be,I as Ne,U as In,aw as X,c as hn,s as bt,X as Ie,T as Fn,A as Z,V as ze,bf as Pn,f as gn,aC as Ye,aO as pt,S as mt,aq as Ct,aF as On,a_ as Fe,P as W,aV as xt,Q as wt,M as ge,bM as pn,w as yt,bN as St,_ as zt,aB as Rt,E as kt,n as Tt,v as It,t as mn,bO as Ft,bP as Pt}from"./index-BOXL2TiF.js";import{u as Cn}from"./get-DOtZouVG.js";import{j as Ot,k as ln,e as Mt,l as vn,h as Le,m as Bt,n as $t,p as _t,V as xn,N as Et,u as Ht,d as un,B as Lt,f as At,g as Dt,c as Nt}from"./DataTable.types-B90ErchY.js";import{u as Mn,N as Wt}from"./Input-C8gwYOc9.js";function wn(e){return e&-e}class Bn{constructor(t,o){this.l=t,this.min=o;const r=new Array(t+1);for(let l=0;l<t+1;++l)r[l]=0;this.ft=r}add(t,o){if(o===0)return;const{l:r,ft:l}=this;for(t+=1;t<=r;)l[t]+=o,t+=wn(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:o,min:r,l}=this;if(t>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=t*r;for(;t>0;)a+=o[t],t-=wn(t);return a}getBound(t){let o=0,r=this.l;for(;r>o;){const l=Math.floor((o+r)/2),a=this.sum(l);if(a>t){r=l;continue}else if(a<t){if(o===l)return this.sum(o+1)<=t?o+1:l;o=l}else return l}return o}}let Ge;function Vt(){return typeof document>"u"?!1:(Ge===void 0&&("matchMedia"in window?Ge=window.matchMedia("(pointer:coarse)").matches:Ge=!1),Ge)}let rn;function yn(){return typeof document>"u"?1:(rn===void 0&&(rn="chrome"in window?window.devicePixelRatio:1),rn)}const $n="VVirtualListXScroll";function jt({columnsRef:e,renderColRef:t,renderItemWithColsRef:o}){const r=I(0),l=I(0),a=F(()=>{const m=e.value;if(m.length===0)return null;const g=new Bn(m.length,0);return m.forEach((x,S)=>{g.add(S,x.width)}),g}),d=Re(()=>{const m=a.value;return m!==null?Math.max(m.getBound(l.value)-1,0):0}),i=m=>{const g=a.value;return g!==null?g.sum(m):0},h=Re(()=>{const m=a.value;return m!==null?Math.min(m.getBound(l.value+r.value)+1,e.value.length-1):0});return Xe($n,{startIndexRef:d,endIndexRef:h,columnsRef:e,renderColRef:t,renderItemWithColsRef:o,getLeft:i}),{listWidthRef:r,scrollLeftRef:l}}const Sn=fe({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:o,getLeft:r,renderColRef:l,renderItemWithColsRef:a}=fn($n);return{startIndex:e,endIndex:t,columns:o,renderCol:l,renderItemWithCols:a,getLeft:r}},render(){const{startIndex:e,endIndex:t,columns:o,renderCol:r,renderItemWithCols:l,getLeft:a,item:d}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:o,item:d,getLeft:a});if(r!=null){const i=[];for(let h=e;h<=t;++h){const m=o[h];i.push(r({column:m,left:a(h),item:d}))}return i}return null}}),Kt=ln(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ln("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ln("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Ut=fe({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=ft();Kt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ot,ssr:t}),Je(()=>{const{defaultScrollIndex:c,defaultScrollKey:y}=e;c!=null?P({index:c}):y!=null&&P({key:y})});let o=!1,r=!1;ht(()=>{if(o=!1,!r){r=!0;return}P({top:v.value,left:d.value})}),gt(()=>{o=!0,r||(r=!0)});const l=Re(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let c=0;return e.columns.forEach(y=>{c+=y.width}),c}),a=F(()=>{const c=new Map,{keyField:y}=e;return e.items.forEach((B,j)=>{c.set(B[y],j)}),c}),{scrollLeftRef:d,listWidthRef:i}=jt({columnsRef:te(e,"columns"),renderColRef:te(e,"renderCol"),renderItemWithColsRef:te(e,"renderItemWithCols")}),h=I(null),m=I(void 0),g=new Map,x=F(()=>{const{items:c,itemSize:y,keyField:B}=e,j=new Bn(c.length,y);return c.forEach((q,K)=>{const U=q[B],D=g.get(U);D!==void 0&&j.add(K,D)}),j}),S=I(0),v=I(0),C=Re(()=>Math.max(x.value.getBound(v.value-cn(e.paddingTop))-1,0)),T=F(()=>{const{value:c}=m;if(c===void 0)return[];const{items:y,itemSize:B}=e,j=C.value,q=Math.min(j+Math.ceil(c/B+1),y.length-1),K=[];for(let U=j;U<=q;++U)K.push(y[U]);return K}),P=(c,y)=>{if(typeof c=="number"){L(c,y,"auto");return}const{left:B,top:j,index:q,key:K,position:U,behavior:D,debounce:Y=!0}=c;if(B!==void 0||j!==void 0)L(B,j,D);else if(q!==void 0)E(q,D,Y);else if(K!==void 0){const f=a.value.get(K);f!==void 0&&E(f,D,Y)}else U==="bottom"?L(0,Number.MAX_SAFE_INTEGER,D):U==="top"&&L(0,0,D)};let z,R=null;function E(c,y,B){const{value:j}=x,q=j.sum(c)+cn(e.paddingTop);if(!B)h.value.scrollTo({left:0,top:q,behavior:y});else{z=c,R!==null&&window.clearTimeout(R),R=window.setTimeout(()=>{z=void 0,R=null},16);const{scrollTop:K,offsetHeight:U}=h.value;if(q>K){const D=j.get(c);q+D<=K+U||h.value.scrollTo({left:0,top:q+D-U,behavior:y})}else h.value.scrollTo({left:0,top:q,behavior:y})}}function L(c,y,B){h.value.scrollTo({left:c,top:y,behavior:B})}function V(c,y){var B,j,q;if(o||e.ignoreItemResize||le(y.target))return;const{value:K}=x,U=a.value.get(c),D=K.get(U),Y=(q=(j=(B=y.borderBoxSize)===null||B===void 0?void 0:B[0])===null||j===void 0?void 0:j.blockSize)!==null&&q!==void 0?q:y.contentRect.height;if(Y===D)return;Y-e.itemSize===0?g.delete(c):g.set(c,Y-e.itemSize);const p=Y-D;if(p===0)return;K.add(U,p);const N=h.value;if(N!=null){if(z===void 0){const ae=K.sum(U);N.scrollTop>ae&&N.scrollBy(0,p)}else if(U<z)N.scrollBy(0,p);else if(U===z){const ae=K.sum(U);Y+ae>N.scrollTop+N.offsetHeight&&N.scrollBy(0,p)}Q()}S.value++}const J=!Vt();let G=!1;function re(c){var y;(y=e.onScroll)===null||y===void 0||y.call(e,c),(!J||!G)&&Q()}function ie(c){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,c),J){const B=h.value;if(B!=null){if(c.deltaX===0&&(B.scrollTop===0&&c.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&c.deltaY>=0))return;c.preventDefault(),B.scrollTop+=c.deltaY/yn(),B.scrollLeft+=c.deltaX/yn(),Q(),G=!0,Mt(()=>{G=!1})}}}function oe(c){if(o||le(c.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(c.contentRect.height===m.value)return}else if(c.contentRect.height===m.value&&c.contentRect.width===i.value)return;m.value=c.contentRect.height,i.value=c.contentRect.width;const{onResize:y}=e;y!==void 0&&y(c)}function Q(){const{value:c}=h;c!=null&&(v.value=c.scrollTop,d.value=c.scrollLeft)}function le(c){let y=c;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:m,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:F(()=>{const{itemResizable:c}=e,y=He(x.value.sum());return S.value,[e.itemsStyle,{boxSizing:"content-box",width:He(l.value),height:c?"":y,minHeight:c?y:"",paddingTop:He(e.paddingTop),paddingBottom:He(e.paddingBottom)}]}),visibleItemsStyle:F(()=>(S.value,{transform:`translateY(${He(x.value.sum(C.value))})`})),viewportItems:T,listElRef:h,itemsElRef:I(null),scrollTo:P,handleListResize:oe,handleListScroll:re,handleListWheel:ie,handleItemResize:V}},render(){const{itemResizable:e,keyField:t,keyToIndex:o,visibleItemsTag:r}=this;return s(bn,{onResize:this.handleListResize},{default:()=>{var l,a;return s("div",vt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:d,renderItemWithCols:i}=this;return this.viewportItems.map(h=>{const m=h[t],g=o.get(m),x=d!=null?s(Sn,{index:g,item:h}):void 0,S=i!=null?s(Sn,{index:g,item:h}):void 0,v=this.$slots.default({item:h,renderedCols:x,renderedItemWithCols:S,index:g})[0];return e?s(bn,{key:m,onResize:C=>this.handleItemResize(m,C)},{default:()=>v}):(v.key=m,v)})}})]):(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)])}})}});function _n(e,t){t&&(Je(()=>{const{value:o}=e;o&&on.registerHandler(o,t)}),ke(e,(o,r)=>{r&&on.unregisterHandler(r)},{deep:!1}),Tn(()=>{const{value:o}=e;o&&on.unregisterHandler(o)}))}function zn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function an(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(r=>{r&&r(o)})}}const qt=fe({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Gt=fe({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Xt=fe({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Yt={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function Zt(e){const{textColorDisabled:t,iconColor:o,textColor2:r,fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:i,fontSizeHuge:h}=e;return Object.assign(Object.assign({},Yt),{fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:i,fontSizeHuge:h,textColor:t,iconColor:o,extraTextColor:r})}const En={name:"Empty",common:Ae,self:Zt},Jt=H("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[M("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ce("+",[M("description",`
 margin-top: 8px;
 `)])]),M("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),M("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Qt=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),eo=fe({name:"Empty",props:Qt,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:r}=De(e),l=be("Empty","-empty",Jt,En,e,t),{localeRef:a}=Mn("Empty"),d=F(()=>{var g,x,S;return(g=e.description)!==null&&g!==void 0?g:(S=(x=r==null?void 0:r.value)===null||x===void 0?void 0:x.Empty)===null||S===void 0?void 0:S.description}),i=F(()=>{var g,x;return((x=(g=r==null?void 0:r.value)===null||g===void 0?void 0:g.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>s(Gt,null))}),h=F(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:x},self:{[X("iconSize",g)]:S,[X("fontSize",g)]:v,textColor:C,iconColor:T,extraTextColor:P}}=l.value;return{"--n-icon-size":S,"--n-font-size":v,"--n-bezier":x,"--n-text-color":C,"--n-icon-color":T,"--n-extra-text-color":P}}),m=o?Ne("empty",F(()=>{let g="";const{size:x}=e;return g+=x[0],g}),h,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:i,localizedDescription:F(()=>d.value||a.value.description),cssVars:o?void 0:h,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),s("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${t}-empty__icon`},e.icon?e.icon():s(In,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${t}-empty__extra`},e.extra()):null)}}),no={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function to(e){const{borderRadius:t,popoverColor:o,textColor3:r,dividerColor:l,textColor2:a,primaryColorPressed:d,textColorDisabled:i,primaryColor:h,opacityDisabled:m,hoverColor:g,fontSizeTiny:x,fontSizeSmall:S,fontSizeMedium:v,fontSizeLarge:C,fontSizeHuge:T,heightTiny:P,heightSmall:z,heightMedium:R,heightLarge:E,heightHuge:L}=e;return Object.assign(Object.assign({},no),{optionFontSizeTiny:x,optionFontSizeSmall:S,optionFontSizeMedium:v,optionFontSizeLarge:C,optionFontSizeHuge:T,optionHeightTiny:P,optionHeightSmall:z,optionHeightMedium:R,optionHeightLarge:E,optionHeightHuge:L,borderRadius:t,color:o,groupHeaderTextColor:r,actionDividerColor:l,optionTextColor:a,optionTextColorPressed:d,optionTextColorDisabled:i,optionTextColorActive:h,optionOpacityDisabled:m,optionCheckColor:h,optionColorPending:g,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:g,actionTextColor:a,loadingColor:h})}const Hn=hn({name:"InternalSelectMenu",common:Ae,peers:{Scrollbar:bt,Empty:En},self:to}),Rn=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:r}=fn(vn);return{labelField:o,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:r,tmNode:{rawNode:l}}=this,a=r==null?void 0:r(l),d=t?t(l,!1):Ie(l[this.labelField],l,!1),i=s("div",Object.assign({},a,{class:[`${e}-base-select-group-header`,a==null?void 0:a.class]}),d);return l.render?l.render({node:i,option:l}):o?o({node:i,option:l,selected:!1}):i}});function oo(e,t){return s(Fn,{name:"fade-in-scale-up-transition"},{default:()=>e?s(In,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>s(qt)}):null})}const kn=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:r,valueSetRef:l,renderLabelRef:a,renderOptionRef:d,labelFieldRef:i,valueFieldRef:h,showCheckmarkRef:m,nodePropsRef:g,handleOptionClick:x,handleOptionMouseEnter:S}=fn(vn),v=Re(()=>{const{value:z}=o;return z?e.tmNode.key===z.key:!1});function C(z){const{tmNode:R}=e;R.disabled||x(z,R)}function T(z){const{tmNode:R}=e;R.disabled||S(z,R)}function P(z){const{tmNode:R}=e,{value:E}=v;R.disabled||E||S(z,R)}return{multiple:r,isGrouped:Re(()=>{const{tmNode:z}=e,{parent:R}=z;return R&&R.rawNode.type==="group"}),showCheckmark:m,nodeProps:g,isPending:v,isSelected:Re(()=>{const{value:z}=t,{value:R}=r;if(z===null)return!1;const E=e.tmNode.rawNode[h.value];if(R){const{value:L}=l;return L.has(E)}else return z===E}),labelField:i,renderLabel:a,renderOption:d,handleMouseMove:P,handleMouseEnter:T,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:r,isGrouped:l,showCheckmark:a,nodeProps:d,renderOption:i,renderLabel:h,handleClick:m,handleMouseEnter:g,handleMouseMove:x}=this,S=oo(o,e),v=h?[h(t,o),a&&S]:[Ie(t[this.labelField],t,o),a&&S],C=d==null?void 0:d(t),T=s("div",Object.assign({},C,{class:[`${e}-base-select-option`,t.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[(C==null?void 0:C.style)||"",t.style||""],onClick:an([m,C==null?void 0:C.onClick]),onMouseenter:an([g,C==null?void 0:C.onMouseenter]),onMousemove:an([x,C==null?void 0:C.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},v));return t.render?t.render({node:T,option:t,selected:o}):i?i({node:T,option:t,selected:o}):T}}),lo=H("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[H("scrollbar",`
 max-height: var(--n-height);
 `),H("virtual-list",`
 max-height: var(--n-height);
 `),H("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),H("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),H("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),M("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),M("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),M("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),H("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ce("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ce("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[ce("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[ce("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[ce("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),M("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Pn({enterScale:"0.5"})])])]),ro=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=De(e),r=gn("InternalSelectMenu",o,t),l=be("InternalSelectMenu","-internal-select-menu",lo,Hn,e,te(e,"clsPrefix")),a=I(null),d=I(null),i=I(null),h=F(()=>e.treeMate.getFlattenedNodes()),m=F(()=>$t(h.value)),g=I(null);function x(){const{treeMate:f}=e;let p=null;const{value:N}=e;N===null?p=f.getFirstAvailableNode():(e.multiple?p=f.getNode((N||[])[(N||[]).length-1]):p=f.getNode(N),(!p||p.disabled)&&(p=f.getFirstAvailableNode())),y(p||null)}function S(){const{value:f}=g;f&&!e.treeMate.getNode(f.key)&&(g.value=null)}let v;ke(()=>e.show,f=>{f?v=ke(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?x():S(),On(B)):S()},{immediate:!0}):v==null||v()},{immediate:!0}),Tn(()=>{v==null||v()});const C=F(()=>cn(l.value.self[X("optionHeight",e.size)])),T=F(()=>Fe(l.value.self[X("padding",e.size)])),P=F(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=F(()=>{const f=h.value;return f&&f.length===0});function R(f){const{onToggle:p}=e;p&&p(f)}function E(f){const{onScroll:p}=e;p&&p(f)}function L(f){var p;(p=i.value)===null||p===void 0||p.sync(),E(f)}function V(){var f;(f=i.value)===null||f===void 0||f.sync()}function J(){const{value:f}=g;return f||null}function G(f,p){p.disabled||y(p,!1)}function re(f,p){p.disabled||R(p)}function ie(f){var p;Le(f,"action")||(p=e.onKeyup)===null||p===void 0||p.call(e,f)}function oe(f){var p;Le(f,"action")||(p=e.onKeydown)===null||p===void 0||p.call(e,f)}function Q(f){var p;(p=e.onMousedown)===null||p===void 0||p.call(e,f),!e.focusable&&f.preventDefault()}function le(){const{value:f}=g;f&&y(f.getNext({loop:!0}),!0)}function c(){const{value:f}=g;f&&y(f.getPrev({loop:!0}),!0)}function y(f,p=!1){g.value=f,p&&B()}function B(){var f,p;const N=g.value;if(!N)return;const ae=m.value(N.key);ae!==null&&(e.virtualScroll?(f=d.value)===null||f===void 0||f.scrollTo({index:ae}):(p=i.value)===null||p===void 0||p.scrollTo({index:ae,elSize:C.value}))}function j(f){var p,N;!((p=a.value)===null||p===void 0)&&p.contains(f.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,f))}function q(f){var p,N;!((p=a.value)===null||p===void 0)&&p.contains(f.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,f)}Xe(vn,{handleOptionMouseEnter:G,handleOptionClick:re,valueSetRef:P,pendingTmNodeRef:g,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),Xe(Bt,a),Je(()=>{const{value:f}=i;f&&f.sync()});const K=F(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:p},self:{height:N,borderRadius:ae,color:pe,groupHeaderTextColor:me,actionDividerColor:he,optionTextColorPressed:se,optionTextColor:Ce,optionTextColorDisabled:ue,optionTextColorActive:Pe,optionOpacityDisabled:Oe,optionCheckColor:Me,actionTextColor:Be,optionColorPending:we,optionColorActive:ye,loadingColor:$e,loadingSize:_e,optionColorActivePending:Ee,[X("optionFontSize",f)]:Te,[X("optionHeight",f)]:Se,[X("optionPadding",f)]:de}}=l.value;return{"--n-height":N,"--n-action-divider-color":he,"--n-action-text-color":Be,"--n-bezier":p,"--n-border-radius":ae,"--n-color":pe,"--n-option-font-size":Te,"--n-group-header-text-color":me,"--n-option-check-color":Me,"--n-option-color-pending":we,"--n-option-color-active":ye,"--n-option-color-active-pending":Ee,"--n-option-height":Se,"--n-option-opacity-disabled":Oe,"--n-option-text-color":Ce,"--n-option-text-color-active":Pe,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":se,"--n-option-padding":de,"--n-option-padding-left":Fe(de,"left"),"--n-option-padding-right":Fe(de,"right"),"--n-loading-color":$e,"--n-loading-size":_e}}),{inlineThemeDisabled:U}=e,D=U?Ne("internal-select-menu",F(()=>e.size[0]),K,e):void 0,Y={selfRef:a,next:le,prev:c,getPendingTmNode:J};return _n(a,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:d,scrollbarRef:i,itemSize:C,padding:T,flattenedNodes:h,empty:z,virtualListContainer(){const{value:f}=d;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=d;return f==null?void 0:f.itemsElRef},doScroll:E,handleFocusin:j,handleFocusout:q,handleKeyUp:ie,handleKeyDown:oe,handleMouseDown:Q,handleVirtualListResize:V,handleVirtualListScroll:L,cssVars:U?void 0:K,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},Y)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:r,themeClass:l,onRender:a}=this;return a==null||a(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ye(e.header,d=>d&&s("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},d)),this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(pt,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Ct(e.empty,()=>[s(eo,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):s(mt,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?s(Ut,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:d})=>d.isGroup?s(Rn,{key:d.key,clsPrefix:o,tmNode:d}):d.ignored?null:s(kn,{clsPrefix:o,key:d.key,tmNode:d})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(d=>d.isGroup?s(Rn,{key:d.key,clsPrefix:o,tmNode:d}):s(kn,{clsPrefix:o,key:d.key,tmNode:d})))}),Ye(e.action,d=>d&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},d),s(Xt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),io={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function ao(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:l,infoColor:a,successColor:d,warningColor:i,errorColor:h,baseColor:m,borderColor:g,opacityDisabled:x,tagColor:S,closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:T,borderRadiusSmall:P,fontSizeMini:z,fontSizeTiny:R,fontSizeSmall:E,fontSizeMedium:L,heightMini:V,heightTiny:J,heightSmall:G,heightMedium:re,closeColorHover:ie,closeColorPressed:oe,buttonColor2Hover:Q,buttonColor2Pressed:le,fontWeightStrong:c}=e;return Object.assign(Object.assign({},io),{closeBorderRadius:P,heightTiny:V,heightSmall:J,heightMedium:G,heightLarge:re,borderRadius:P,opacityDisabled:x,fontSizeTiny:z,fontSizeSmall:R,fontSizeMedium:E,fontSizeLarge:L,fontWeightStrong:c,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:Q,colorPressedCheckable:le,colorChecked:l,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${g}`,textColor:t,color:S,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:T,closeColorHover:ie,closeColorPressed:oe,borderPrimary:`1px solid ${W(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:W(l,{alpha:.12}),colorBorderedPrimary:W(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:W(l,{alpha:.12}),closeColorPressedPrimary:W(l,{alpha:.18}),borderInfo:`1px solid ${W(a,{alpha:.3})}`,textColorInfo:a,colorInfo:W(a,{alpha:.12}),colorBorderedInfo:W(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:W(a,{alpha:.12}),closeColorPressedInfo:W(a,{alpha:.18}),borderSuccess:`1px solid ${W(d,{alpha:.3})}`,textColorSuccess:d,colorSuccess:W(d,{alpha:.12}),colorBorderedSuccess:W(d,{alpha:.1}),closeIconColorSuccess:d,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:d,closeColorHoverSuccess:W(d,{alpha:.12}),closeColorPressedSuccess:W(d,{alpha:.18}),borderWarning:`1px solid ${W(i,{alpha:.35})}`,textColorWarning:i,colorWarning:W(i,{alpha:.15}),colorBorderedWarning:W(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:W(i,{alpha:.12}),closeColorPressedWarning:W(i,{alpha:.18}),borderError:`1px solid ${W(h,{alpha:.23})}`,textColorError:h,colorError:W(h,{alpha:.1}),colorBorderedError:W(h,{alpha:.08}),closeIconColorError:h,closeIconColorHoverError:h,closeIconColorPressedError:h,closeColorHoverError:W(h,{alpha:.12}),closeColorPressedError:W(h,{alpha:.18})})}const so={name:"Tag",common:Ae,self:ao},co={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},uo=H("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),M("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),M("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),M("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),M("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[M("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),M("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ze("disabled",[ce("&:hover","background-color: var(--n-color-hover-checkable);",[ze("checked","color: var(--n-text-color-hover-checkable);")]),ce("&:active","background-color: var(--n-color-pressed-checkable);",[ze("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ze("disabled",[ce("&:hover","background-color: var(--n-color-checked-hover);"),ce("&:active","background-color: var(--n-color-checked-pressed);")])])])]),fo=Object.assign(Object.assign(Object.assign({},be.props),co),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ho=wt("n-tag"),sn=fe({name:"Tag",props:fo,slots:Object,setup(e){const t=I(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedRtlRef:a}=De(e),d=be("Tag","-tag",uo,so,e,r);Xe(ho,{roundRef:te(e,"round")});function i(){if(!e.disabled&&e.checkable){const{checked:v,onCheckedChange:C,onUpdateChecked:T,"onUpdate:checked":P}=e;T&&T(!v),P&&P(!v),C&&C(!v)}}function h(v){if(e.triggerClickOnClose||v.stopPropagation(),!e.disabled){const{onClose:C}=e;C&&ge(C,v)}}const m={setTextContent(v){const{value:C}=t;C&&(C.textContent=v)}},g=gn("Tag",a,r),x=F(()=>{const{type:v,size:C,color:{color:T,textColor:P}={}}=e,{common:{cubicBezierEaseInOut:z},self:{padding:R,closeMargin:E,borderRadius:L,opacityDisabled:V,textColorCheckable:J,textColorHoverCheckable:G,textColorPressedCheckable:re,textColorChecked:ie,colorCheckable:oe,colorHoverCheckable:Q,colorPressedCheckable:le,colorChecked:c,colorCheckedHover:y,colorCheckedPressed:B,closeBorderRadius:j,fontWeightStrong:q,[X("colorBordered",v)]:K,[X("closeSize",C)]:U,[X("closeIconSize",C)]:D,[X("fontSize",C)]:Y,[X("height",C)]:f,[X("color",v)]:p,[X("textColor",v)]:N,[X("border",v)]:ae,[X("closeIconColor",v)]:pe,[X("closeIconColorHover",v)]:me,[X("closeIconColorPressed",v)]:he,[X("closeColorHover",v)]:se,[X("closeColorPressed",v)]:Ce}}=d.value,ue=Fe(E);return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${f} - 8px)`,"--n-bezier":z,"--n-border-radius":L,"--n-border":ae,"--n-close-icon-size":D,"--n-close-color-pressed":Ce,"--n-close-color-hover":se,"--n-close-border-radius":j,"--n-close-icon-color":pe,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":he,"--n-close-icon-color-disabled":pe,"--n-close-margin-top":ue.top,"--n-close-margin-right":ue.right,"--n-close-margin-bottom":ue.bottom,"--n-close-margin-left":ue.left,"--n-close-size":U,"--n-color":T||(o.value?K:p),"--n-color-checkable":oe,"--n-color-checked":c,"--n-color-checked-hover":y,"--n-color-checked-pressed":B,"--n-color-hover-checkable":Q,"--n-color-pressed-checkable":le,"--n-font-size":Y,"--n-height":f,"--n-opacity-disabled":V,"--n-padding":R,"--n-text-color":P||N,"--n-text-color-checkable":J,"--n-text-color-checked":ie,"--n-text-color-hover-checkable":G,"--n-text-color-pressed-checkable":re}}),S=l?Ne("tag",F(()=>{let v="";const{type:C,size:T,color:{color:P,textColor:z}={}}=e;return v+=C[0],v+=T[0],P&&(v+=`a${pn(P)}`),z&&(v+=`b${pn(z)}`),o.value&&(v+="c"),v}),x,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:g,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:i,handleCloseClick:h,cssVars:l?void 0:x,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:l,color:{borderColor:a}={},round:d,onRender:i,$slots:h}=this;i==null||i();const m=Ye(h.avatar,x=>x&&s("div",{class:`${o}-tag__avatar`},x)),g=Ye(h.icon,x=>x&&s("div",{class:`${o}-tag__icon`},x));return s("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:d,[`${o}-tag--avatar`]:m,[`${o}-tag--icon`]:g,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},g||m,s("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&l?s(xt,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:d,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?s("div",{class:`${o}-tag__border`,style:{borderColor:a}}):null)}}),go={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function vo(e){const{borderRadius:t,textColor2:o,textColorDisabled:r,inputColor:l,inputColorDisabled:a,primaryColor:d,primaryColorHover:i,warningColor:h,warningColorHover:m,errorColor:g,errorColorHover:x,borderColor:S,iconColor:v,iconColorDisabled:C,clearColor:T,clearColorHover:P,clearColorPressed:z,placeholderColor:R,placeholderColorDisabled:E,fontSizeTiny:L,fontSizeSmall:V,fontSizeMedium:J,fontSizeLarge:G,heightTiny:re,heightSmall:ie,heightMedium:oe,heightLarge:Q,fontWeight:le}=e;return Object.assign(Object.assign({},go),{fontSizeTiny:L,fontSizeSmall:V,fontSizeMedium:J,fontSizeLarge:G,heightTiny:re,heightSmall:ie,heightMedium:oe,heightLarge:Q,borderRadius:t,fontWeight:le,textColor:o,textColorDisabled:r,placeholderColor:R,placeholderColorDisabled:E,color:l,colorDisabled:a,colorActive:l,border:`1px solid ${S}`,borderHover:`1px solid ${i}`,borderActive:`1px solid ${d}`,borderFocus:`1px solid ${i}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${W(d,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${W(d,{alpha:.2})}`,caretColor:d,arrowColor:v,arrowColorDisabled:C,loadingColor:d,borderWarning:`1px solid ${h}`,borderHoverWarning:`1px solid ${m}`,borderActiveWarning:`1px solid ${h}`,borderFocusWarning:`1px solid ${m}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${W(h,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${W(h,{alpha:.2})}`,colorActiveWarning:l,caretColorWarning:h,borderError:`1px solid ${g}`,borderHoverError:`1px solid ${x}`,borderActiveError:`1px solid ${g}`,borderFocusError:`1px solid ${x}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${W(g,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${W(g,{alpha:.2})}`,colorActiveError:l,caretColorError:g,clearColor:T,clearColorHover:P,clearColorPressed:z})}const Ln=hn({name:"InternalSelection",common:Ae,peers:{Popover:_t},self:vo}),bo=ce([H("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[H("base-loading",`
 color: var(--n-loading-color);
 `),H("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M("state-border",`
 z-index: 1;
 border-color: #0000;
 `),H("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),H("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),H("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[M("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),H("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),H("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[H("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M("render-label",`
 color: var(--n-text-color);
 `)]),ze("disabled",[ce("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),H("base-selection-label","background-color: var(--n-color-active);"),H("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),H("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[H("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),H("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),H("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),H("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),ze("disabled",[ce("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),H("base-selection-label",`background-color: var(--n-color-active-${e});`),H("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),H("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),H("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ce("&:last-child","padding-right: 0;"),H("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),po=fe({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=De(e),r=gn("InternalSelection",o,t),l=I(null),a=I(null),d=I(null),i=I(null),h=I(null),m=I(null),g=I(null),x=I(null),S=I(null),v=I(null),C=I(!1),T=I(!1),P=I(!1),z=be("InternalSelection","-internal-selection",bo,Ln,e,te(e,"clsPrefix")),R=F(()=>e.clearable&&!e.disabled&&(P.value||e.active)),E=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ie(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),L=F(()=>{const u=e.selectedOption;if(u)return u[e.labelField]}),V=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function J(){var u;const{value:w}=l;if(w){const{value:ee}=a;ee&&(ee.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((u=S.value)===null||u===void 0||u.sync({showAllItemsBeforeCalculate:!1})))}}function G(){const{value:u}=v;u&&(u.style.display="none")}function re(){const{value:u}=v;u&&(u.style.display="inline-block")}ke(te(e,"active"),u=>{u||G()}),ke(te(e,"pattern"),()=>{e.multiple&&On(J)});function ie(u){const{onFocus:w}=e;w&&w(u)}function oe(u){const{onBlur:w}=e;w&&w(u)}function Q(u){const{onDeleteOption:w}=e;w&&w(u)}function le(u){const{onClear:w}=e;w&&w(u)}function c(u){const{onPatternInput:w}=e;w&&w(u)}function y(u){var w;(!u.relatedTarget||!(!((w=d.value)===null||w===void 0)&&w.contains(u.relatedTarget)))&&ie(u)}function B(u){var w;!((w=d.value)===null||w===void 0)&&w.contains(u.relatedTarget)||oe(u)}function j(u){le(u)}function q(){P.value=!0}function K(){P.value=!1}function U(u){!e.active||!e.filterable||u.target!==a.value&&u.preventDefault()}function D(u){Q(u)}const Y=I(!1);function f(u){if(u.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:w}=e;w!=null&&w.length&&D(w[w.length-1])}}let p=null;function N(u){const{value:w}=l;if(w){const ee=u.target.value;w.textContent=ee,J()}e.ignoreComposition&&Y.value?p=u:c(u)}function ae(){Y.value=!0}function pe(){Y.value=!1,e.ignoreComposition&&c(p),p=null}function me(u){var w;T.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,u)}function he(u){var w;T.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,u)}function se(){var u,w;if(e.filterable)T.value=!1,(u=m.value)===null||u===void 0||u.blur(),(w=a.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:ee}=i;ee==null||ee.blur()}else{const{value:ee}=h;ee==null||ee.blur()}}function Ce(){var u,w,ee;e.filterable?(T.value=!1,(u=m.value)===null||u===void 0||u.focus()):e.multiple?(w=i.value)===null||w===void 0||w.focus():(ee=h.value)===null||ee===void 0||ee.focus()}function ue(){const{value:u}=a;u&&(re(),u.focus())}function Pe(){const{value:u}=a;u&&u.blur()}function Oe(u){const{value:w}=g;w&&w.setTextContent(`+${u}`)}function Me(){const{value:u}=x;return u}function Be(){return a.value}let we=null;function ye(){we!==null&&window.clearTimeout(we)}function $e(){e.active||(ye(),we=window.setTimeout(()=>{V.value&&(C.value=!0)},100))}function _e(){ye()}function Ee(u){u||(ye(),C.value=!1)}ke(V,u=>{u||(C.value=!1)}),Je(()=>{yt(()=>{const u=m.value;u&&(e.disabled?u.removeAttribute("tabindex"):u.tabIndex=T.value?-1:0)})}),_n(d,e.onResize);const{inlineThemeDisabled:Te}=e,Se=F(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:w},self:{fontWeight:ee,borderRadius:Qe,color:en,placeholderColor:We,textColor:Ve,paddingSingle:je,paddingMultiple:nn,caretColor:tn,colorDisabled:Ke,textColorDisabled:xe,placeholderColorDisabled:n,colorActive:b,boxShadowFocus:k,boxShadowActive:A,boxShadowHover:$,border:O,borderFocus:_,borderHover:ne,borderActive:ve,arrowColor:Dn,arrowColorDisabled:Nn,loadingColor:Wn,colorActiveWarning:Vn,boxShadowFocusWarning:jn,boxShadowActiveWarning:Kn,boxShadowHoverWarning:Un,borderWarning:qn,borderFocusWarning:Gn,borderHoverWarning:Xn,borderActiveWarning:Yn,colorActiveError:Zn,boxShadowFocusError:Jn,boxShadowActiveError:Qn,boxShadowHoverError:et,borderError:nt,borderFocusError:tt,borderHoverError:ot,borderActiveError:lt,clearColor:rt,clearColorHover:it,clearColorPressed:at,clearSize:st,arrowSize:dt,[X("height",u)]:ct,[X("fontSize",u)]:ut}}=z.value,Ue=Fe(je),qe=Fe(nn);return{"--n-bezier":w,"--n-border":O,"--n-border-active":ve,"--n-border-focus":_,"--n-border-hover":ne,"--n-border-radius":Qe,"--n-box-shadow-active":A,"--n-box-shadow-focus":k,"--n-box-shadow-hover":$,"--n-caret-color":tn,"--n-color":en,"--n-color-active":b,"--n-color-disabled":Ke,"--n-font-size":ut,"--n-height":ct,"--n-padding-single-top":Ue.top,"--n-padding-multiple-top":qe.top,"--n-padding-single-right":Ue.right,"--n-padding-multiple-right":qe.right,"--n-padding-single-left":Ue.left,"--n-padding-multiple-left":qe.left,"--n-padding-single-bottom":Ue.bottom,"--n-padding-multiple-bottom":qe.bottom,"--n-placeholder-color":We,"--n-placeholder-color-disabled":n,"--n-text-color":Ve,"--n-text-color-disabled":xe,"--n-arrow-color":Dn,"--n-arrow-color-disabled":Nn,"--n-loading-color":Wn,"--n-color-active-warning":Vn,"--n-box-shadow-focus-warning":jn,"--n-box-shadow-active-warning":Kn,"--n-box-shadow-hover-warning":Un,"--n-border-warning":qn,"--n-border-focus-warning":Gn,"--n-border-hover-warning":Xn,"--n-border-active-warning":Yn,"--n-color-active-error":Zn,"--n-box-shadow-focus-error":Jn,"--n-box-shadow-active-error":Qn,"--n-box-shadow-hover-error":et,"--n-border-error":nt,"--n-border-focus-error":tt,"--n-border-hover-error":ot,"--n-border-active-error":lt,"--n-clear-size":st,"--n-clear-color":rt,"--n-clear-color-hover":it,"--n-clear-color-pressed":at,"--n-arrow-size":dt,"--n-font-weight":ee}}),de=Te?Ne("internal-selection",F(()=>e.size[0]),Se,e):void 0;return{mergedTheme:z,mergedClearable:R,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:T,filterablePlaceholder:E,label:L,selected:V,showTagsPanel:C,isComposing:Y,counterRef:g,counterWrapperRef:x,patternInputMirrorRef:l,patternInputRef:a,selfRef:d,multipleElRef:i,singleElRef:h,patternInputWrapperRef:m,overflowRef:S,inputTagElRef:v,handleMouseDown:U,handleFocusin:y,handleClear:j,handleMouseEnter:q,handleMouseLeave:K,handleDeleteOption:D,handlePatternKeyDown:f,handlePatternInputInput:N,handlePatternInputBlur:he,handlePatternInputFocus:me,handleMouseEnterCounter:$e,handleMouseLeaveCounter:_e,handleFocusout:B,handleCompositionEnd:pe,handleCompositionStart:ae,onPopoverUpdateShow:Ee,focus:Ce,focusInput:ue,blur:se,blurInput:Pe,updateCounter:Oe,getCounter:Me,getTail:Be,renderLabel:e.renderLabel,cssVars:Te?void 0:Se,themeClass:de==null?void 0:de.themeClass,onRender:de==null?void 0:de.onRender}},render(){const{status:e,multiple:t,size:o,disabled:r,filterable:l,maxTagCount:a,bordered:d,clsPrefix:i,ellipsisTagPopoverProps:h,onRender:m,renderTag:g,renderLabel:x}=this;m==null||m();const S=a==="responsive",v=typeof a=="number",C=S||v,T=s(St,null,{default:()=>s(Wt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,R;return(R=(z=this.$slots).arrow)===null||R===void 0?void 0:R.call(z)}})});let P;if(t){const{labelField:z}=this,R=c=>s("div",{class:`${i}-base-selection-tag-wrapper`,key:c.value},g?g({option:c,handleClose:()=>{this.handleDeleteOption(c)}}):s(sn,{size:o,closable:!c.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(c)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>x?x(c,!0):Ie(c[z],c,!0)})),E=()=>(v?this.selectedOptions.slice(0,a):this.selectedOptions).map(R),L=l?s("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,V=S?()=>s("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(sn,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let J;if(v){const c=this.selectedOptions.length-a;c>0&&(J=s("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},s(sn,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${c}`})))}const G=S?l?s(xn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:E,counter:V,tail:()=>L}):s(xn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:E,counter:V}):v&&J?E().concat(J):E(),re=C?()=>s("div",{class:`${i}-base-selection-popover`},S?E():this.selectedOptions.map(R)):void 0,ie=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},h):null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,le=l?s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},G,S?null:L,T):s("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:r?void 0:0},G,T);P=s(zt,null,C?s(Et,Object.assign({},ie,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>le,default:re}):le,Q)}else if(l){const z=this.pattern||this.isComposing,R=this.active?!z:!this.selected,E=this.active?!1:this.selected;P=s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:zn(this.label)},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),E?s("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},s("div",{class:`${i}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):x?x(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):null,R?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,T)}else P=s("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${i}-base-selection-input`,title:zn(this.label),key:"input"},s("div",{class:`${i}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):x?x(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),T);return s("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},P,d?s("div",{class:`${i}-base-selection__border`}):null,d?s("div",{class:`${i}-base-selection__state-border`}):null)}});function Ze(e){return e.type==="group"}function An(e){return e.type==="ignored"}function dn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function mo(e,t){return{getIsGroup:Ze,getIgnored:An,getKey(r){return Ze(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function Co(e,t,o,r){if(!t)return e;function l(a){if(!Array.isArray(a))return[];const d=[];for(const i of a)if(Ze(i)){const h=l(i[r]);h.length&&d.push(Object.assign({},i,{[r]:h}))}else{if(An(i))continue;t(o,i)&&d.push(i)}return d}return l(e)}function xo(e,t,o){const r=new Map;return e.forEach(l=>{Ze(l)?l[o].forEach(a=>{r.set(a[t],a)}):r.set(l[t],l)}),r}function wo(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const yo=hn({name:"Select",common:Ae,peers:{InternalSelection:Ln,InternalSelectMenu:Hn},self:wo}),So=ce([H("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),H("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Pn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),zo=Object.assign(Object.assign({},be.props),{to:un.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Fo=fe({name:"Select",props:zo,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,namespaceRef:r,inlineThemeDisabled:l}=De(e),a=be("Select","-select",So,yo,e,t),d=I(e.defaultValue),i=te(e,"value"),h=Cn(i,d),m=I(!1),g=I(""),x=Ht(e,["items","options"]),S=I([]),v=I([]),C=F(()=>v.value.concat(S.value).concat(x.value)),T=F(()=>{const{filter:n}=e;if(n)return n;const{labelField:b,valueField:k}=e;return(A,$)=>{if(!$)return!1;const O=$[b];if(typeof O=="string")return dn(A,O);const _=$[k];return typeof _=="string"?dn(A,_):typeof _=="number"?dn(A,String(_)):!1}}),P=F(()=>{if(e.remote)return x.value;{const{value:n}=C,{value:b}=g;return!b.length||!e.filterable?n:Co(n,T.value,b,e.childrenField)}}),z=F(()=>{const{valueField:n,childrenField:b}=e,k=mo(n,b);return Nt(P.value,k)}),R=F(()=>xo(C.value,e.valueField,e.childrenField)),E=I(!1),L=Cn(te(e,"show"),E),V=I(null),J=I(null),G=I(null),{localeRef:re}=Mn("Select"),ie=F(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:re.value.placeholder}),oe=[],Q=I(new Map),le=F(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:b,valueField:k}=e;return A=>({[b]:String(A),[k]:A})}return n===!1?!1:b=>Object.assign(n(b),{value:b})});function c(n){const b=e.remote,{value:k}=Q,{value:A}=R,{value:$}=le,O=[];return n.forEach(_=>{if(A.has(_))O.push(A.get(_));else if(b&&k.has(_))O.push(k.get(_));else if($){const ne=$(_);ne&&O.push(ne)}}),O}const y=F(()=>{if(e.multiple){const{value:n}=h;return Array.isArray(n)?c(n):[]}return null}),B=F(()=>{const{value:n}=h;return!e.multiple&&!Array.isArray(n)?n===null?null:c([n])[0]||null:null}),j=Rt(e),{mergedSizeRef:q,mergedDisabledRef:K,mergedStatusRef:U}=j;function D(n,b){const{onChange:k,"onUpdate:value":A,onUpdateValue:$}=e,{nTriggerFormChange:O,nTriggerFormInput:_}=j;k&&ge(k,n,b),$&&ge($,n,b),A&&ge(A,n,b),d.value=n,O(),_()}function Y(n){const{onBlur:b}=e,{nTriggerFormBlur:k}=j;b&&ge(b,n),k()}function f(){const{onClear:n}=e;n&&ge(n)}function p(n){const{onFocus:b,showOnFocus:k}=e,{nTriggerFormFocus:A}=j;b&&ge(b,n),A(),k&&he()}function N(n){const{onSearch:b}=e;b&&ge(b,n)}function ae(n){const{onScroll:b}=e;b&&ge(b,n)}function pe(){var n;const{remote:b,multiple:k}=e;if(b){const{value:A}=Q;if(k){const{valueField:$}=e;(n=y.value)===null||n===void 0||n.forEach(O=>{A.set(O[$],O)})}else{const $=B.value;$&&A.set($[e.valueField],$)}}}function me(n){const{onUpdateShow:b,"onUpdate:show":k}=e;b&&ge(b,n),k&&ge(k,n),E.value=n}function he(){K.value||(me(!0),E.value=!0,e.filterable&&je())}function se(){me(!1)}function Ce(){g.value="",v.value=oe}const ue=I(!1);function Pe(){e.filterable&&(ue.value=!0)}function Oe(){e.filterable&&(ue.value=!1,L.value||Ce())}function Me(){K.value||(L.value?e.filterable?je():se():he())}function Be(n){var b,k;!((k=(b=G.value)===null||b===void 0?void 0:b.selfRef)===null||k===void 0)&&k.contains(n.relatedTarget)||(m.value=!1,Y(n),se())}function we(n){p(n),m.value=!0}function ye(){m.value=!0}function $e(n){var b;!((b=V.value)===null||b===void 0)&&b.$el.contains(n.relatedTarget)||(m.value=!1,Y(n),se())}function _e(){var n;(n=V.value)===null||n===void 0||n.focus(),se()}function Ee(n){var b;L.value&&(!((b=V.value)===null||b===void 0)&&b.$el.contains(Ft(n))||se())}function Te(n){if(!Array.isArray(n))return[];if(le.value)return Array.from(n);{const{remote:b}=e,{value:k}=R;if(b){const{value:A}=Q;return n.filter($=>k.has($)||A.has($))}else return n.filter(A=>k.has(A))}}function Se(n){de(n.rawNode)}function de(n){if(K.value)return;const{tag:b,remote:k,clearFilterAfterSelect:A,valueField:$}=e;if(b&&!k){const{value:O}=v,_=O[0]||null;if(_){const ne=S.value;ne.length?ne.push(_):S.value=[_],v.value=oe}}if(k&&Q.value.set(n[$],n),e.multiple){const O=Te(h.value),_=O.findIndex(ne=>ne===n[$]);if(~_){if(O.splice(_,1),b&&!k){const ne=u(n[$]);~ne&&(S.value.splice(ne,1),A&&(g.value=""))}}else O.push(n[$]),A&&(g.value="");D(O,c(O))}else{if(b&&!k){const O=u(n[$]);~O?S.value=[S.value[O]]:S.value=oe}Ve(),se(),D(n[$],n)}}function u(n){return S.value.findIndex(k=>k[e.valueField]===n)}function w(n){L.value||he();const{value:b}=n.target;g.value=b;const{tag:k,remote:A}=e;if(N(b),k&&!A){if(!b){v.value=oe;return}const{onCreate:$}=e,O=$?$(b):{[e.labelField]:b,[e.valueField]:b},{valueField:_,labelField:ne}=e;x.value.some(ve=>ve[_]===O[_]||ve[ne]===O[ne])||S.value.some(ve=>ve[_]===O[_]||ve[ne]===O[ne])?v.value=oe:v.value=[O]}}function ee(n){n.stopPropagation();const{multiple:b}=e;!b&&e.filterable&&se(),f(),b?D([],[]):D(null,null)}function Qe(n){!Le(n,"action")&&!Le(n,"empty")&&!Le(n,"header")&&n.preventDefault()}function en(n){ae(n)}function We(n){var b,k,A,$,O;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((b=V.value)===null||b===void 0)&&b.isComposing)){if(L.value){const _=(k=G.value)===null||k===void 0?void 0:k.getPendingTmNode();_?Se(_):e.filterable||(se(),Ve())}else if(he(),e.tag&&ue.value){const _=v.value[0];if(_){const ne=_[e.valueField],{value:ve}=h;e.multiple&&Array.isArray(ve)&&ve.includes(ne)||de(_)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;L.value&&((A=G.value)===null||A===void 0||A.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;L.value?($=G.value)===null||$===void 0||$.next():he();break;case"Escape":L.value&&(Pt(n),se()),(O=V.value)===null||O===void 0||O.focus();break}}function Ve(){var n;(n=V.value)===null||n===void 0||n.focus()}function je(){var n;(n=V.value)===null||n===void 0||n.focusInput()}function nn(){var n;L.value&&((n=J.value)===null||n===void 0||n.syncPosition())}pe(),ke(te(e,"options"),pe);const tn={focus:()=>{var n;(n=V.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=V.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=V.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=V.value)===null||n===void 0||n.blurInput()}},Ke=F(()=>{const{self:{menuBoxShadow:n}}=a.value;return{"--n-menu-box-shadow":n}}),xe=l?Ne("select",void 0,Ke,e):void 0;return Object.assign(Object.assign({},tn),{mergedStatus:U,mergedClsPrefix:t,mergedBordered:o,namespace:r,treeMate:z,isMounted:kt(),triggerRef:V,menuRef:G,pattern:g,uncontrolledShow:E,mergedShow:L,adjustedTo:un(e),uncontrolledValue:d,mergedValue:h,followerRef:J,localizedPlaceholder:ie,selectedOption:B,selectedOptions:y,mergedSize:q,mergedDisabled:K,focused:m,activeWithoutMenuOpen:ue,inlineThemeDisabled:l,onTriggerInputFocus:Pe,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:nn,handleMenuFocus:ye,handleMenuBlur:$e,handleMenuTabOut:_e,handleTriggerClick:Me,handleToggle:Se,handleDeleteOption:de,handlePatternInput:w,handleClear:ee,handleTriggerBlur:Be,handleTriggerFocus:we,handleKeydown:We,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ee,handleMenuScroll:en,handleMenuKeydown:We,handleMenuMousedown:Qe,mergedTheme:a,cssVars:l?void 0:Ke,themeClass:xe==null?void 0:xe.themeClass,onRender:xe==null?void 0:xe.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Lt,null,{default:()=>[s(At,null,{default:()=>s(po,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),s(Dt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===un.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(Fn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Tt(s(ro,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,l;return[(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)]},header:()=>{var r,l;return[(l=(r=this.$slots).header)===null||l===void 0?void 0:l.call(r)]},action:()=>{var r,l;return[(l=(r=this.$slots).action)===null||l===void 0?void 0:l.call(r)]}}),this.displayDirective==="show"?[[It,this.mergedShow],[mn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[mn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{sn as N,Ut as V,Fo as _,ro as a,eo as b,mo as c,En as e,Hn as i,an as m,yo as s};
