import{p as Pe,B as ke,f as Ce,i as Ne,h as ae,r as Ie,N as Re,c as Ke,j as ce}from"./Popover-CiGR5w5_.js";import{aJ as Oe,bn as _e,bo as Be,o as Te,b7 as G,bp as ze,b6 as V,j as ie,r as D,d as z,h as a,c as Ae,a as Fe,P as He,Q as de,X as Z,i as M,m as pe,b9 as De,T as Me,q as fe,e as y,Z as X,p as W,_ as $e,bq as Le,br as je,t as We,n as Ee,z as I,b5 as Ue,x as j,V as se,A as K,B as T,$ as qe,H as O,u as Ge,G as he,aU as H,K as Ve,N as te}from"./index-Btr2J4-S.js";import{u as Xe}from"./use-merged-state-C6z3NJbs.js";function Ze(e={},o){const i=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(w=>{if(w!==d.key)return;const h=r[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(w=>{if(w!==d.key)return;const h=t[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},p=()=>{(o===void 0||o.value)&&(V("keydown",document,n),V("keyup",document,u)),o!==void 0&&ie(o,d=>{d?(V("keydown",document,n),V("keyup",document,u)):(G("keydown",document,n),G("keyup",document,u))})};return _e()?(Be(p),Te(()=>{(o===void 0||o.value)&&(G("keydown",document,n),G("keyup",document,u))})):p(),ze(i)}function Je(e,o,i){const r=D(e.value);let t=null;return ie(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Qe(e){return o=>{o?e.value=o.$el:e.value=null}}const Ye=z({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),eo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function oo(e){const{primaryColor:o,textColor2:i,dividerColor:r,hoverColor:t,popoverColor:n,invertedColor:u,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,heightSmall:S,heightMedium:k,heightLarge:C,heightHuge:_,textColor3:x,opacityDisabled:N}=e;return Object.assign(Object.assign({},eo),{optionHeightSmall:S,optionHeightMedium:k,optionHeightLarge:C,optionHeightHuge:_,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:n,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:t,optionColorActive:He(o,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:N})}const no=Ae({name:"Dropdown",common:Fe,peers:{Popover:Pe},self:oo}),le=de("n-dropdown-menu"),J=de("n-dropdown"),ue=de("n-dropdown-option"),ve=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return a("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),to=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=M(le),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=M(J);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:u}=this,{rawNode:p}=this.tmNode,d=a("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(p)),a("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},a("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},Z(p.icon)),a("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(p):Z((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),a("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:d,option:p}):d}});function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function ro(e){return e.type==="group"}function be(e){return e.type==="divider"}function io(e){return e.type==="render"}const me=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=M(J),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:u,animatedRef:p,mergedShowRef:d,renderLabelRef:w,renderIconRef:h,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:k,nodePropsRef:C,menuPropsRef:_}=o,x=M(ue,null),N=M(le),E=M(fe),Q=y(()=>e.tmNode.rawNode),U=y(()=>{const{value:s}=S;return re(e.tmNode.rawNode,s)}),Y=y(()=>{const{disabled:s}=e.tmNode;return s}),ee=y(()=>{if(!U.value)return!1;const{key:s,disabled:m}=e.tmNode;if(m)return!1;const{value:R}=i,{value:A}=r,{value:ne}=t,{value:F}=n;return R!==null?F.includes(s):A!==null?F.includes(s)&&F[F.length-1]!==s:ne!==null?F.includes(s):!1}),oe=y(()=>r.value===null&&!p.value),q=Je(ee,300,oe),$=y(()=>!!(x!=null&&x.enteringSubmenuRef.value)),L=D(!1);W(ue,{enteringSubmenuRef:L});function B(){L.value=!0}function l(){L.value=!1}function b(){const{parentKey:s,tmNode:m}=e;m.disabled||d.value&&(t.value=s,r.value=null,i.value=m.key)}function f(){const{tmNode:s}=e;s.disabled||d.value&&i.value!==s.key&&b()}function c(s){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:m}=s;m&&!ae({target:m},"dropdownOption")&&!ae({target:m},"scrollbarRail")&&(i.value=null)}function P(){const{value:s}=U,{tmNode:m}=e;d.value&&!s&&!m.disabled&&(o.doSelect(m.key,m.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:w,renderIcon:h,siblingHasIcon:N.showIconRef,siblingHasSubmenu:N.hasSubmenuRef,menuProps:_,popoverBody:E,animated:p,mergedShowSubmenu:y(()=>q.value&&!$.value),rawNode:Q,hasSubmenu:U,pending:X(()=>{const{value:s}=n,{key:m}=e.tmNode;return s.includes(m)}),childActive:X(()=>{const{value:s}=u,{key:m}=e.tmNode,R=s.findIndex(A=>m===A);return R===-1?!1:R<s.length-1}),active:X(()=>{const{value:s}=u,{key:m}=e.tmNode,R=s.findIndex(A=>m===A);return R===-1?!1:R===s.length-1}),mergedDisabled:Y,renderOption:k,nodeProps:C,handleClick:P,handleMouseMove:f,handleMouseEnter:b,handleMouseLeave:c,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:u,siblingHasSubmenu:p,renderLabel:d,renderIcon:w,renderOption:h,nodeProps:g,props:S,scrollable:k}=this;let C=null;if(t){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=a(we,Object.assign({},E,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const _={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),N=a("div",Object.assign({class:[`${n}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),a("div",pe(_,S),[a("div",{class:[`${n}-dropdown-option-body__prefix`,u&&`${n}-dropdown-option-body__prefix--show-icon`]},[w?w(r):Z(r.icon)]),a("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):Z((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),a("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,p&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?a(De,null,{default:()=>a(Ye,null)}):null)]),this.hasSubmenu?a(ke,null,{default:()=>[a(Ce,null,{default:()=>a("div",{class:`${n}-dropdown-offset-container`},a(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:k&&this.popoverBody||void 0,teleportDisabled:!k},{default:()=>a("div",{class:`${n}-dropdown-menu-wrapper`},i?a(Me,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return h?h({node:N,option:r}):N}}),lo=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return a($e,null,a(to,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:n}=t;return n.show===!1?null:be(n)?a(ve,{clsPrefix:i,key:t.key}):t.isGroup?(Le("dropdown","`group` node is not allowed to be put in `group` node."),null):a(me,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),ao=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return a("div",o,[e==null?void 0:e()])}}),we=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=M(J);W(le,{showIconRef:y(()=>{const t=o.value;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:p}=n;return t?t(p):p.icon})}),hasSubmenuRef:y(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>re(d,t));const{rawNode:p}=n;return re(p,t)})})});const r=D(null);return W(We,null),W(Ee,null),W(fe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:io(n)?a(ao,{tmNode:t,key:t.key}):be(n)?a(ve,{clsPrefix:o,key:t.key}):ro(n)?a(lo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):a(me,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return a("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?a(je,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ie({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),so=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ue(),I("dropdown-option",`
 position: relative;
 `,[j("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[j("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[j("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),se("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),j("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),j("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),j(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),uo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},co=Object.keys(ce),po=Object.assign(Object.assign(Object.assign({},ce),uo),he.props),bo=z({name:"Dropdown",inheritAttrs:!1,props:po,setup(e){const o=D(!1),i=Xe(O(e,"show"),o),r=y(()=>{const{keyField:l,childrenField:b}=e;return Ke(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[b]}})}),t=y(()=>r.value.treeNodes),n=D(null),u=D(null),p=D(null),d=y(()=>{var l,b,f;return(f=(b=(l=n.value)!==null&&l!==void 0?l:u.value)!==null&&b!==void 0?b:p.value)!==null&&f!==void 0?f:null}),w=y(()=>r.value.getPath(d.value).keyPath),h=y(()=>r.value.getPath(e.value).keyPath),g=X(()=>e.keyboard&&i.value);Ze({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:oe},Escape:E}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:k}=Ge(e),C=he("Dropdown","-dropdown",so,no,e,S);W(J,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:u,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:w,activeKeyPathRef:h,animatedRef:O(e,"animated"),mergedShowRef:i,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:_,doUpdateShow:x}),ie(i,l=>{!e.animated&&!l&&N()});function _(l,b){const{onSelect:f}=e;f&&te(f,l,b)}function x(l){const{"onUpdate:show":b,onUpdateShow:f}=e;b&&te(b,l),f&&te(f,l),o.value=l}function N(){n.value=null,u.value=null,p.value=null}function E(){x(!1)}function Q(){$("left")}function U(){$("right")}function Y(){$("up")}function ee(){$("down")}function oe(){const l=q();l!=null&&l.isLeaf&&i.value&&(_(l.key,l.rawNode),x(!1))}function q(){var l;const{value:b}=r,{value:f}=d;return!b||f===null?null:(l=b.getNode(f))!==null&&l!==void 0?l:null}function $(l){const{value:b}=d,{value:{getFirstAvailableNode:f}}=r;let c=null;if(b===null){const P=f();P!==null&&(c=P.key)}else{const P=q();if(P){let s;switch(l){case"down":s=P.getNext();break;case"up":s=P.getPrev();break;case"right":s=P.getChild();break;case"left":s=P.getParent();break}s&&(c=s.key)}}c!==null&&(n.value=null,u.value=c)}const L=y(()=>{const{size:l,inverted:b}=e,{common:{cubicBezierEaseInOut:f},self:c}=C.value,{padding:P,dividerColor:s,borderRadius:m,optionOpacityDisabled:R,[H("optionIconSuffixWidth",l)]:A,[H("optionSuffixWidth",l)]:ne,[H("optionIconPrefixWidth",l)]:F,[H("optionPrefixWidth",l)]:ye,[H("fontSize",l)]:ge,[H("optionHeight",l)]:xe,[H("optionIconSize",l)]:Se}=c,v={"--n-bezier":f,"--n-font-size":ge,"--n-padding":P,"--n-border-radius":m,"--n-option-height":xe,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":F,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Se,"--n-divider-color":s,"--n-option-opacity-disabled":R};return b?(v["--n-color"]=c.colorInverted,v["--n-option-color-hover"]=c.optionColorHoverInverted,v["--n-option-color-active"]=c.optionColorActiveInverted,v["--n-option-text-color"]=c.optionTextColorInverted,v["--n-option-text-color-hover"]=c.optionTextColorHoverInverted,v["--n-option-text-color-active"]=c.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=c.optionTextColorChildActiveInverted,v["--n-prefix-color"]=c.prefixColorInverted,v["--n-suffix-color"]=c.suffixColorInverted,v["--n-group-header-text-color"]=c.groupHeaderTextColorInverted):(v["--n-color"]=c.color,v["--n-option-color-hover"]=c.optionColorHover,v["--n-option-color-active"]=c.optionColorActive,v["--n-option-text-color"]=c.optionTextColor,v["--n-option-text-color-hover"]=c.optionTextColorHover,v["--n-option-text-color-active"]=c.optionTextColorActive,v["--n-option-text-color-child-active"]=c.optionTextColorChildActive,v["--n-prefix-color"]=c.prefixColor,v["--n-suffix-color"]=c.suffixColor,v["--n-group-header-text-color"]=c.groupHeaderTextColor),v}),B=k?Ve("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:C,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&N()},doUpdateShow:x,cssVars:k?void 0:L,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(r,t,n,u,p)=>{var d;const{mergedClsPrefix:w,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(h==null?void 0:h(void 0,this.tmNodes.map(k=>k.rawNode)))||{},S={ref:Qe(t),class:[r,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:p};return a(we,pe(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return a(Re,Object.assign({},qe(this.$props,co),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{Ye as C,bo as _,Qe as c,no as d};
