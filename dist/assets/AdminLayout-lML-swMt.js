import{r as Y}from"./icon.utils-CEl5GGKX.js";import{d as U,h as v,c as Ne,s as qe,a as $e,w as Ae,F as uo,T as Xe,m as Ze,S as Be,v as De,r as M,i as Z,b as Je,e as C,u as Q,f as vo,g as He,j as mo,o as ho,k as fo,l as go,p as q,n as bo,q as po,t as yo,x as h,y as me,z as m,A as I,B as f,C as Co,D as xo,L as zo,E as wo,G as W,H as te,I as se,J as Io,K as re,M as So,N as j,O as Ue,P as Se,Q as de,R as Qe,U as eo,V as ne,W as Ro,X as oe,Y as Ee,Z as Pe,_ as ko,$ as Re,a0 as Ao,a1 as Ho,a2 as Po,a3 as _o,a4 as To,a5 as No,a6 as $o,a7 as Ve,a8 as ie,a9 as le,aa as K,ab as V,ac as Ke,ad as ae,ae as We,af as Bo,ag as Eo}from"./index-_mj8JziO.js";import{u as Oo}from"./useBreakpoints-BKQhGIr0.js";import{u as Fo}from"./period.stores-BcIbeUNg.js";import{d as Mo,C as Lo,_ as oo}from"./Dropdown-DRixFdwA.js";import{u as ce}from"./use-merged-state-CgbaMofk.js";import{t as jo,N as Do}from"./Tooltip-TvvvwlfV.js";import{c as ke,u as Uo,V as Vo}from"./Popover-BLfkiz4u.js";import"./DataTable.types-BEg5m_To.js";import"./get-CAv4nNBB.js";const Ko=U({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Wo(e){const{modalColor:t,textColor1:o,textColor2:r,boxShadow3:a,lineHeight:i,fontWeightStrong:d,dividerColor:c,closeColorHover:s,closeColorPressed:x,closeIconColor:O,closeIconColorHover:P,closeIconColorPressed:p,borderRadius:N,primaryColorHover:T}=e;return{bodyPadding:"16px 24px",borderRadius:N,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:r,titleTextColor:o,titleFontSize:"18px",titleFontWeight:d,boxShadow:a,lineHeight:i,headerBorderBottom:`1px solid ${c}`,footerBorderTop:`1px solid ${c}`,closeIconColor:O,closeIconColorHover:P,closeIconColorPressed:p,closeSize:"22px",closeIconSize:"18px",closeColorHover:s,closeColorPressed:x,closeBorderRadius:N,resizableTriggerColorHover:T}}const Go=Ne({name:"Drawer",common:$e,peers:{Scrollbar:qe},self:Wo}),Yo=U({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=M(!!e.show),o=M(null),r=Z(Je);let a=0,i="",d=null;const c=M(!1),s=M(!1),x=C(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:O,mergedRtlRef:P}=Q(e),p=vo("Drawer",P,O),N=u,T=z=>{s.value=!0,a=x.value?z.clientY:z.clientX,i=document.body.style.cursor,document.body.style.cursor=x.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",R),document.body.addEventListener("mouseleave",N),document.body.addEventListener("mouseup",u)},S=()=>{d!==null&&(window.clearTimeout(d),d=null),s.value?c.value=!0:d=window.setTimeout(()=>{c.value=!0},300)},y=()=>{d!==null&&(window.clearTimeout(d),d=null),c.value=!1},{doUpdateHeight:_,doUpdateWidth:G}=r,D=z=>{const{maxWidth:E}=e;if(E&&z>E)return E;const{minWidth:A}=e;return A&&z<A?A:z},L=z=>{const{maxHeight:E}=e;if(E&&z>E)return E;const{minHeight:A}=e;return A&&z<A?A:z};function R(z){var E,A;if(s.value)if(x.value){let F=((E=o.value)===null||E===void 0?void 0:E.offsetHeight)||0;const X=a-z.clientY;F+=e.placement==="bottom"?X:-X,F=L(F),_(F),a=z.clientY}else{let F=((A=o.value)===null||A===void 0?void 0:A.offsetWidth)||0;const X=a-z.clientX;F+=e.placement==="right"?X:-X,F=D(F),G(F),a=z.clientX}}function u(){s.value&&(a=0,s.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",R),document.body.removeEventListener("mouseup",u),document.body.removeEventListener("mouseleave",N))}He(()=>{e.show&&(t.value=!0)}),mo(()=>e.show,z=>{z||u()}),ho(()=>{u()});const g=C(()=>{const{show:z}=e,E=[[De,z]];return e.showMask||E.push([fo,e.onClickoutside,void 0,{capture:!0}]),E});function $(){var z;t.value=!1,(z=e.onAfterLeave)===null||z===void 0||z.call(e)}return go(C(()=>e.blockScroll&&t.value)),q(bo,o),q(po,null),q(yo,null),{bodyRef:o,rtlEnabled:p,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:C(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:$,bodyDirectives:g,handleMousedownResizeTrigger:T,handleMouseenterResizeTrigger:S,handleMouseleaveResizeTrigger:y,isDragging:s,isHoverOnResizeTrigger:c}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Ae(v("div",{role:"none"},v(uo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>v(Xe,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ae(v("div",Ze(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?v("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?v("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):v(Be,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[De,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:qo,cubicBezierEaseOut:Xo}=me;function Zo({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${qo}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Xo}`}),h(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Jo,cubicBezierEaseOut:Qo}=me;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Jo}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Qo}`}),h(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ot,cubicBezierEaseOut:tt}=me;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ot}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),h(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:nt,cubicBezierEaseOut:it}=me;function lt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[h(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${nt}`}),h(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${it}`}),h(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),h(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const at=h([m("drawer",`
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
 `,[rt(),et(),lt(),Zo(),I("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),I("native-scrollbar",[m("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),f("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[I("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),m("drawer-content-wrapper",`
 box-sizing: border-box;
 `),m("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[I("native-scrollbar",[m("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),m("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),m("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),m("drawer-header",`
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
 `,[f("main",`
 flex: 1;
 `),f("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),m("drawer-footer",`
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
 `,[f("resize-trigger",`
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
 `,[f("resize-trigger",`
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
 `,[f("resize-trigger",`
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
 `,[f("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),h("body",[h(">",[m("drawer-container",`
 position: fixed;
 `)])]),m("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[h("> *",`
 pointer-events: all;
 `)]),m("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Co({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),st=Object.assign(Object.assign({},W.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),ct=U({name:"Drawer",inheritAttrs:!1,props:st,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=Q(e),a=wo(),i=W("Drawer","-drawer",at,Go,e,t),d=M(e.defaultWidth),c=M(e.defaultHeight),s=ce(te(e,"width"),d),x=ce(te(e,"height"),c),O=C(()=>{const{placement:u}=e;return u==="top"||u==="bottom"?"":se(s.value)}),P=C(()=>{const{placement:u}=e;return u==="left"||u==="right"?"":se(x.value)}),p=u=>{const{onUpdateWidth:g,"onUpdate:width":$}=e;g&&j(g,u),$&&j($,u),d.value=u},N=u=>{const{onUpdateHeight:g,"onUpdate:width":$}=e;g&&j(g,u),$&&j($,u),c.value=u},T=C(()=>[{width:O.value,height:P.value},e.drawerStyle||""]);function S(u){const{onMaskClick:g,maskClosable:$}=e;$&&D(!1),g&&g(u)}function y(u){S(u)}const _=Io();function G(u){var g;(g=e.onEsc)===null||g===void 0||g.call(e),e.show&&e.closeOnEsc&&So(u)&&(_.value||D(!1))}function D(u){const{onHide:g,onUpdateShow:$,"onUpdate:show":z}=e;$&&j($,u),z&&j(z,u),g&&!u&&j(g,u)}q(Je,{isMountedRef:a,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:D,doUpdateHeight:N,doUpdateWidth:p});const L=C(()=>{const{common:{cubicBezierEaseInOut:u,cubicBezierEaseIn:g,cubicBezierEaseOut:$},self:{color:z,textColor:E,boxShadow:A,lineHeight:F,headerPadding:X,footerPadding:ee,borderRadius:ge,bodyPadding:be,titleFontSize:pe,titleTextColor:ye,titleFontWeight:Ce,headerBorderBottom:xe,footerBorderTop:b,closeIconColor:k,closeIconColorHover:n,closeIconColorPressed:w,closeColorHover:B,closeColorPressed:ze,closeIconSize:we,closeSize:Ie,closeBorderRadius:l,resizableTriggerColorHover:co}}=i.value;return{"--n-line-height":F,"--n-color":z,"--n-border-radius":ge,"--n-text-color":E,"--n-box-shadow":A,"--n-bezier":u,"--n-bezier-out":$,"--n-bezier-in":g,"--n-header-padding":X,"--n-body-padding":be,"--n-footer-padding":ee,"--n-title-text-color":ye,"--n-title-font-size":pe,"--n-title-font-weight":Ce,"--n-header-border-bottom":xe,"--n-footer-border-top":b,"--n-close-icon-color":k,"--n-close-icon-color-hover":n,"--n-close-icon-color-pressed":w,"--n-close-size":Ie,"--n-close-color-hover":B,"--n-close-color-pressed":ze,"--n-close-icon-size":we,"--n-close-border-radius":l,"--n-resize-trigger-color-hover":co}}),R=r?re("drawer",void 0,L,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:T,handleOutsideClick:y,handleMaskClick:S,handleEsc:G,mergedTheme:i,cssVars:r?void 0:L,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,isMounted:a}},render(){const{mergedClsPrefix:e}=this;return v(zo,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Ae(v("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?v(Xe,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?v("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,v(Yo,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[xo,{zIndex:this.zIndex,enabled:this.show}]])}})}});function dt(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:i,actionColor:d,scrollbarColor:c,scrollbarColorHover:s,invertedColor:x}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:d,headerColor:a,headerColorInverted:x,footerColor:d,footerColorInverted:x,headerBorderColor:i,headerBorderColorInverted:x,footerBorderColor:i,footerBorderColorInverted:x,siderBorderColor:i,siderBorderColorInverted:x,siderColor:a,siderColorInverted:x,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ue(r,c),siderToggleBarColorHover:Ue(r,s),__invertScrollbar:"true"}}const he=Ne({name:"Layout",common:$e,peers:{Scrollbar:qe},self:dt});function ut(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function vt(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:a,textColor1:i,fontSize:d,dividerColor:c,hoverColor:s,primaryColorHover:x}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:Se(r,{alpha:.1}),itemColorActiveHover:Se(r,{alpha:.1}),itemColorActiveCollapsed:Se(r,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:x,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:x,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:c},ut("#BBB",r,"#FFF","#AAA"))}const mt=Ne({name:"Menu",common:$e,peers:{Tooltip:jo,Dropdown:Mo},self:vt}),to=de("n-layout-sider"),fe={type:String,default:"static"},ht=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ft={embedded:Boolean,position:fe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ro=de("n-layout");function no(e){return U({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),ft),setup(t){const o=M(null),r=M(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=Q(t),d=W("Layout","-layout",ht,he,t,a);function c(S,y){if(t.nativeScrollbar){const{value:_}=o;_&&(y===void 0?_.scrollTo(S):_.scrollTo(S,y))}else{const{value:_}=r;_&&_.scrollTo(S,y)}}q(ro,t);let s=0,x=0;const O=S=>{var y;const _=S.target;s=_.scrollLeft,x=_.scrollTop,(y=t.onScroll)===null||y===void 0||y.call(t,S)};Qe(()=>{if(t.nativeScrollbar){const S=o.value;S&&(S.scrollTop=x,S.scrollLeft=s)}});const P={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:c},N=C(()=>{const{common:{cubicBezierEaseInOut:S},self:y}=d.value;return{"--n-bezier":S,"--n-color":t.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),T=i?re("layout",C(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:P,mergedTheme:d,handleNativeElScroll:O,cssVars:i?void 0:N,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},p)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:i,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):v(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const gt=no(!1),bt=no(!0),pt=m("layout-footer",`
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
 `)]),yt=Object.assign(Object.assign({},W.props),{inverted:Boolean,position:fe,bordered:Boolean}),Ct=U({name:"LayoutFooter",props:yt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Layout","-layout-footer",pt,he,e,t),a=C(()=>{const{common:{cubicBezierEaseInOut:d},self:c}=r.value,s={"--n-bezier":d};return e.inverted?(s["--n-color"]=c.footerColorInverted,s["--n-text-color"]=c.textColorInverted,s["--n-border-color"]=c.footerBorderColorInverted):(s["--n-color"]=c.footerColor,s["--n-text-color"]=c.textColor,s["--n-border-color"]=c.footerBorderColor),s}),i=o?re("layout-footer",C(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),xt=m("layout-header",`
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
 `)]),zt={position:fe,inverted:Boolean,bordered:{type:Boolean,default:!1}},wt=U({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),zt),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Layout","-layout-header",xt,he,e,t),a=C(()=>{const{common:{cubicBezierEaseInOut:d},self:c}=r.value,s={"--n-bezier":d};return e.inverted?(s["--n-color"]=c.headerColorInverted,s["--n-text-color"]=c.textColorInverted,s["--n-border-color"]=c.headerBorderColorInverted):(s["--n-color"]=c.headerColor,s["--n-text-color"]=c.textColor,s["--n-border-color"]=c.headerBorderColor),s}),i=o?re("layout-header",C(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),It=m("layout-sider",`
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
`,[I("bordered",[f("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),f("left-placement",[I("bordered",[f("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[f("border",`
 left: 0;
 `)]),I("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[h("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[h("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[m("layout-toggle-bar",[h("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[f("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),f("bottom",`
 position: absolute;
 top: 34px;
 `),h("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[m("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),St=U({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Rt=U({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(eo,{clsPrefix:e},{default:()=>v(Lo,null)}))}}),kt={position:fe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},At=U({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),kt),setup(e){const t=Z(ro),o=M(null),r=M(null),a=M(e.defaultCollapsed),i=ce(te(e,"collapsed"),a),d=C(()=>se(i.value?e.collapsedWidth:e.width)),c=C(()=>e.collapseMode!=="transform"?{}:{minWidth:se(e.width)}),s=C(()=>t?t.siderPlacement:"left");function x(R,u){if(e.nativeScrollbar){const{value:g}=o;g&&(u===void 0?g.scrollTo(R):g.scrollTo(R,u))}else{const{value:g}=r;g&&g.scrollTo(R,u)}}function O(){const{"onUpdate:collapsed":R,onUpdateCollapsed:u,onExpand:g,onCollapse:$}=e,{value:z}=i;u&&j(u,!z),R&&j(R,!z),a.value=!z,z?g&&j(g):$&&j($)}let P=0,p=0;const N=R=>{var u;const g=R.target;P=g.scrollLeft,p=g.scrollTop,(u=e.onScroll)===null||u===void 0||u.call(e,R)};Qe(()=>{if(e.nativeScrollbar){const R=o.value;R&&(R.scrollTop=p,R.scrollLeft=P)}}),q(to,{collapsedRef:i,collapseModeRef:te(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:S}=Q(e),y=W("Layout","-layout-sider",It,he,e,T);function _(R){var u,g;R.propertyName==="max-width"&&(i.value?(u=e.onAfterLeave)===null||u===void 0||u.call(e):(g=e.onAfterEnter)===null||g===void 0||g.call(e))}const G={scrollTo:x},D=C(()=>{const{common:{cubicBezierEaseInOut:R},self:u}=y.value,{siderToggleButtonColor:g,siderToggleButtonBorder:$,siderToggleBarColor:z,siderToggleBarColorHover:E}=u,A={"--n-bezier":R,"--n-toggle-button-color":g,"--n-toggle-button-border":$,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":E};return e.inverted?(A["--n-color"]=u.siderColorInverted,A["--n-text-color"]=u.textColorInverted,A["--n-border-color"]=u.siderBorderColorInverted,A["--n-toggle-button-icon-color"]=u.siderToggleButtonIconColorInverted,A.__invertScrollbar=u.__invertScrollbar):(A["--n-color"]=u.siderColor,A["--n-text-color"]=u.textColor,A["--n-border-color"]=u.siderBorderColor,A["--n-toggle-button-icon-color"]=u.siderToggleButtonIconColor),A}),L=S?re("layout-sider",C(()=>e.inverted?"a":"b"),D,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:T,mergedTheme:y,styleMaxWidth:d,mergedCollapsed:i,scrollContainerStyle:c,siderPlacement:s,handleNativeElScroll:N,handleTransitionend:_,handleTriggerClick:O,inlineThemeDisabled:S,cssVars:D,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},G)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:se(this.width)}]},this.nativeScrollbar?v("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?v(St,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(Rt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),ue=de("n-menu"),Oe=de("n-submenu"),Fe=de("n-menu-item-group"),Ge=[h("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[h("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ye=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ht=h([m("menu",`
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
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[h("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[I("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[ne("selected, child-active",[h("&:focus-within",Ye)]),I("selected",[J(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[J(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",Ye)]),m("menu-item-content-header",[h("a","color: var(--n-item-text-color-horizontal);")])])]),ne("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[m("menu-item-content",[I("selected",[h("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `),I("collapsed",[f("arrow","transform: rotate(0);")]),I("selected",[h("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[h("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[h("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[ne("selected, child-active",[h("&:focus-within",Ge)]),I("selected",[J(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[h("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[J(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[h("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[J(null,[h("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,Ge)]),f("icon",`
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
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
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
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ro({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[h("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,t){return[I("hover",e,t),h("&:hover",e,t)]}const io=U({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Z(ue);return{menuProps:t,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:i}}=this,d=o?o(t.rawNode):oe(this.icon);return v("div",{onClick:c=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):oe(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):oe(this.extra)):null),this.showArrow?v(eo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):v(Ko,null)}):null)}}),ve=8;function Me(e){const t=Z(ue),{props:o,mergedCollapsedRef:r}=t,a=Z(Oe,null),i=Z(Fe,null),d=C(()=>o.mode==="horizontal"),c=C(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),x=C(()=>{var p;return!d.value&&e.root&&r.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),O=C(()=>{if(d.value)return;const{collapsedWidth:p,indent:N,rootIndent:T}=o,{root:S,isGroup:y}=e,_=T===void 0?N:T;return S?r.value?p/2-s.value/2:_:i&&typeof i.paddingLeftRef.value=="number"?N/2+i.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(y?N/2:N)+a.paddingLeftRef.value:0}),P=C(()=>{const{collapsedWidth:p,indent:N,rootIndent:T}=o,{value:S}=s,{root:y}=e;return d.value||!y||!r.value?ve:(T===void 0?N:T)+S+ve-(p+S)/2});return{dropdownPlacement:c,activeIconSize:x,maxIconSize:s,paddingLeft:O,iconMarginRight:P,NMenu:t,NSubmenu:a}}const Le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Pt=U({name:"MenuDivider",setup(){const e=Z(ue),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${t.value}-menu-divider`})}}),lo=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),_t=Ee(lo),Tt=U({name:"MenuOption",props:lo,setup(e){const t=Me(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:d}=r,c=o?o.mergedDisabledRef:{value:!1},s=C(()=>c.value||e.disabled);function x(P){const{onClick:p}=e;p&&p(P)}function O(P){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),x(P))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:Pe(()=>e.root&&d.value&&a.mode!=="horizontal"&&!s.value),selected:Pe(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:O}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,i=a==null?void 0:a(o.rawNode);return v("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),v(Do,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):oe(this.title),trigger:()=>v(io,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ao=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Nt=Ee(ao),$t=U({name:"MenuOptionGroup",props:ao,setup(e){q(Oe,null);const t=Me(e);q(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Z(ue);return function(){const{value:a}=o,i=t.paddingLeft.value,{nodeProps:d}=r,c=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},c,{class:[`${a}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),oe(e.title),e.extra?v(ko,null," ",oe(e.extra)):null),v("div",null,e.tmNodes.map(s=>je(s,r))))}}});function _e(e){return e.type==="divider"||e.type==="render"}function Bt(e){return e.type==="divider"}function je(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(_e(o))return Bt(o)?v(Pt,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:i,level:d,isGroup:c}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:d,root:d===0,isGroup:c});return e.children?e.isGroup?v($t,Re(s,Nt,{tmNode:e,tmNodes:e.children,key:i})):v(Te,Re(s,Et,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):v(Tt,Re(s,_t,{key:i,tmNode:e}))}const so=Object.assign(Object.assign({},Le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Et=Ee(so),Te=U({name:"Submenu",props:so,setup(e){const t=Me(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:i,mergedThemeRef:d}=o,c=C(()=>{const{disabled:p}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:p}),s=M(!1);q(Oe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:c}),q(Fe,null);function x(){const{onClick:p}=e;p&&p()}function O(){c.value||(i.value||o.toggleExpand(e.internalKey),x())}function P(p){s.value=p}return{menuProps:a,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:c,mergedValue:o.mergedValueRef,childActive:Pe(()=>{var p;return(p=e.virtualChildActive)!==null&&p!==void 0?p:o.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>a.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!c.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:P,handleClick:O}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:d,paddingLeft:c,collapsed:s,mergedDisabled:x,maxIconSize:O,activeIconSize:P,title:p,childActive:N,icon:T,handleClick:S,menuProps:{nodeProps:y},dropdownShow:_,iconMarginRight:G,tmNode:D,mergedClsPrefix:L,isEllipsisPlaceholder:R,extra:u}=this,g=y==null?void 0:y(D.rawNode);return v("div",Object.assign({},g,{class:[`${L}-menu-item`,g==null?void 0:g.class],role:"menuitem"}),v(io,{tmNode:D,paddingLeft:c,collapsed:s,disabled:x,iconMarginRight:G,maxIconSize:O,activeIconSize:P,title:p,extra:u,showArrow:!d,childActive:N,clsPrefix:L,icon:T,hover:_,onClick:S,isEllipsisPlaceholder:R}))},i=()=>v(Ao,null,{default:()=>{const{tmNodes:d,collapsed:c}=this;return c?null:v("div",{class:`${t}-submenu-children`,role:"menu"},d.map(s=>je(s,this.menuProps)))}});return this.root?v(oo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:i())}):v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),i())}}),Ot=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ft=U({name:"Menu",inheritAttrs:!1,props:Ot,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Menu","-menu",Ht,mt,e,t),a=Z(to,null),i=C(()=>{var b;const{collapsed:k}=e;if(k!==void 0)return k;if(a){const{collapseModeRef:n,collapsedRef:w}=a;if(n.value==="width")return(b=w.value)!==null&&b!==void 0?b:!1}return!1}),d=C(()=>{const{keyField:b,childrenField:k,disabledField:n}=e;return ke(e.items||e.options,{getIgnored(w){return _e(w)},getChildren(w){return w[k]},getDisabled(w){return w[n]},getKey(w){var B;return(B=w[b])!==null&&B!==void 0?B:w.name}})}),c=C(()=>new Set(d.value.treeNodes.map(b=>b.key))),{watchProps:s}=e,x=M(null);s!=null&&s.includes("defaultValue")?He(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const O=te(e,"value"),P=ce(O,x),p=M([]),N=()=>{p.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(P.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?He(N):N();const T=Uo(e,["expandedNames","expandedKeys"]),S=ce(T,p),y=C(()=>d.value.treeNodes),_=C(()=>d.value.getPath(P.value).keyPath);q(ue,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:P,mergedExpandedKeysRef:S,activePathRef:_,mergedClsPrefixRef:t,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:G,toggleExpand:L});function G(b,k){const{"onUpdate:value":n,onUpdateValue:w,onSelect:B}=e;w&&j(w,b,k),n&&j(n,b,k),B&&j(B,b,k),x.value=b}function D(b){const{"onUpdate:expandedKeys":k,onUpdateExpandedKeys:n,onExpandedNamesChange:w,onOpenNamesChange:B}=e;k&&j(k,b),n&&j(n,b),w&&j(w,b),B&&j(B,b),p.value=b}function L(b){const k=Array.from(S.value),n=k.findIndex(w=>w===b);if(~n)k.splice(n,1);else{if(e.accordion&&c.value.has(b)){const w=k.findIndex(B=>c.value.has(B));w>-1&&k.splice(w,1)}k.push(b)}D(k)}const R=b=>{const k=d.value.getPath(b??P.value,{includeSelf:!1}).keyPath;if(!k.length)return;const n=Array.from(S.value),w=new Set([...n,...k]);e.accordion&&c.value.forEach(B=>{w.has(B)&&!k.includes(B)&&w.delete(B)}),D(Array.from(w))},u=C(()=>{const{inverted:b}=e,{common:{cubicBezierEaseInOut:k},self:n}=r.value,{borderRadius:w,borderColorHorizontal:B,fontSize:ze,itemHeight:we,dividerColor:Ie}=n,l={"--n-divider-color":Ie,"--n-bezier":k,"--n-font-size":ze,"--n-border-color-horizontal":B,"--n-border-radius":w,"--n-item-height":we};return b?(l["--n-group-text-color"]=n.groupTextColorInverted,l["--n-color"]=n.colorInverted,l["--n-item-text-color"]=n.itemTextColorInverted,l["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,l["--n-item-text-color-active"]=n.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=n.itemIconColorInverted,l["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=n.arrowColorInverted,l["--n-arrow-color-hover"]=n.arrowColorHoverInverted,l["--n-arrow-color-active"]=n.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=n.itemColorHoverInverted,l["--n-item-color-active"]=n.itemColorActiveInverted,l["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=n.groupTextColor,l["--n-color"]=n.color,l["--n-item-text-color"]=n.itemTextColor,l["--n-item-text-color-hover"]=n.itemTextColorHover,l["--n-item-text-color-active"]=n.itemTextColorActive,l["--n-item-text-color-child-active"]=n.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,l["--n-item-icon-color"]=n.itemIconColor,l["--n-item-icon-color-hover"]=n.itemIconColorHover,l["--n-item-icon-color-active"]=n.itemIconColorActive,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=n.arrowColor,l["--n-arrow-color-hover"]=n.arrowColorHover,l["--n-arrow-color-active"]=n.arrowColorActive,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,l["--n-arrow-color-child-active"]=n.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,l["--n-item-color-hover"]=n.itemColorHover,l["--n-item-color-active"]=n.itemColorActive,l["--n-item-color-active-hover"]=n.itemColorActiveHover,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),l}),g=o?re("menu",C(()=>e.inverted?"a":"b"),u,e):void 0,$=Po(),z=M(null),E=M(null);let A=!0;const F=()=>{var b;A?A=!1:(b=z.value)===null||b===void 0||b.sync({showAllItemsBeforeCalculate:!0})};function X(){return document.getElementById($)}const ee=M(-1);function ge(b){ee.value=e.options.length-b}function be(b){b||(ee.value=-1)}const pe=C(()=>{const b=ee.value;return{children:b===-1?[]:e.options.slice(b)}}),ye=C(()=>{const{childrenField:b,disabledField:k,keyField:n}=e;return ke([pe.value],{getIgnored(w){return _e(w)},getChildren(w){return w[b]},getDisabled(w){return w[k]},getKey(w){var B;return(B=w[n])!==null&&B!==void 0?B:w.name}})}),Ce=C(()=>ke([{}]).treeNodes[0]);function xe(){var b;if(ee.value===-1)return v(Te,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ce.value,domId:$,isEllipsisPlaceholder:!0});const k=ye.value.treeNodes[0],n=_.value,w=!!(!((b=k.children)===null||b===void 0)&&b.some(B=>n.includes(B.key)));return v(Te,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:w,tmNode:k,domId:$,rawNodes:k.rawNode.children||[],tmNodes:k.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:T,uncontrolledExpanededKeys:p,mergedExpandedKeys:S,uncontrolledValue:x,mergedValue:P,activePath:_,tmNodes:y,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:u,themeClass:g==null?void 0:g.themeClass,overflowRef:z,counterRef:E,updateCounter:()=>{},onResize:F,onUpdateOverflow:be,onUpdateCount:ge,renderCounter:xe,getCounter:X,onRender:g==null?void 0:g.onRender,showOption:R,deriveResponsiveState:F}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r==null||r();const a=()=>this.tmNodes.map(s=>je(s,this.$props)),d=t==="horizontal"&&this.responsive,c=()=>v("div",Ze(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,d&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),d?v(Vo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return d?v(Ho,{onResize:this.onResize},{default:c}):c()}}),H=e=>({label:()=>v(_o,{to:{name:e.route,params:e.params||{}},exact:!0},{default:()=>e.label}),key:e.key,icon:e.iconName?Y(e.iconName):void 0,children:e.children,type:e.children??"item"}),Mt={class:"absolute bottom-0 start-0 end-0 border-t border-gray-300 backdrop-blur-sm z-10 border-solid"},Xt=U({__name:"AdminLayout",setup(e){const t=To(),o=No(),{screenSize:r}=Oo(),a=Fo(),i=M(!0),d=M(!1),c=M(!1),s=M(!1),x=M(t.name),O=[H({label:"Inicio",key:"Dashboard",route:"Dashboard",iconName:"home"}),{label:"Gestión Académica",key:"academic-management",icon:Y("book"),children:[{type:"group",label:"Estudiantes y Docentes",key:"people",children:[H({label:"Estudiantes",key:"Student",route:"Student",iconName:"personalcard"}),H({label:"Docentes",key:"Teacher",route:"Teacher",iconName:"teacher"})]},{type:"group",label:"Planificación Académica",key:"academic-planning",children:[H({label:"Periodos Académicos",key:"Period",route:"Period",iconName:"calendar-2"}),H({label:"Planes de Estudio",key:"Curriculum",route:"Curriculum",iconName:"book-1"}),H({label:"Áreas",key:"Area",route:"Area",iconName:"book-square"}),H({label:"Módulos",key:"Module",route:"Module",iconName:"bookmark"}),H({label:"Cursos",key:"Course",route:"Course",iconName:"book-saved"})]}]},{label:"Carga Académica",key:"academic-workload",icon:Y("folder-open"),children:[H({label:"Apertura de Grupos",key:"Group",route:"Group",iconName:"calendar-add"}),H({label:"Gestión de Grupos",key:"GroupManager",route:"GroupManager",iconName:"data"})]},H({label:"Supervisión Académica",key:"academic-supervision",route:"AcademicSupervision",iconName:"speedometer"}),{label:"Notas",key:"grades",icon:Y("archive-book"),children:[H({label:"Acta de Notas",key:"AcademicRecord",route:"AcademicRecord",iconName:"archive-book"}),H({label:"Habilitaciones",key:"grade-deadline",route:"GradeDeadline",iconName:"calendar-2"})]},{label:"Administración",key:"administration",icon:Y("cpu-setting"),children:[{type:"group",label:"Configuraciones Generales",key:"general-settings",children:[H({label:"Tipos de Documento",key:"DocumentType",route:"DocumentType",iconName:"tag"}),H({label:"Tipos de Estudiante",key:"StudentType",route:"StudentType",iconName:"tag"}),H({label:"Métodos de Pago",key:"PaymentType",route:"PaymentType",iconName:"tag"})]},{type:"group",label:"Infraestructura",key:"infrastructure",children:[H({label:"Laboratorios",key:"Laboratory",route:"Laboratory",iconName:"devices"})]}]},{label:"Matrículas",key:"enrollments",icon:Y("folder"),children:[H({label:"Realizar Matrícula",key:"enrollment",route:"Enrollment",iconName:"folder-add"}),H({label:"Matrículas",key:"virtual-enrollment",route:"EnrollmentVirtual",iconName:"folder-cloud"}),H({label:"Habilitaciones",key:"EnrollmentDeadline",route:"EnrollmentDeadline",iconName:"calendar-2"})]},{label:"Costos",key:"financial",icon:Y("money"),children:[H({label:"Matrícula (Módulos)",key:"ModulePrice",route:"ModulePrice",iconName:"moneys"}),H({label:"Mensualidad (Cursos)",key:"CoursePrice",route:"CoursePrice",iconName:"moneys"})]},{label:"Reportes",key:"reports",icon:Y("archive"),children:[H({label:"Reporte de Estudiantes",key:"StudentReportView",route:"StudentReportView",iconName:"document-filter"}),H({label:"Reporte de Grupos",key:"GroupReportView",route:"GroupReportView",iconName:"document-filter"})]},{label:"Seguridad",key:"security",icon:Y("shield"),children:[{type:"group",label:"Administradores",key:"security-admins",children:[H({label:"Usuarios Administradores",key:"UserAdmin",route:"UserAdmin",iconName:"security-user"}),H({label:"Roles Administradores",key:"RoleAdmin",route:"RoleAdmin",iconName:"key-square"})]},{type:"group",label:"Docentes",key:"security-teachers",children:[H({label:"Usuarios Docentes",key:"UserTeacher",route:"UserTeacher",iconName:"security-user"})]},{type:"group",label:"Estudiantes",key:"security-students",children:[H({label:"Usuarios Estudiantes",key:"UserStudent",route:"UserStudent",iconName:"security-user"})]}]}],P=[H({label:"Perfil",key:"Profile",route:"Profile",iconName:"user"}),{label:"Salir",key:"sign-out",icon:Y("logout","red"),props:{class:"text-red-500",onClick:()=>{N()}}}],p=[{label:()=>{var S,y;return v("span",{class:"text-gray-500"},["Matriculas:  ",v("strong",{class:(S=a.enrollment)!=null&&S.period?"text-blue-500":"text-red-500"},((y=a.enrollment)==null?void 0:y.period)??"No definido")])},key:"groups",icon:Y("people")}],N=async()=>{s.value=!0,await $o()&&o.push({name:"Login"}),s.value=!1};return(async()=>{await a.getEnrollment()})(),(S,y)=>{const _=Ft,G=At,D=ct,L=Ve("LnxIcon"),R=Bo,u=oo,g=wt,$=Ve("router-view"),z=bt,E=gt,A=Ct;return le(),ie(E,{position:"absolute",style:{"min-height":"100dvh",position:"relative",overflow:"hidden"}},{default:K(()=>[V(E,{"has-sider":"",position:"absolute",style:{top:"0px",bottom:"32.85px"}},{default:K(()=>[ae(r)!=="sm"?(le(),ie(G,{key:0,bordered:"",style:{height:"100%","background-color":"#f0f2f5"},"collapse-mode":"width",collapsed:d.value,"onUpdate:collapsed":y[0]||(y[0]=F=>d.value=F),width:280,"native-scrollbar":!1,inverted:c.value,position:ae(r)==="sm"?"absolute":"static","collapsed-width":ae(r)==="sm"?0:64},{default:K(()=>[V(_,{inverted:c.value,"collapsed-width":64,"collapsed-icon-size":22,options:O,"default-value":x.value,class:"mb-26"},null,8,["inverted","default-value"]),We("div",Mt,[V(_,{inverted:c.value,"collapsed-width":64,"collapsed-icon-size":22,options:p},null,8,["inverted"])])]),_:1},8,["collapsed","inverted","position","collapsed-width"])):Ke("",!0),ae(r)==="sm"?(le(),ie(D,{key:1,show:i.value,"onUpdate:show":y[2]||(y[2]=F=>i.value=F),width:280,position:"absolute",style:{top:"0px",bottom:"0px"},placement:"left"},{default:K(()=>[V(_,{inverted:c.value,"collapsed-width":64,"collapsed-icon-size":22,options:O,modelValue:x.value,"onUpdate:modelValue":y[1]||(y[1]=F=>x.value=F)},null,8,["inverted","modelValue"])]),_:1},8,["show"])):Ke("",!0),V(E,null,{default:K(()=>[V(g,{bordered:"",style:{height:"48px",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 8px"}},{default:K(()=>[ae(r)==="sm"?(le(),ie(R,{key:0,onClick:y[3]||(y[3]=F=>i.value=!i.value)},{default:K(()=>[V(L,{icon:"",size:"24","icon-name":"grid-4"})]),_:1})):(le(),ie(R,{key:1,quaternary:"",onClick:y[4]||(y[4]=F=>d.value=!d.value)},{default:K(()=>[V(L,{size:"24","icon-name":d.value?"grid-9":"grid-4"},null,8,["icon-name"])]),_:1})),V(u,{trigger:"hover",options:P},{default:K(()=>[V(R,null,{default:K(()=>[V(L,{size:"24","icon-name":"profile"})]),_:1})]),_:1})]),_:1}),V(z,null,{default:K(()=>[V($)]),_:1})]),_:1})]),_:1}),V(A,{bordered:"",position:"absolute",class:"px-3 py-2 text-end text-xs"},{default:K(()=>[We("span",null," © "+Eo(new Date().getFullYear())+" Instituto de Informática - UNAP. v1.0 ",1)]),_:1})]),_:1})}}});export{Xt as default};
