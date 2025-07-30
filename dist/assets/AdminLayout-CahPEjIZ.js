import{r as q}from"./icon.utils-CIVznIo1.js";import{d as V,h as m,c as Ne,s as qe,a as $e,w as Ae,F as mo,T as Xe,m as Ze,S as Be,v as De,r as O,i as Z,b as Je,e as y,u as Q,f as vo,g as He,j as ho,o as po,k as fo,l as go,p as X,n as bo,q as yo,t as Co,x as h,y as ve,z as v,A as I,B as p,C as xo,D as wo,L as zo,E as Io,G as Y,H as te,I as se,J as So,K as re,M as Ro,N as L,O as Ue,P as Se,Q as ce,R as Qe,U as eo,V as ne,W as ko,X as oe,Y as Ee,Z as Pe,_ as Ao,$ as Re,a0 as Ho,a1 as Po,a2 as _o,a3 as oo,a4 as To,a5 as No,a6 as $o,a7 as Bo,a8 as Ve,a9 as ie,aa as le,ab as G,ac as K,ad as Ke,ae,af as We,ag as Eo,ah as Oo}from"./index-Btr2J4-S.js";import{u as Fo}from"./useBreakpoints-BXtCZvje.js";import{u as Mo}from"./period.stores-UNkVPIcX.js";import{d as Lo,C as jo,_ as to}from"./Dropdown-BwqC77Es.js";import{u as de}from"./use-merged-state-C6z3NJbs.js";import{t as Do,N as Uo}from"./Tooltip-Qo-Jhg78.js";import{c as ke,u as Vo,V as Ko}from"./Popover-CiGR5w5_.js";import"./DataTable.types-BEg5m_To.js";import"./get-OrJI3Zgc.js";const Wo=V({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Go(e){const{modalColor:t,textColor1:o,textColor2:r,boxShadow3:a,lineHeight:i,fontWeightStrong:u,dividerColor:d,closeColorHover:s,closeColorPressed:w,closeIconColor:E,closeIconColorHover:_,closeIconColorPressed:b,borderRadius:N,primaryColorHover:T}=e;return{bodyPadding:"16px 24px",borderRadius:N,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:r,titleTextColor:o,titleFontSize:"18px",titleFontWeight:u,boxShadow:a,lineHeight:i,headerBorderBottom:`1px solid ${d}`,footerBorderTop:`1px solid ${d}`,closeIconColor:E,closeIconColorHover:_,closeIconColorPressed:b,closeSize:"22px",closeIconSize:"18px",closeColorHover:s,closeColorPressed:w,closeBorderRadius:N,resizableTriggerColorHover:T}}const Yo=Ne({name:"Drawer",common:$e,peers:{Scrollbar:qe},self:Go}),qo=V({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=O(!!e.show),o=O(null),r=Z(Je);let a=0,i="",u=null;const d=O(!1),s=O(!1),w=y(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:E,mergedRtlRef:_}=Q(e),b=vo("Drawer",_,E),N=c,T=C=>{s.value=!0,a=w.value?C.clientY:C.clientX,i=document.body.style.cursor,document.body.style.cursor=w.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",S),document.body.addEventListener("mouseleave",N),document.body.addEventListener("mouseup",c)},k=()=>{u!==null&&(window.clearTimeout(u),u=null),s.value?d.value=!0:u=window.setTimeout(()=>{d.value=!0},300)},A=()=>{u!==null&&(window.clearTimeout(u),u=null),d.value=!1},{doUpdateHeight:z,doUpdateWidth:W}=r,D=C=>{const{maxWidth:F}=e;if(F&&C>F)return F;const{minWidth:H}=e;return H&&C<H?H:C},M=C=>{const{maxHeight:F}=e;if(F&&C>F)return F;const{minHeight:H}=e;return H&&C<H?H:C};function S(C){var F,H;if(s.value)if(w.value){let U=((F=o.value)===null||F===void 0?void 0:F.offsetHeight)||0;const j=a-C.clientY;U+=e.placement==="bottom"?j:-j,U=M(U),z(U),a=C.clientY}else{let U=((H=o.value)===null||H===void 0?void 0:H.offsetWidth)||0;const j=a-C.clientX;U+=e.placement==="right"?j:-j,U=D(U),W(U),a=C.clientX}}function c(){s.value&&(a=0,s.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",S),document.body.removeEventListener("mouseup",c),document.body.removeEventListener("mouseleave",N))}He(()=>{e.show&&(t.value=!0)}),ho(()=>e.show,C=>{C||c()}),po(()=>{c()});const f=y(()=>{const{show:C}=e,F=[[De,C]];return e.showMask||F.push([fo,e.onClickoutside,void 0,{capture:!0}]),F});function $(){var C;t.value=!1,(C=e.onAfterLeave)===null||C===void 0||C.call(e)}return go(y(()=>e.blockScroll&&t.value)),X(bo,o),X(yo,null),X(Co,null),{bodyRef:o,rtlEnabled:b,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:y(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:$,bodyDirectives:f,handleMousedownResizeTrigger:T,handleMouseenterResizeTrigger:k,handleMouseleaveResizeTrigger:A,isDragging:s,isHoverOnResizeTrigger:d}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Ae(m("div",{role:"none"},m(mo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>m(Xe,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ae(m("div",Ze(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?m("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?m("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):m(Be,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[De,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Xo,cubicBezierEaseOut:Zo}=ve;function Jo({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Xo}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Zo}`}),h(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Qo,cubicBezierEaseOut:et}=ve;function ot({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Qo}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${et}`}),h(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:tt,cubicBezierEaseOut:rt}=ve;function nt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${tt}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${rt}`}),h(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:it,cubicBezierEaseOut:lt}=ve;function at({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${it}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${lt}`}),h(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const st=h([v("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[nt(),ot(),at(),Jo(),I("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),I("native-scrollbar",[v("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),p("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[I("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),v("drawer-content-wrapper",`
 box-sizing: border-box;
 `),v("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[I("native-scrollbar",[v("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),v("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),v("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),v("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[p("main",`
 flex: 1;
 `),p("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),v("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),I("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[p("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),I("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[p("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),I("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[p("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),I("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[p("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),h("body",[h(">",[v("drawer-container",`
 position: fixed;
 `)])]),v("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[h("> *",`
 pointer-events: all;
 `)]),v("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),xo({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),dt=Object.assign(Object.assign({},Y.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),ct=V({name:"Drawer",inheritAttrs:!1,props:dt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=Q(e),a=Io(),i=Y("Drawer","-drawer",st,Yo,e,t),u=O(e.defaultWidth),d=O(e.defaultHeight),s=de(te(e,"width"),u),w=de(te(e,"height"),d),E=y(()=>{const{placement:c}=e;return c==="top"||c==="bottom"?"":se(s.value)}),_=y(()=>{const{placement:c}=e;return c==="left"||c==="right"?"":se(w.value)}),b=c=>{const{onUpdateWidth:f,"onUpdate:width":$}=e;f&&L(f,c),$&&L($,c),u.value=c},N=c=>{const{onUpdateHeight:f,"onUpdate:width":$}=e;f&&L(f,c),$&&L($,c),d.value=c},T=y(()=>[{width:E.value,height:_.value},e.drawerStyle||""]);function k(c){const{onMaskClick:f,maskClosable:$}=e;$&&D(!1),f&&f(c)}function A(c){k(c)}const z=So();function W(c){var f;(f=e.onEsc)===null||f===void 0||f.call(e),e.show&&e.closeOnEsc&&Ro(c)&&(z.value||D(!1))}function D(c){const{onHide:f,onUpdateShow:$,"onUpdate:show":C}=e;$&&L($,c),C&&L(C,c),f&&!c&&L(f,c)}X(Je,{isMountedRef:a,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:D,doUpdateHeight:N,doUpdateWidth:b});const M=y(()=>{const{common:{cubicBezierEaseInOut:c,cubicBezierEaseIn:f,cubicBezierEaseOut:$},self:{color:C,textColor:F,boxShadow:H,lineHeight:U,headerPadding:j,footerPadding:ee,borderRadius:fe,bodyPadding:ge,titleFontSize:be,titleTextColor:ye,titleFontWeight:Ce,headerBorderBottom:xe,footerBorderTop:g,closeIconColor:R,closeIconColorHover:n,closeIconColorPressed:x,closeColorHover:B,closeColorPressed:we,closeIconSize:ze,closeSize:Ie,closeBorderRadius:l,resizableTriggerColorHover:uo}}=i.value;return{"--n-line-height":U,"--n-color":C,"--n-border-radius":fe,"--n-text-color":F,"--n-box-shadow":H,"--n-bezier":c,"--n-bezier-out":$,"--n-bezier-in":f,"--n-header-padding":j,"--n-body-padding":ge,"--n-footer-padding":ee,"--n-title-text-color":ye,"--n-title-font-size":be,"--n-title-font-weight":Ce,"--n-header-border-bottom":xe,"--n-footer-border-top":g,"--n-close-icon-color":R,"--n-close-icon-color-hover":n,"--n-close-icon-color-pressed":x,"--n-close-size":Ie,"--n-close-color-hover":B,"--n-close-color-pressed":we,"--n-close-icon-size":ze,"--n-close-border-radius":l,"--n-resize-trigger-color-hover":uo}}),S=r?re("drawer",void 0,M,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:T,handleOutsideClick:A,handleMaskClick:k,handleEsc:W,mergedTheme:i,cssVars:r?void 0:M,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,isMounted:a}},render(){const{mergedClsPrefix:e}=this;return m(zo,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Ae(m("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?m(Xe,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?m("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,m(qo,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[wo,{zIndex:this.zIndex,enabled:this.show}]])}})}});function ut(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:i,actionColor:u,scrollbarColor:d,scrollbarColorHover:s,invertedColor:w}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:u,headerColor:a,headerColorInverted:w,footerColor:u,footerColorInverted:w,headerBorderColor:i,headerBorderColorInverted:w,footerBorderColor:i,footerBorderColorInverted:w,siderBorderColor:i,siderBorderColorInverted:w,siderColor:a,siderColorInverted:w,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ue(r,d),siderToggleBarColorHover:Ue(r,s),__invertScrollbar:"true"}}const he=Ne({name:"Layout",common:$e,peers:{Scrollbar:qe},self:ut});function mt(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function vt(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:a,textColor1:i,fontSize:u,dividerColor:d,hoverColor:s,primaryColorHover:w}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:Se(r,{alpha:.1}),itemColorActiveHover:Se(r,{alpha:.1}),itemColorActiveCollapsed:Se(r,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:w,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:w,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:d},mt("#BBB",r,"#FFF","#AAA"))}const ht=Ne({name:"Menu",common:$e,peers:{Tooltip:Do,Dropdown:Lo},self:vt}),ro=ce("n-layout-sider"),pe={type:String,default:"static"},pt=v("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ft={embedded:Boolean,position:pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},no=ce("n-layout");function io(e){return V({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),ft),setup(t){const o=O(null),r=O(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=Q(t),u=Y("Layout","-layout",pt,he,t,a);function d(k,A){if(t.nativeScrollbar){const{value:z}=o;z&&(A===void 0?z.scrollTo(k):z.scrollTo(k,A))}else{const{value:z}=r;z&&z.scrollTo(k,A)}}X(no,t);let s=0,w=0;const E=k=>{var A;const z=k.target;s=z.scrollLeft,w=z.scrollTop,(A=t.onScroll)===null||A===void 0||A.call(t,k)};Qe(()=>{if(t.nativeScrollbar){const k=o.value;k&&(k.scrollTop=w,k.scrollLeft=s)}});const _={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:d},N=y(()=>{const{common:{cubicBezierEaseInOut:k},self:A}=u.value;return{"--n-bezier":k,"--n-color":t.embedded?A.colorEmbedded:A.color,"--n-text-color":A.textColor}}),T=i?re("layout",y(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:_,mergedTheme:u,handleNativeElScroll:E,cssVars:i?void 0:N,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},b)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return m("div",{class:i,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):m(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const gt=io(!1),bt=io(!0),yt=v("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),I("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),Ct=Object.assign(Object.assign({},Y.props),{inverted:Boolean,position:pe,bordered:Boolean}),xt=V({name:"LayoutFooter",props:Ct,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=Y("Layout","-layout-footer",yt,he,e,t),a=y(()=>{const{common:{cubicBezierEaseInOut:u},self:d}=r.value,s={"--n-bezier":u};return e.inverted?(s["--n-color"]=d.footerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.footerBorderColorInverted):(s["--n-color"]=d.footerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.footerBorderColor),s}),i=o?re("layout-footer",y(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),wt=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),I("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),zt={position:pe,inverted:Boolean,bordered:{type:Boolean,default:!1}},It=V({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),zt),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=Y("Layout","-layout-header",wt,he,e,t),a=y(()=>{const{common:{cubicBezierEaseInOut:u},self:d}=r.value,s={"--n-bezier":u};return e.inverted?(s["--n-color"]=d.headerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.headerBorderColorInverted):(s["--n-color"]=d.headerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.headerBorderColor),s}),i=o?re("layout-header",y(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),St=v("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[I("bordered",[p("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),p("left-placement",[I("bordered",[p("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[p("border",`
 left: 0;
 `)]),I("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[h("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[h("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[v("layout-toggle-bar",[h("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[p("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),p("bottom",`
 position: absolute;
 top: 34px;
 `),h("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),p("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[v("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Rt=V({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),kt=V({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(eo,{clsPrefix:e},{default:()=>m(jo,null)}))}}),At={position:pe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ht=V({name:"LayoutSider",props:Object.assign(Object.assign({},Y.props),At),setup(e){const t=Z(no),o=O(null),r=O(null),a=O(e.defaultCollapsed),i=de(te(e,"collapsed"),a),u=y(()=>se(i.value?e.collapsedWidth:e.width)),d=y(()=>e.collapseMode!=="transform"?{}:{minWidth:se(e.width)}),s=y(()=>t?t.siderPlacement:"left");function w(S,c){if(e.nativeScrollbar){const{value:f}=o;f&&(c===void 0?f.scrollTo(S):f.scrollTo(S,c))}else{const{value:f}=r;f&&f.scrollTo(S,c)}}function E(){const{"onUpdate:collapsed":S,onUpdateCollapsed:c,onExpand:f,onCollapse:$}=e,{value:C}=i;c&&L(c,!C),S&&L(S,!C),a.value=!C,C?f&&L(f):$&&L($)}let _=0,b=0;const N=S=>{var c;const f=S.target;_=f.scrollLeft,b=f.scrollTop,(c=e.onScroll)===null||c===void 0||c.call(e,S)};Qe(()=>{if(e.nativeScrollbar){const S=o.value;S&&(S.scrollTop=b,S.scrollLeft=_)}}),X(ro,{collapsedRef:i,collapseModeRef:te(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:k}=Q(e),A=Y("Layout","-layout-sider",St,he,e,T);function z(S){var c,f;S.propertyName==="max-width"&&(i.value?(c=e.onAfterLeave)===null||c===void 0||c.call(e):(f=e.onAfterEnter)===null||f===void 0||f.call(e))}const W={scrollTo:w},D=y(()=>{const{common:{cubicBezierEaseInOut:S},self:c}=A.value,{siderToggleButtonColor:f,siderToggleButtonBorder:$,siderToggleBarColor:C,siderToggleBarColorHover:F}=c,H={"--n-bezier":S,"--n-toggle-button-color":f,"--n-toggle-button-border":$,"--n-toggle-bar-color":C,"--n-toggle-bar-color-hover":F};return e.inverted?(H["--n-color"]=c.siderColorInverted,H["--n-text-color"]=c.textColorInverted,H["--n-border-color"]=c.siderBorderColorInverted,H["--n-toggle-button-icon-color"]=c.siderToggleButtonIconColorInverted,H.__invertScrollbar=c.__invertScrollbar):(H["--n-color"]=c.siderColor,H["--n-text-color"]=c.textColor,H["--n-border-color"]=c.siderBorderColor,H["--n-toggle-button-icon-color"]=c.siderToggleButtonIconColor),H}),M=k?re("layout-sider",y(()=>e.inverted?"a":"b"),D,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:T,mergedTheme:A,styleMaxWidth:u,mergedCollapsed:i,scrollContainerStyle:d,siderPlacement:s,handleNativeElScroll:N,handleTransitionend:z,handleTriggerClick:E,inlineThemeDisabled:k,cssVars:D,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender},W)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:se(this.width)}]},this.nativeScrollbar?m("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?m(Rt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(kt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${t}-layout-sider__border`}):null)}}),ue=ce("n-menu"),Oe=ce("n-submenu"),Fe=ce("n-menu-item-group"),Ge=[h("&::before","background-color: var(--n-item-color-hover);"),p("arrow",`
 color: var(--n-arrow-color-hover);
 `),p("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[h("a",`
 color: var(--n-item-text-color-hover);
 `),p("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ye=[p("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Pt=h([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[h("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[I("selected",[p("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-horizontal);"),p("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),p("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[ne("selected, child-active",[h("&:focus-within",Ye)]),I("selected",[J(null,[p("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[J(null,[p("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",Ye)]),v("menu-item-content-header",[h("a","color: var(--n-item-text-color-horizontal);")])])]),ne("responsive",[v("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[v("menu-item-content",[I("selected",[h("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),p("arrow","opacity: 0;"),p("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[h("> *","z-index: 1;"),h("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[p("arrow","transform: rotate(0);")]),I("selected",[h("&::before","background-color: var(--n-item-color-active);"),p("arrow","color: var(--n-arrow-color-active);"),p("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[h("a","color: var(--n-item-text-color-active);"),p("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[h("a",`
 color: var(--n-item-text-color-child-active);
 `),p("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),p("arrow",`
 color: var(--n-arrow-color-child-active);
 `),p("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[ne("selected, child-active",[h("&:focus-within",Ge)]),I("selected",[J(null,[p("arrow","color: var(--n-arrow-color-active-hover);"),p("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[h("a","color: var(--n-item-text-color-active-hover);"),p("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[J(null,[p("arrow","color: var(--n-arrow-color-child-active-hover);"),p("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[h("a","color: var(--n-item-text-color-child-active-hover);"),p("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[J(null,[h("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,Ge)]),p("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),p("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[h("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[h("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ko({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),v("menu-tooltip",[h("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,t){return[I("hover",e,t),h("&:hover",e,t)]}const lo=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Z(ue);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:i}}=this,u=o?o(t.rawNode):oe(this.icon);return m("div",{onClick:d=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):oe(this.title),this.extra||a?m("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):oe(this.extra)):null),this.showArrow?m(eo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):m(Wo,null)}):null)}}),me=8;function Me(e){const t=Z(ue),{props:o,mergedCollapsedRef:r}=t,a=Z(Oe,null),i=Z(Fe,null),u=y(()=>o.mode==="horizontal"),d=y(()=>u.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=y(()=>{var b;return Math.max((b=o.collapsedIconSize)!==null&&b!==void 0?b:o.iconSize,o.iconSize)}),w=y(()=>{var b;return!u.value&&e.root&&r.value&&(b=o.collapsedIconSize)!==null&&b!==void 0?b:o.iconSize}),E=y(()=>{if(u.value)return;const{collapsedWidth:b,indent:N,rootIndent:T}=o,{root:k,isGroup:A}=e,z=T===void 0?N:T;return k?r.value?b/2-s.value/2:z:i&&typeof i.paddingLeftRef.value=="number"?N/2+i.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(A?N/2:N)+a.paddingLeftRef.value:0}),_=y(()=>{const{collapsedWidth:b,indent:N,rootIndent:T}=o,{value:k}=s,{root:A}=e;return u.value||!A||!r.value?me:(T===void 0?N:T)+k+me-(b+k)/2});return{dropdownPlacement:d,activeIconSize:w,maxIconSize:s,paddingLeft:E,iconMarginRight:_,NMenu:t,NSubmenu:a}}const Le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},_t=V({name:"MenuDivider",setup(){const e=Z(ue),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:m("div",{class:`${t.value}-menu-divider`})}}),ao=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Tt=Ee(ao),Nt=V({name:"MenuOption",props:ao,setup(e){const t=Me(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:u}=r,d=o?o.mergedDisabledRef:{value:!1},s=y(()=>d.value||e.disabled);function w(_){const{onClick:b}=e;b&&b(_)}function E(_){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),w(_))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:Pe(()=>e.root&&u.value&&a.mode!=="horizontal"&&!s.value),selected:Pe(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:E}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,i=a==null?void 0:a(o.rawNode);return m("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),m(Uo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):oe(this.title),trigger:()=>m(lo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),so=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),$t=Ee(so),Bt=V({name:"MenuOptionGroup",props:so,setup(e){X(Oe,null);const t=Me(e);X(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Z(ue);return function(){const{value:a}=o,i=t.paddingLeft.value,{nodeProps:u}=r,d=u==null?void 0:u(e.tmNode.rawNode);return m("div",{class:`${a}-menu-item-group`,role:"group"},m("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),oe(e.title),e.extra?m(Ao,null," ",oe(e.extra)):null),m("div",null,e.tmNodes.map(s=>je(s,r))))}}});function _e(e){return e.type==="divider"||e.type==="render"}function Et(e){return e.type==="divider"}function je(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(_e(o))return Et(o)?m(_t,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:i,level:u,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:u,root:u===0,isGroup:d});return e.children?e.isGroup?m(Bt,Re(s,$t,{tmNode:e,tmNodes:e.children,key:i})):m(Te,Re(s,Ot,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):m(Nt,Re(s,Tt,{key:i,tmNode:e}))}const co=Object.assign(Object.assign({},Le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ot=Ee(co),Te=V({name:"Submenu",props:co,setup(e){const t=Me(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:i,mergedThemeRef:u}=o,d=y(()=>{const{disabled:b}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:b}),s=O(!1);X(Oe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),X(Fe,null);function w(){const{onClick:b}=e;b&&b()}function E(){d.value||(i.value||o.toggleExpand(e.internalKey),w())}function _(b){s.value=b}return{menuProps:a,mergedTheme:u,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:Pe(()=>{var b;return(b=e.virtualChildActive)!==null&&b!==void 0?b:o.activePathRef.value.includes(e.internalKey)}),collapsed:y(()=>a.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!d.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:_,handleClick:E}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:u,paddingLeft:d,collapsed:s,mergedDisabled:w,maxIconSize:E,activeIconSize:_,title:b,childActive:N,icon:T,handleClick:k,menuProps:{nodeProps:A},dropdownShow:z,iconMarginRight:W,tmNode:D,mergedClsPrefix:M,isEllipsisPlaceholder:S,extra:c}=this,f=A==null?void 0:A(D.rawNode);return m("div",Object.assign({},f,{class:[`${M}-menu-item`,f==null?void 0:f.class],role:"menuitem"}),m(lo,{tmNode:D,paddingLeft:d,collapsed:s,disabled:w,iconMarginRight:W,maxIconSize:E,activeIconSize:_,title:b,extra:c,showArrow:!u,childActive:N,clsPrefix:M,icon:T,hover:z,onClick:k,isEllipsisPlaceholder:S}))},i=()=>m(Ho,null,{default:()=>{const{tmNodes:u,collapsed:d}=this;return d?null:m("div",{class:`${t}-submenu-children`,role:"menu"},u.map(s=>je(s,this.menuProps)))}});return this.root?m(to,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>m("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:i())}):m("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),i())}}),Ft=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Mt=V({name:"Menu",inheritAttrs:!1,props:Ft,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=Y("Menu","-menu",Pt,ht,e,t),a=Z(ro,null),i=y(()=>{var g;const{collapsed:R}=e;if(R!==void 0)return R;if(a){const{collapseModeRef:n,collapsedRef:x}=a;if(n.value==="width")return(g=x.value)!==null&&g!==void 0?g:!1}return!1}),u=y(()=>{const{keyField:g,childrenField:R,disabledField:n}=e;return ke(e.items||e.options,{getIgnored(x){return _e(x)},getChildren(x){return x[R]},getDisabled(x){return x[n]},getKey(x){var B;return(B=x[g])!==null&&B!==void 0?B:x.name}})}),d=y(()=>new Set(u.value.treeNodes.map(g=>g.key))),{watchProps:s}=e,w=O(null);s!=null&&s.includes("defaultValue")?He(()=>{w.value=e.defaultValue}):w.value=e.defaultValue;const E=te(e,"value"),_=de(E,w),b=O([]),N=()=>{b.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(_.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?He(N):N();const T=Vo(e,["expandedNames","expandedKeys"]),k=de(T,b),A=y(()=>u.value.treeNodes),z=y(()=>u.value.getPath(_.value).keyPath);X(ue,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:_,mergedExpandedKeysRef:k,activePathRef:z,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:W,toggleExpand:M});function W(g,R){const{"onUpdate:value":n,onUpdateValue:x,onSelect:B}=e;x&&L(x,g,R),n&&L(n,g,R),B&&L(B,g,R),w.value=g}function D(g){const{"onUpdate:expandedKeys":R,onUpdateExpandedKeys:n,onExpandedNamesChange:x,onOpenNamesChange:B}=e;R&&L(R,g),n&&L(n,g),x&&L(x,g),B&&L(B,g),b.value=g}function M(g){const R=Array.from(k.value),n=R.findIndex(x=>x===g);if(~n)R.splice(n,1);else{if(e.accordion&&d.value.has(g)){const x=R.findIndex(B=>d.value.has(B));x>-1&&R.splice(x,1)}R.push(g)}D(R)}const S=g=>{const R=u.value.getPath(g??_.value,{includeSelf:!1}).keyPath;if(!R.length)return;const n=Array.from(k.value),x=new Set([...n,...R]);e.accordion&&d.value.forEach(B=>{x.has(B)&&!R.includes(B)&&x.delete(B)}),D(Array.from(x))},c=y(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:R},self:n}=r.value,{borderRadius:x,borderColorHorizontal:B,fontSize:we,itemHeight:ze,dividerColor:Ie}=n,l={"--n-divider-color":Ie,"--n-bezier":R,"--n-font-size":we,"--n-border-color-horizontal":B,"--n-border-radius":x,"--n-item-height":ze};return g?(l["--n-group-text-color"]=n.groupTextColorInverted,l["--n-color"]=n.colorInverted,l["--n-item-text-color"]=n.itemTextColorInverted,l["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,l["--n-item-text-color-active"]=n.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=n.itemIconColorInverted,l["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=n.arrowColorInverted,l["--n-arrow-color-hover"]=n.arrowColorHoverInverted,l["--n-arrow-color-active"]=n.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=n.itemColorHoverInverted,l["--n-item-color-active"]=n.itemColorActiveInverted,l["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=n.groupTextColor,l["--n-color"]=n.color,l["--n-item-text-color"]=n.itemTextColor,l["--n-item-text-color-hover"]=n.itemTextColorHover,l["--n-item-text-color-active"]=n.itemTextColorActive,l["--n-item-text-color-child-active"]=n.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,l["--n-item-icon-color"]=n.itemIconColor,l["--n-item-icon-color-hover"]=n.itemIconColorHover,l["--n-item-icon-color-active"]=n.itemIconColorActive,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=n.arrowColor,l["--n-arrow-color-hover"]=n.arrowColorHover,l["--n-arrow-color-active"]=n.arrowColorActive,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,l["--n-arrow-color-child-active"]=n.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,l["--n-item-color-hover"]=n.itemColorHover,l["--n-item-color-active"]=n.itemColorActive,l["--n-item-color-active-hover"]=n.itemColorActiveHover,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),l}),f=o?re("menu",y(()=>e.inverted?"a":"b"),c,e):void 0,$=_o(),C=O(null),F=O(null);let H=!0;const U=()=>{var g;H?H=!1:(g=C.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!0})};function j(){return document.getElementById($)}const ee=O(-1);function fe(g){ee.value=e.options.length-g}function ge(g){g||(ee.value=-1)}const be=y(()=>{const g=ee.value;return{children:g===-1?[]:e.options.slice(g)}}),ye=y(()=>{const{childrenField:g,disabledField:R,keyField:n}=e;return ke([be.value],{getIgnored(x){return _e(x)},getChildren(x){return x[g]},getDisabled(x){return x[R]},getKey(x){var B;return(B=x[n])!==null&&B!==void 0?B:x.name}})}),Ce=y(()=>ke([{}]).treeNodes[0]);function xe(){var g;if(ee.value===-1)return m(Te,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ce.value,domId:$,isEllipsisPlaceholder:!0});const R=ye.value.treeNodes[0],n=z.value,x=!!(!((g=R.children)===null||g===void 0)&&g.some(B=>n.includes(B.key)));return m(Te,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:x,tmNode:R,domId:$,rawNodes:R.rawNode.children||[],tmNodes:R.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:T,uncontrolledExpanededKeys:b,mergedExpandedKeys:k,uncontrolledValue:w,mergedValue:_,activePath:z,tmNodes:A,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:c,themeClass:f==null?void 0:f.themeClass,overflowRef:C,counterRef:F,updateCounter:()=>{},onResize:U,onUpdateOverflow:ge,onUpdateCount:fe,renderCounter:xe,getCounter:j,onRender:f==null?void 0:f.onRender,showOption:S,deriveResponsiveState:U}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r==null||r();const a=()=>this.tmNodes.map(s=>je(s,this.$props)),u=t==="horizontal"&&this.responsive,d=()=>m("div",Ze(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?m(Ko,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return u?m(Po,{onResize:this.onResize},{default:d}):d()}}),{hasPermission:Lt}=oo(),P=e=>({label:()=>m(To,{to:{name:e.route,params:e.params||{}},exact:!0},{default:()=>e.label}),key:e.key,icon:e.iconName?q(e.iconName):void 0,children:e.children,type:e.children??"item",show:Lt(e.permissions||[])||e.key==="Dashboard"||e.key==="Profile"}),jt={class:"absolute bottom-0 start-0 end-0 border-t border-gray-300 backdrop-blur-sm z-10 border-solid"},Jt=V({__name:"AdminLayout",setup(e){const t=No(),o=$o(),{screenSize:r}=Fo(),a=Mo(),{hasPermission:i}=oo(),u=O(!0),d=O(!1),s=O(!1),w=O(!1),E=O(t.name),_=O([P({label:"Inicio",key:"Dashboard",route:"Dashboard",iconName:"home",permissions:[]}),{label:"Gestión Académica",key:"academic-management",icon:q("book"),show:i(["student.create","student.edit","student.delete","teacher.create","teacher.edit","teacher.delete","period.create","period.edit","period.delete","curriculum.create","curriculum.edit","curriculum.delete","area.create","area.edit","area.delete","module.create","module.edit","module.delete","course.create","course.edit","course.delete"]),children:[{type:"group",label:"Estudiantes y Docentes",show:i(["student.create","student.edit","student.delete","student.create-account","teacher.create","teacher.edit","teacher.delete","teacher.create-account"]),key:"people",children:[P({label:"Estudiantes",key:"Student",route:"Student",iconName:"personalcard",permissions:["student.create","student.edit","student.delete","student.create-account"]}),P({label:"Docentes",key:"Teacher",route:"Teacher",iconName:"teacher",permissions:["teacher.create","teacher.edit","teacher.delete","teacher.create-account"]})]},{type:"group",label:"Planificación Académica",key:"academic-planning",show:i(["period.create","period.edit","period.delete","curriculum.create","curriculum.edit","curriculum.delete","area.create","area.edit","area.delete","module.create","module.edit","module.delete","course.create","course.edit","course.delete"]),children:[P({permissions:["period.create","period.edit","period.delete"],label:"Periodos Académicos",key:"Period",route:"Period",iconName:"calendar-2"}),P({permissions:["curriculum.create","curriculum.edit","curriculum.delete"],label:"Planes de Estudio",key:"Curriculum",route:"Curriculum",iconName:"book-1"}),P({label:"Áreas",key:"Area",route:"Area",iconName:"book-square",permissions:["area.create","area.edit","area.delete"]}),P({label:"Módulos",key:"Module",route:"Module",iconName:"bookmark",permissions:["module.create","module.edit","module.delete"]}),P({label:"Cursos",key:"Course",route:"Course",iconName:"book-saved",permissions:["course.create","course.edit","course.delete"]})]}]},{label:"Carga Académica",key:"academic-workload",icon:q("folder-open"),show:i(["group.create","group.edit","group.delete","group-manager.edit","group-manager.send-email"]),children:[P({permissions:["group.create","group.edit","group.delete"],label:"Apertura de Grupos",key:"Group",route:"Group",iconName:"calendar-add"}),P({permissions:["group-manager.edit","group-manager.send-email"],label:"Gestión de Grupos",key:"GroupManager",route:"GroupManager",iconName:"data"})]},P({label:"Supervisión Académica",key:"academic-supervision",route:"AcademicSupervision",iconName:"speedometer",permissions:["academic-supervision.create","academic-supervision.edit","academic-supervision.delete"]}),{label:"Notas",key:"grades",icon:q("archive-book"),show:i(["academic-record.view","academic-record.print","grade-deadline.create","grade-deadline.extencion"]),children:[P({label:"Ingreso de Notas",key:"Grade",route:"Grade",iconName:"archive-book",permissions:["enrollment-grade.view","enrollment-grade.create"]}),P({label:"Acta de Notas",key:"AcademicRecord",route:"AcademicRecord",iconName:"archive-book",permissions:["academic-record.view","academic-record.print"]}),P({label:"Habilitaciones",key:"grade-deadline",route:"GradeDeadline",iconName:"calendar-2",permissions:["grade-deadline.create","grade-deadline.extencion"]})]},{label:"Administración",key:"administration",icon:q("cpu-setting"),show:i(["document-type.create","document-type.edit","document-type.delete","student-type.create","student-type.edit","student-type.delete","payment-type.create","payment-type.edit","payment-type.delete","laboratory.create","laboratory.edit","laboratory.delete"]),children:[{type:"group",label:"Configuraciones Generales",key:"general-settings",show:i(["document-type.create","document-type.edit","document-type.delete","student-type.create","student-type.edit","student-type.delete","payment-type.create","payment-type.edit","payment-type.delete"]),children:[P({label:"Tipos de Documento",key:"DocumentType",route:"DocumentType",iconName:"tag",permissions:["document-type.create","document-type.edit","document-type.delete"]}),P({label:"Tipos de Estudiante",key:"StudentType",route:"StudentType",iconName:"tag",permissions:["student-type.create","student-type.edit","student-type.delete"]}),P({label:"Métodos de Pago",key:"PaymentType",route:"PaymentType",iconName:"tag",permissions:["payment-type.create","payment-type.edit","payment-type.delete"]})]},{type:"group",label:"Infraestructura",key:"infrastructure",show:i(["laboratory.create","laboratory.edit","laboratory.delete"]),children:[P({label:"Laboratorios",key:"Laboratory",route:"Laboratory",iconName:"devices",permissions:["laboratory.create","laboratory.edit","laboratory.delete"]})]}]},{label:"Matrículas",key:"enrollments",icon:q("folder"),show:i(["enrollment.create","enrollment.create-special","enrollment.edit","enrollment.print-record","recognition.create","recognition.delete","enrollment-deadline.create","enrollment-deadline.extencion"]),children:[P({label:"Realizar Matrícula",key:"enrollment",route:"Enrollment",iconName:"folder-add",permissions:["enrollment.create","enrollment.create-special","enrollment.edit","enrollment.print-record"]}),P({label:"Matrículas",key:"virtual-enrollment",route:"EnrollmentVirtual",iconName:"folder-cloud",permissions:["enrollment.edit"]}),P({label:"Convalidaciones",key:"Recognition",route:"Recognition",iconName:"convertshape-2",permissions:["recognition.create","recognition.delete"]}),P({label:"Habilitaciones",key:"EnrollmentDeadline",route:"EnrollmentDeadline",iconName:"calendar-2",permissions:["enrollment-deadline.create","enrollment-deadline.extencion"]})]},{label:"Costos",key:"financial",icon:q("money"),show:i(["module-price.create","module-price.edit","module-price.delete","course-price.create","course-price.edit","course-price.delete"]),children:[P({label:"Matrícula (Módulos)",key:"ModulePrice",route:"ModulePrice",iconName:"moneys",permissions:["module-price.create","module-price.edit","module-price.delete"]}),P({label:"Mensualidad (Cursos)",key:"CoursePrice",route:"CoursePrice",iconName:"moneys",permissions:["course-price.create","course-price.edit","course-price.delete"]})]},{label:"Reportes",key:"reports",icon:q("archive"),show:i(["report.student","report.group"]),children:[P({label:"Reporte de Estudiantes",key:"StudentReportView",route:"StudentReportView",iconName:"document-filter",permissions:["report.student"]}),P({label:"Reporte de Grupos",key:"GroupReportView",route:"GroupReportView",iconName:"document-filter",permissions:["report.group"]})]},{label:"Seguridad",key:"security",icon:q("shield"),show:i(["user-admin.create","user-admin.edit","user-admin.delete","role-admin.create","role-admin.edit","role-admin.delete","role-admin.assign-permissions","user-teacher.create","user-teacher.edit","user-teacher.delete","user-student.create","user-student.edit","user-student.delete"]),children:[{type:"group",label:"Administradores",key:"security-admins",show:i(["user-admin.create","user-admin.edit","user-admin.delete","role-admin.create","role-admin.edit","role-admin.delete","role-admin.assign-permissions"]),children:[P({label:"Usuarios Administradores",key:"UserAdmin",route:"UserAdmin",iconName:"security-user",permissions:["user-admin.create","user-admin.edit","user-admin.delete"]}),P({label:"Roles Administradores",key:"RoleAdmin",route:"RoleAdmin",iconName:"key-square",permissions:["role-admin.create","role-admin.edit","role-admin.delete","role-admin.assign-permissions"]})]},{type:"group",label:"Docentes",key:"security-teachers",show:i(["user-teacher.create","user-teacher.edit","user-teacher.delete"]),children:[P({label:"Usuarios Docentes",key:"UserTeacher",route:"UserTeacher",iconName:"security-user",permissions:["user-teacher.create","user-teacher.edit","user-teacher.delete"]})]},{type:"group",label:"Estudiantes",key:"security-students",show:i(["user-student.create","user-student.edit","user-student.delete"]),children:[P({label:"Usuarios Estudiantes",key:"UserStudent",route:"UserStudent",iconName:"security-user",permissions:["user-student.create","user-student.edit","user-student.delete"]})]}]}]),b=[P({label:"Perfil",key:"Profile",route:"Profile",iconName:"user"}),{label:"Salir",key:"sign-out",icon:q("logout","red"),props:{class:"text-red-500",onClick:()=>{T()}}}],N=[{label:()=>{var A,z;return m("span",{class:"text-gray-500"},["Matriculas:  ",m("strong",{class:(A=a.enrollment)!=null&&A.period?"text-blue-500":"text-red-500"},((z=a.enrollment)==null?void 0:z.period)??"No definido")])},key:"groups",icon:q("people")}],T=async()=>{w.value=!0,await Bo()&&o.push({name:"Login"}),w.value=!1};return(async()=>{await a.getEnrollment()})(),(A,z)=>{const W=Mt,D=Ht,M=ct,S=Ve("LnxIcon"),c=Eo,f=to,$=It,C=Ve("router-view"),F=bt,H=gt,U=xt;return le(),ie(H,{position:"absolute",style:{"min-height":"100dvh",position:"relative",overflow:"hidden"}},{default:G(()=>[K(H,{"has-sider":"",position:"absolute",style:{top:"0px",bottom:"32.85px"}},{default:G(()=>[ae(r)!=="sm"?(le(),ie(D,{key:0,bordered:"",style:{height:"100%","background-color":"#f0f2f5"},"collapse-mode":"width",collapsed:d.value,"onUpdate:collapsed":z[0]||(z[0]=j=>d.value=j),width:280,"native-scrollbar":!1,inverted:s.value,position:ae(r)==="sm"?"absolute":"static","collapsed-width":ae(r)==="sm"?0:64},{default:G(()=>[K(W,{inverted:s.value,"collapsed-width":64,"collapsed-icon-size":22,options:_.value,"default-value":E.value,class:"mb-26"},null,8,["inverted","options","default-value"]),We("div",jt,[K(W,{inverted:s.value,"collapsed-width":64,"collapsed-icon-size":22,options:N},null,8,["inverted"])])]),_:1},8,["collapsed","inverted","position","collapsed-width"])):Ke("",!0),ae(r)==="sm"?(le(),ie(M,{key:1,show:u.value,"onUpdate:show":z[2]||(z[2]=j=>u.value=j),width:280,position:"absolute",style:{top:"0px",bottom:"0px"},placement:"left"},{default:G(()=>[K(W,{inverted:s.value,"collapsed-width":64,"collapsed-icon-size":22,options:_.value,modelValue:E.value,"onUpdate:modelValue":z[1]||(z[1]=j=>E.value=j)},null,8,["inverted","options","modelValue"])]),_:1},8,["show"])):Ke("",!0),K(H,null,{default:G(()=>[K($,{bordered:"",style:{height:"48px",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 8px"}},{default:G(()=>[ae(r)==="sm"?(le(),ie(c,{key:0,onClick:z[3]||(z[3]=j=>u.value=!u.value)},{default:G(()=>[K(S,{icon:"",size:"24","icon-name":"grid-4"})]),_:1})):(le(),ie(c,{key:1,quaternary:"",onClick:z[4]||(z[4]=j=>d.value=!d.value)},{default:G(()=>[K(S,{size:"24","icon-name":d.value?"grid-9":"grid-4"},null,8,["icon-name"])]),_:1})),K(f,{trigger:"hover",options:b},{default:G(()=>[K(c,null,{default:G(()=>[K(S,{size:"24","icon-name":"profile"})]),_:1})]),_:1})]),_:1}),K(F,null,{default:G(()=>[K(C)]),_:1})]),_:1})]),_:1}),K(U,{bordered:"",position:"absolute",class:"px-3 py-2 text-end text-xs"},{default:G(()=>[We("span",null," © "+Oo(new Date().getFullYear())+" Instituto de Informática - UNAP. v1.1 ",1)]),_:1})]),_:1})}}});export{Jt as default};
