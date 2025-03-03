import{u as co,c as Se,V as uo,r as D}from"./DataTable.types-BjrSoKaL.js";import{d as U,h as u,c as $e,a as Be,s as Ge,r as O,i as Z,b as Xe,e as C,u as Q,f as mo,w as He,g as ho,o as vo,j as fo,p as G,k as go,l as bo,m as po,n as Ae,v as De,F as yo,T as Ze,q as Je,S as Ne,t as Co,x as v,y as he,z as h,A as I,B as f,C as xo,D as W,E as zo,G as te,H as wo,I as re,J as Io,L as So,K as se,M as j,N as Ro,O as Ue,P as Re,Q as ce,R as Qe,U as eo,V as ne,W as ko,X as oe,Y as Ee,Z as Pe,_ as Ho,$ as ke,a0 as Ao,a1 as Po,a2 as To,a3 as _o,a4 as ie,a5 as $o,a6 as q,a7 as Bo,a8 as Ke,a9 as le,aa as V,ab as ae,ac as Ve,ad as We,ae as No,af as Eo,ag as Oo}from"./index-DvYzMf2M.js";import{u as Fo}from"./useBreakpoints-DHc7VBYg.js";import{u as Mo}from"./period.stores-DwlCazgL.js";import{t as Lo,d as jo,C as Do,N as Uo,_ as Ko}from"./Dropdown-DsRfH9bj.js";import{u as de}from"./get-uXzlwZRV.js";import"./period.services-BAslYbEo.js";import"./use-keyboard-CQ_fFCxs.js";const Vo=U({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Wo(e){const{modalColor:t,textColor1:o,textColor2:r,boxShadow3:l,lineHeight:i,fontWeightStrong:c,dividerColor:d,closeColorHover:s,closeColorPressed:x,closeIconColor:E,closeIconColorHover:A,closeIconColorPressed:y,borderRadius:B,primaryColorHover:S}=e;return{bodyPadding:"16px 24px",borderRadius:B,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:r,titleTextColor:o,titleFontSize:"18px",titleFontWeight:c,boxShadow:l,lineHeight:i,headerBorderBottom:`1px solid ${d}`,footerBorderTop:`1px solid ${d}`,closeIconColor:E,closeIconColorHover:A,closeIconColorPressed:y,closeSize:"22px",closeIconSize:"18px",closeColorHover:s,closeColorPressed:x,closeBorderRadius:B,resizableTriggerColorHover:S}}const Yo=$e({name:"Drawer",common:Be,peers:{Scrollbar:Ge},self:Wo}),qo=U({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=O(!!e.show),o=O(null),r=Z(Xe);let l=0,i="",c=null;const d=O(!1),s=O(!1),x=C(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:E,mergedRtlRef:A}=Q(e),y=mo("Drawer",A,E),B=m,S=z=>{s.value=!0,l=x.value?z.clientY:z.clientX,i=document.body.style.cursor,document.body.style.cursor=x.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",k),document.body.addEventListener("mouseleave",B),document.body.addEventListener("mouseup",m)},g=()=>{c!==null&&(window.clearTimeout(c),c=null),s.value?d.value=!0:c=window.setTimeout(()=>{d.value=!0},300)},H=()=>{c!==null&&(window.clearTimeout(c),c=null),d.value=!1},{doUpdateHeight:$,doUpdateWidth:Y}=r,L=z=>{const{maxWidth:P}=e;if(P&&z>P)return P;const{minWidth:_}=e;return _&&z<_?_:z},F=z=>{const{maxHeight:P}=e;if(P&&z>P)return P;const{minHeight:_}=e;return _&&z<_?_:z};function k(z){var P,_;if(s.value)if(x.value){let K=((P=o.value)===null||P===void 0?void 0:P.offsetHeight)||0;const X=l-z.clientY;K+=e.placement==="bottom"?X:-X,K=F(K),$(K),l=z.clientY}else{let K=((_=o.value)===null||_===void 0?void 0:_.offsetWidth)||0;const X=l-z.clientX;K+=e.placement==="right"?X:-X,K=L(K),Y(K),l=z.clientX}}function m(){s.value&&(l=0,s.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",k),document.body.removeEventListener("mouseup",m),document.body.removeEventListener("mouseleave",B))}He(()=>{e.show&&(t.value=!0)}),ho(()=>e.show,z=>{z||m()}),vo(()=>{m()});const b=C(()=>{const{show:z}=e,P=[[De,z]];return e.showMask||P.push([Co,e.onClickoutside,void 0,{capture:!0}]),P});function T(){var z;t.value=!1,(z=e.onAfterLeave)===null||z===void 0||z.call(e)}return fo(C(()=>e.blockScroll&&t.value)),G(go,o),G(bo,null),G(po,null),{bodyRef:o,rtlEnabled:y,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:C(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:T,bodyDirectives:b,handleMousedownResizeTrigger:S,handleMouseenterResizeTrigger:g,handleMouseleaveResizeTrigger:H,isDragging:s,isHoverOnResizeTrigger:d}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Ae(u("div",{role:"none"},u(yo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>u(Ze,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ae(u("div",Je(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?u("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?u("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):u(Ne,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[De,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Go,cubicBezierEaseOut:Xo}=he;function Zo({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Go}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Xo}`}),v(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Jo,cubicBezierEaseOut:Qo}=he;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Jo}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Qo}`}),v(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ot,cubicBezierEaseOut:tt}=he;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ot}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),v(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:nt,cubicBezierEaseOut:it}=he;function lt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${nt}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${it}`}),v(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const at=v([h("drawer",`
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
 `),I("native-scrollbar",[h("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),f("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[I("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),h("drawer-content-wrapper",`
 box-sizing: border-box;
 `),h("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[I("native-scrollbar",[h("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),h("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),h("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),h("drawer-header",`
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
 `)]),h("drawer-footer",`
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
 `)])]),v("body",[v(">",[h("drawer-container",`
 position: fixed;
 `)])]),h("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[v("> *",`
 pointer-events: all;
 `)]),h("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),xo({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),st=Object.assign(Object.assign({},W.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),dt=U({name:"Drawer",inheritAttrs:!1,props:st,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=Q(e),l=zo(),i=W("Drawer","-drawer",at,Yo,e,t),c=O(e.defaultWidth),d=O(e.defaultHeight),s=de(te(e,"width"),c),x=de(te(e,"height"),d),E=C(()=>{const{placement:m}=e;return m==="top"||m==="bottom"?"":se(s.value)}),A=C(()=>{const{placement:m}=e;return m==="left"||m==="right"?"":se(x.value)}),y=m=>{const{onUpdateWidth:b,"onUpdate:width":T}=e;b&&j(b,m),T&&j(T,m),c.value=m},B=m=>{const{onUpdateHeight:b,"onUpdate:width":T}=e;b&&j(b,m),T&&j(T,m),d.value=m},S=C(()=>[{width:E.value,height:A.value},e.drawerStyle||""]);function g(m){const{onMaskClick:b,maskClosable:T}=e;T&&L(!1),b&&b(m)}function H(m){g(m)}const $=wo();function Y(m){var b;(b=e.onEsc)===null||b===void 0||b.call(e),e.show&&e.closeOnEsc&&Ro(m)&&($.value||L(!1))}function L(m){const{onHide:b,onUpdateShow:T,"onUpdate:show":z}=e;T&&j(T,m),z&&j(z,m),b&&!m&&j(b,m)}G(Xe,{isMountedRef:l,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:L,doUpdateHeight:B,doUpdateWidth:y});const F=C(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:b,cubicBezierEaseOut:T},self:{color:z,textColor:P,boxShadow:_,lineHeight:K,headerPadding:X,footerPadding:ee,borderRadius:ge,bodyPadding:be,titleFontSize:pe,titleTextColor:ye,titleFontWeight:Ce,headerBorderBottom:xe,footerBorderTop:p,closeIconColor:R,closeIconColorHover:n,closeIconColorPressed:w,closeColorHover:N,closeColorPressed:ze,closeIconSize:we,closeSize:Ie,closeBorderRadius:a,resizableTriggerColorHover:so}}=i.value;return{"--n-line-height":K,"--n-color":z,"--n-border-radius":ge,"--n-text-color":P,"--n-box-shadow":_,"--n-bezier":m,"--n-bezier-out":T,"--n-bezier-in":b,"--n-header-padding":X,"--n-body-padding":be,"--n-footer-padding":ee,"--n-title-text-color":ye,"--n-title-font-size":pe,"--n-title-font-weight":Ce,"--n-header-border-bottom":xe,"--n-footer-border-top":p,"--n-close-icon-color":R,"--n-close-icon-color-hover":n,"--n-close-icon-color-pressed":w,"--n-close-size":Ie,"--n-close-color-hover":N,"--n-close-color-pressed":ze,"--n-close-icon-size":we,"--n-close-border-radius":a,"--n-resize-trigger-color-hover":so}}),k=r?re("drawer",void 0,F,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:S,handleOutsideClick:H,handleMaskClick:g,handleEsc:Y,mergedTheme:i,cssVars:r?void 0:F,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender,isMounted:l}},render(){const{mergedClsPrefix:e}=this;return u(So,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Ae(u("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?u(Ze,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,u(qo,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Io,{zIndex:this.zIndex,enabled:this.show}]])}})}});function ct(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:l,dividerColor:i,actionColor:c,scrollbarColor:d,scrollbarColorHover:s,invertedColor:x}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:c,headerColor:l,headerColorInverted:x,footerColor:c,footerColorInverted:x,headerBorderColor:i,headerBorderColorInverted:x,footerBorderColor:i,footerBorderColorInverted:x,siderBorderColor:i,siderBorderColorInverted:x,siderColor:l,siderColorInverted:x,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ue(r,d),siderToggleBarColorHover:Ue(r,s),__invertScrollbar:"true"}}const ve=$e({name:"Layout",common:Be,peers:{Scrollbar:Ge},self:ct});function ut(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function mt(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:l,textColor1:i,fontSize:c,dividerColor:d,hoverColor:s,primaryColorHover:x}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:Re(r,{alpha:.1}),itemColorActiveHover:Re(r,{alpha:.1}),itemColorActiveCollapsed:Re(r,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:x,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:x,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:d},ut("#BBB",r,"#FFF","#AAA"))}const ht=$e({name:"Menu",common:Be,peers:{Tooltip:Lo,Dropdown:jo},self:mt}),oo=ce("n-layout-sider"),fe={type:String,default:"static"},vt=h("layout",`
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
`,[h("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ft={embedded:Boolean,position:fe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},to=ce("n-layout");function ro(e){return U({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),ft),setup(t){const o=O(null),r=O(null),{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(t),c=W("Layout","-layout",vt,ve,t,l);function d(g,H){if(t.nativeScrollbar){const{value:$}=o;$&&(H===void 0?$.scrollTo(g):$.scrollTo(g,H))}else{const{value:$}=r;$&&$.scrollTo(g,H)}}G(to,t);let s=0,x=0;const E=g=>{var H;const $=g.target;s=$.scrollLeft,x=$.scrollTop,(H=t.onScroll)===null||H===void 0||H.call(t,g)};Qe(()=>{if(t.nativeScrollbar){const g=o.value;g&&(g.scrollTop=x,g.scrollLeft=s)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},y={scrollTo:d},B=C(()=>{const{common:{cubicBezierEaseInOut:g},self:H}=c.value;return{"--n-bezier":g,"--n-color":t.embedded?H.colorEmbedded:H.color,"--n-text-color":H.textColor}}),S=i?re("layout",C(()=>t.embedded?"e":""),B,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:A,mergedTheme:c,handleNativeElScroll:E,cssVars:i?void 0:B,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender},y)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:i,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):u(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const gt=ro(!1),bt=ro(!0),pt=h("layout-footer",`
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
 `)]),yt=Object.assign(Object.assign({},W.props),{inverted:Boolean,position:fe,bordered:Boolean}),Ct=U({name:"LayoutFooter",props:yt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Layout","-layout-footer",pt,ve,e,t),l=C(()=>{const{common:{cubicBezierEaseInOut:c},self:d}=r.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=d.footerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.footerBorderColorInverted):(s["--n-color"]=d.footerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.footerBorderColor),s}),i=o?re("layout-footer",C(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),xt=h("layout-header",`
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
 `)]),zt={position:fe,inverted:Boolean,bordered:{type:Boolean,default:!1}},wt=U({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),zt),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Layout","-layout-header",xt,ve,e,t),l=C(()=>{const{common:{cubicBezierEaseInOut:c},self:d}=r.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=d.headerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.headerBorderColorInverted):(s["--n-color"]=d.headerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.headerBorderColor),s}),i=o?re("layout-header",C(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),It=h("layout-sider",`
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
 `)]),I("collapsed",[h("layout-toggle-button",[h("base-icon",`
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",[v("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),h("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[h("base-icon",`
 transform: rotate(0);
 `)]),h("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[v("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[h("layout-toggle-bar",[v("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),h("layout-toggle-button",[h("base-icon",`
 transform: rotate(0);
 `)])]),h("layout-toggle-button",`
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
 `,[h("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",`
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
 `),v("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),v("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),h("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[h("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),St=U({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Rt=U({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(eo,{clsPrefix:e},{default:()=>u(Do,null)}))}}),kt={position:fe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ht=U({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),kt),setup(e){const t=Z(to),o=O(null),r=O(null),l=O(e.defaultCollapsed),i=de(te(e,"collapsed"),l),c=C(()=>se(i.value?e.collapsedWidth:e.width)),d=C(()=>e.collapseMode!=="transform"?{}:{minWidth:se(e.width)}),s=C(()=>t?t.siderPlacement:"left");function x(k,m){if(e.nativeScrollbar){const{value:b}=o;b&&(m===void 0?b.scrollTo(k):b.scrollTo(k,m))}else{const{value:b}=r;b&&b.scrollTo(k,m)}}function E(){const{"onUpdate:collapsed":k,onUpdateCollapsed:m,onExpand:b,onCollapse:T}=e,{value:z}=i;m&&j(m,!z),k&&j(k,!z),l.value=!z,z?b&&j(b):T&&j(T)}let A=0,y=0;const B=k=>{var m;const b=k.target;A=b.scrollLeft,y=b.scrollTop,(m=e.onScroll)===null||m===void 0||m.call(e,k)};Qe(()=>{if(e.nativeScrollbar){const k=o.value;k&&(k.scrollTop=y,k.scrollLeft=A)}}),G(oo,{collapsedRef:i,collapseModeRef:te(e,"collapseMode")});const{mergedClsPrefixRef:S,inlineThemeDisabled:g}=Q(e),H=W("Layout","-layout-sider",It,ve,e,S);function $(k){var m,b;k.propertyName==="max-width"&&(i.value?(m=e.onAfterLeave)===null||m===void 0||m.call(e):(b=e.onAfterEnter)===null||b===void 0||b.call(e))}const Y={scrollTo:x},L=C(()=>{const{common:{cubicBezierEaseInOut:k},self:m}=H.value,{siderToggleButtonColor:b,siderToggleButtonBorder:T,siderToggleBarColor:z,siderToggleBarColorHover:P}=m,_={"--n-bezier":k,"--n-toggle-button-color":b,"--n-toggle-button-border":T,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":P};return e.inverted?(_["--n-color"]=m.siderColorInverted,_["--n-text-color"]=m.textColorInverted,_["--n-border-color"]=m.siderBorderColorInverted,_["--n-toggle-button-icon-color"]=m.siderToggleButtonIconColorInverted,_.__invertScrollbar=m.__invertScrollbar):(_["--n-color"]=m.siderColor,_["--n-text-color"]=m.textColor,_["--n-border-color"]=m.siderBorderColor,_["--n-toggle-button-icon-color"]=m.siderToggleButtonIconColor),_}),F=g?re("layout-sider",C(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:S,mergedTheme:H,styleMaxWidth:c,mergedCollapsed:i,scrollContainerStyle:d,siderPlacement:s,handleNativeElScroll:B,handleTransitionend:$,handleTriggerClick:E,inlineThemeDisabled:g,cssVars:L,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},Y)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:se(this.width)}]},this.nativeScrollbar?u("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?u(St,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Rt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),ue=ce("n-menu"),Oe=ce("n-submenu"),Fe=ce("n-menu-item-group"),Ye=[v("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[v("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],qe=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[v("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],At=v([h("menu",`
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
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[v("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[I("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[v("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[v("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[ne("selected, child-active",[v("&:focus-within",qe)]),I("selected",[J(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[v("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[J(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[v("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",qe)]),h("menu-item-content-header",[v("a","color: var(--n-item-text-color-horizontal);")])])]),ne("responsive",[h("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[h("menu-item-content",[I("selected",[v("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
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
 `,[v("> *","z-index: 1;"),v("&::before",`
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
 `),I("collapsed",[f("arrow","transform: rotate(0);")]),I("selected",[v("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[v("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[v("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[ne("selected, child-active",[v("&:focus-within",Ye)]),I("selected",[J(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[v("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[J(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[v("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[J(null,[v("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,Ye)]),f("icon",`
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
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[v("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[v("&::before",`
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
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ko({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
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
 `)])]),h("menu-tooltip",[v("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,t){return[I("hover",e,t),v("&:hover",e,t)]}const no=U({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Z(ue);return{menuProps:t,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:l,expandIcon:i}}=this,c=o?o(t.rawNode):oe(this.icon);return u("div",{onClick:d=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):oe(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):oe(this.extra)):null),this.showArrow?u(eo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):u(Vo,null)}):null)}}),me=8;function Me(e){const t=Z(ue),{props:o,mergedCollapsedRef:r}=t,l=Z(Oe,null),i=Z(Fe,null),c=C(()=>o.mode==="horizontal"),d=C(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var y;return Math.max((y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize,o.iconSize)}),x=C(()=>{var y;return!c.value&&e.root&&r.value&&(y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize}),E=C(()=>{if(c.value)return;const{collapsedWidth:y,indent:B,rootIndent:S}=o,{root:g,isGroup:H}=e,$=S===void 0?B:S;return g?r.value?y/2-s.value/2:$:i&&typeof i.paddingLeftRef.value=="number"?B/2+i.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(H?B/2:B)+l.paddingLeftRef.value:0}),A=C(()=>{const{collapsedWidth:y,indent:B,rootIndent:S}=o,{value:g}=s,{root:H}=e;return c.value||!H||!r.value?me:(S===void 0?B:S)+g+me-(y+g)/2});return{dropdownPlacement:d,activeIconSize:x,maxIconSize:s,paddingLeft:E,iconMarginRight:A,NMenu:t,NSubmenu:l}}const Le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Pt=U({name:"MenuDivider",setup(){const e=Z(ue),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),io=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Tt=Ee(io),_t=U({name:"MenuOption",props:io,setup(e){const t=Me(e),{NSubmenu:o,NMenu:r}=t,{props:l,mergedClsPrefixRef:i,mergedCollapsedRef:c}=r,d=o?o.mergedDisabledRef:{value:!1},s=C(()=>d.value||e.disabled);function x(A){const{onClick:y}=e;y&&y(A)}function E(A){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),x(A))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:l,dropdownEnabled:Pe(()=>e.root&&c.value&&l.mode!=="horizontal"&&!s.value),selected:Pe(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:E}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:l}}=this,i=l==null?void 0:l(o.rawNode);return u("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),u(Uo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):oe(this.title),trigger:()=>u(no,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),lo=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),$t=Ee(lo),Bt=U({name:"MenuOptionGroup",props:lo,setup(e){G(Oe,null);const t=Me(e);G(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Z(ue);return function(){const{value:l}=o,i=t.paddingLeft.value,{nodeProps:c}=r,d=c==null?void 0:c(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},d,{class:[`${l}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),oe(e.title),e.extra?u(Ho,null," ",oe(e.extra)):null),u("div",null,e.tmNodes.map(s=>je(s,r))))}}});function Te(e){return e.type==="divider"||e.type==="render"}function Nt(e){return e.type==="divider"}function je(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Te(o))return Nt(o)?u(Pt,Object.assign({key:e.key},o.props)):null;const{labelField:l}=t,{key:i,level:c,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:c,root:c===0,isGroup:d});return e.children?e.isGroup?u(Bt,ke(s,$t,{tmNode:e,tmNodes:e.children,key:i})):u(_e,ke(s,Et,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(_t,ke(s,Tt,{key:i,tmNode:e}))}const ao=Object.assign(Object.assign({},Le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Et=Ee(ao),_e=U({name:"Submenu",props:ao,setup(e){const t=Me(e),{NMenu:o,NSubmenu:r}=t,{props:l,mergedCollapsedRef:i,mergedThemeRef:c}=o,d=C(()=>{const{disabled:y}=e;return r!=null&&r.mergedDisabledRef.value||l.disabled?!0:y}),s=O(!1);G(Oe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),G(Fe,null);function x(){const{onClick:y}=e;y&&y()}function E(){d.value||(i.value||o.toggleExpand(e.internalKey),x())}function A(y){s.value=y}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:Pe(()=>{var y;return(y=e.virtualChildActive)!==null&&y!==void 0?y:o.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>l.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!d.value&&(l.mode==="horizontal"||i.value)),handlePopoverShowChange:A,handleClick:E}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,l=()=>{const{isHorizontal:c,paddingLeft:d,collapsed:s,mergedDisabled:x,maxIconSize:E,activeIconSize:A,title:y,childActive:B,icon:S,handleClick:g,menuProps:{nodeProps:H},dropdownShow:$,iconMarginRight:Y,tmNode:L,mergedClsPrefix:F,isEllipsisPlaceholder:k,extra:m}=this,b=H==null?void 0:H(L.rawNode);return u("div",Object.assign({},b,{class:[`${F}-menu-item`,b==null?void 0:b.class],role:"menuitem"}),u(no,{tmNode:L,paddingLeft:d,collapsed:s,disabled:x,iconMarginRight:Y,maxIconSize:E,activeIconSize:A,title:y,extra:m,showArrow:!c,childActive:B,clsPrefix:F,icon:S,hover:$,onClick:g,isEllipsisPlaceholder:k}))},i=()=>u(Ao,null,{default:()=>{const{tmNodes:c,collapsed:d}=this;return d?null:u("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>je(s,this.menuProps)))}});return this.root?u(Ko,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>u("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:i())}):u("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),i())}}),Ot=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ft=U({name:"Menu",inheritAttrs:!1,props:Ot,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=W("Menu","-menu",At,ht,e,t),l=Z(oo,null),i=C(()=>{var p;const{collapsed:R}=e;if(R!==void 0)return R;if(l){const{collapseModeRef:n,collapsedRef:w}=l;if(n.value==="width")return(p=w.value)!==null&&p!==void 0?p:!1}return!1}),c=C(()=>{const{keyField:p,childrenField:R,disabledField:n}=e;return Se(e.items||e.options,{getIgnored(w){return Te(w)},getChildren(w){return w[R]},getDisabled(w){return w[n]},getKey(w){var N;return(N=w[p])!==null&&N!==void 0?N:w.name}})}),d=C(()=>new Set(c.value.treeNodes.map(p=>p.key))),{watchProps:s}=e,x=O(null);s!=null&&s.includes("defaultValue")?He(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const E=te(e,"value"),A=de(E,x),y=O([]),B=()=>{y.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(A.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?He(B):B();const S=co(e,["expandedNames","expandedKeys"]),g=de(S,y),H=C(()=>c.value.treeNodes),$=C(()=>c.value.getPath(A.value).keyPath);G(ue,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:A,mergedExpandedKeysRef:g,activePathRef:$,mergedClsPrefixRef:t,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:Y,toggleExpand:F});function Y(p,R){const{"onUpdate:value":n,onUpdateValue:w,onSelect:N}=e;w&&j(w,p,R),n&&j(n,p,R),N&&j(N,p,R),x.value=p}function L(p){const{"onUpdate:expandedKeys":R,onUpdateExpandedKeys:n,onExpandedNamesChange:w,onOpenNamesChange:N}=e;R&&j(R,p),n&&j(n,p),w&&j(w,p),N&&j(N,p),y.value=p}function F(p){const R=Array.from(g.value),n=R.findIndex(w=>w===p);if(~n)R.splice(n,1);else{if(e.accordion&&d.value.has(p)){const w=R.findIndex(N=>d.value.has(N));w>-1&&R.splice(w,1)}R.push(p)}L(R)}const k=p=>{const R=c.value.getPath(p??A.value,{includeSelf:!1}).keyPath;if(!R.length)return;const n=Array.from(g.value),w=new Set([...n,...R]);e.accordion&&d.value.forEach(N=>{w.has(N)&&!R.includes(N)&&w.delete(N)}),L(Array.from(w))},m=C(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:R},self:n}=r.value,{borderRadius:w,borderColorHorizontal:N,fontSize:ze,itemHeight:we,dividerColor:Ie}=n,a={"--n-divider-color":Ie,"--n-bezier":R,"--n-font-size":ze,"--n-border-color-horizontal":N,"--n-border-radius":w,"--n-item-height":we};return p?(a["--n-group-text-color"]=n.groupTextColorInverted,a["--n-color"]=n.colorInverted,a["--n-item-text-color"]=n.itemTextColorInverted,a["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,a["--n-item-text-color-active"]=n.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=n.itemIconColorInverted,a["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=n.arrowColorInverted,a["--n-arrow-color-hover"]=n.arrowColorHoverInverted,a["--n-arrow-color-active"]=n.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=n.itemColorHoverInverted,a["--n-item-color-active"]=n.itemColorActiveInverted,a["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=n.groupTextColor,a["--n-color"]=n.color,a["--n-item-text-color"]=n.itemTextColor,a["--n-item-text-color-hover"]=n.itemTextColorHover,a["--n-item-text-color-active"]=n.itemTextColorActive,a["--n-item-text-color-child-active"]=n.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,a["--n-item-icon-color"]=n.itemIconColor,a["--n-item-icon-color-hover"]=n.itemIconColorHover,a["--n-item-icon-color-active"]=n.itemIconColorActive,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=n.arrowColor,a["--n-arrow-color-hover"]=n.arrowColorHover,a["--n-arrow-color-active"]=n.arrowColorActive,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,a["--n-arrow-color-child-active"]=n.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,a["--n-item-color-hover"]=n.itemColorHover,a["--n-item-color-active"]=n.itemColorActive,a["--n-item-color-active-hover"]=n.itemColorActiveHover,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),a}),b=o?re("menu",C(()=>e.inverted?"a":"b"),m,e):void 0,T=Po(),z=O(null),P=O(null);let _=!0;const K=()=>{var p;_?_=!1:(p=z.value)===null||p===void 0||p.sync({showAllItemsBeforeCalculate:!0})};function X(){return document.getElementById(T)}const ee=O(-1);function ge(p){ee.value=e.options.length-p}function be(p){p||(ee.value=-1)}const pe=C(()=>{const p=ee.value;return{children:p===-1?[]:e.options.slice(p)}}),ye=C(()=>{const{childrenField:p,disabledField:R,keyField:n}=e;return Se([pe.value],{getIgnored(w){return Te(w)},getChildren(w){return w[p]},getDisabled(w){return w[R]},getKey(w){var N;return(N=w[n])!==null&&N!==void 0?N:w.name}})}),Ce=C(()=>Se([{}]).treeNodes[0]);function xe(){var p;if(ee.value===-1)return u(_e,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ce.value,domId:T,isEllipsisPlaceholder:!0});const R=ye.value.treeNodes[0],n=$.value,w=!!(!((p=R.children)===null||p===void 0)&&p.some(N=>n.includes(N.key)));return u(_e,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:w,tmNode:R,domId:T,rawNodes:R.rawNode.children||[],tmNodes:R.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:S,uncontrolledExpanededKeys:y,mergedExpandedKeys:g,uncontrolledValue:x,mergedValue:A,activePath:$,tmNodes:H,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:m,themeClass:b==null?void 0:b.themeClass,overflowRef:z,counterRef:P,updateCounter:()=>{},onResize:K,onUpdateOverflow:be,onUpdateCount:ge,renderCounter:xe,getCounter:X,onRender:b==null?void 0:b.onRender,showOption:k,deriveResponsiveState:K}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r==null||r();const l=()=>this.tmNodes.map(s=>je(s,this.$props)),c=t==="horizontal"&&this.responsive,d=()=>u("div",Je(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,c&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),c?u(uo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return c?u(To,{onResize:this.onResize},{default:d}):d()}}),M=e=>({label:()=>u(_o,{to:{name:e.route,params:e.params||{}},exact:!0},{default:()=>e.label}),key:e.key,icon:e.iconName?D(e.iconName):void 0,children:e.children,type:e.children??"item"}),Mt={class:"absolute bottom-0 start-0 end-0 border-t border-gray-300 backdrop-blur-sm z-10 border-solid"},qt=U({__name:"AdminLayout",setup(e){const t=$o(),o=Bo(),{screenSize:r}=Fo(),l=Mo(),i=O(!0),c=O(!1),d=O(!1),s=O(!1),x=O(t.name),E=[M({label:"Dashboard",key:"Dashboard",route:"Dashboard",iconName:"element-equal"}),{label:"Administración",key:"administration",icon:D("cpu-setting"),children:[{type:"group",label:"General",key:"people-general",children:[M({label:"Tipos de documentos",key:"DocumentType",route:"DocumentType",iconName:"tag"}),M({label:"Tipos de estudiantes",key:"StudentType",route:"StudentType",iconName:"tag"}),M({label:"Metodos de pago",key:"PaymentType",route:"PaymentType",iconName:"tag"})]},{type:"group",label:"Personas",key:"people",children:[M({label:"Estudiantes",key:"Student",route:"Student",iconName:"personalcard"}),M({label:"Docentes",route:"Teacher",key:"Teacher",iconName:"teacher"})]},{type:"group",label:"Académico",key:"academic",children:[M({label:"Periodos académicos",key:"Period",route:"Period",iconName:"calendar-2"}),M({label:"Planes de estudio",key:"Curriculum",route:"Curriculum",iconName:"book-1"}),M({label:"Areas",route:"Area",key:"Area",iconName:"book-square"}),M({label:"Modulos",key:"Module",route:"Module",iconName:"bookmark"}),M({label:"Cursos",key:"Course",route:"Course",iconName:"book-saved"})]},{type:"group",label:"Infraestructura",key:"infrastructure",children:[M({label:"Laboratorios",route:"Laboratory",key:"Laboratory",iconName:"devices"})]},{type:"group",label:"Financiero",key:"financial",children:[M({label:"Costos de matricula(Modulos)",key:"ModulePrice",route:"ModulePrice",iconName:"moneys"}),M({label:"Costos de mensualidad(Cursos)",key:"CoursePrice",route:"CoursePrice",iconName:"moneys"})]}]},{label:"Matriculas",key:"enrollments",icon:D("folder"),children:[M({label:"Matriculas",key:"enrollment",route:"Enrollment",iconName:"folder-add"}),{label:"Matriculas virtuales",key:"virtual-enrollments",icon:D("folder-cloud")},{label:"Convalidaciones",key:"validations",icon:D("folder-connection")}]},{label:"Notas",key:"grades",icon:D("archive-book"),children:[{label:"Ingreso de notas",key:"grades-entry",icon:D("archive-add")},{label:"Rectificación de notas",key:"grades-rectification",icon:D("archive-slash")}]},{label:"Carga de académica",key:"academic-load",icon:D("archive"),children:[M({label:"Apertura de grupos",key:"Group",route:"Group",iconName:"calendar-add"})]},{label:"Reportes",key:"reports",icon:D("chart-21"),children:[{label:"Reporte de matriculas",key:"enrollments-report",icon:D("chart-21")},{label:"Reporte de notas",key:"grades-report",icon:D("chart-21")},{label:"Reporte de carga académica",key:"academic-load-report",icon:D("chart-21")}]},{label:"Seguridad",key:"security",icon:D("shield"),children:[{type:"group",label:"Administradores",key:"security-admins",children:[M({label:"Usuarios Administradores",key:"UserAdmin",route:"UserAdmin",iconName:"security-user"}),M({label:"Roles Administradores",key:"RoleAdmin",route:"RoleAdmin",iconName:"key-square"})]},{type:"group",label:"Docentes",key:"security-teachers",children:[M({label:"Usuarios Docentes",key:"UserTeacher",route:"UserTeacher",iconName:"security-user"})]},{type:"group",label:"Estudiantes",key:"security-students",children:[M({label:"Usuarios Estudiantes",key:"UserStudent",route:"UserStudent",iconName:"security-user"})]}]}],A=[{label:()=>{var S,g;return u("span",{class:"text-gray-500"},["Per. Actual: ",u("strong",{class:(S=l.current)!=null&&S.name?"text-blue-500":"text-red-500"},((g=l.current)==null?void 0:g.name)??"No definido")])},icon:D("calendar"),key:"hear-the-wind-sing"},{label:()=>{var S,g;return u("span",{class:"text-gray-500"},["Per. Matricula: ",u("strong",{class:(S=l.enrollment)!=null&&S.name?"text-blue-500":"text-red-500"},((g=l.enrollment)==null?void 0:g.name)??"No definido")])},key:"groups",icon:D("people")}],y=async()=>{s.value=!0,await Eo()&&o.push({name:"Login"}),s.value=!1};return(async()=>{await l.getCurrent(),await l.getEnrollment()})(),(S,g)=>{const H=Ft,$=Ht,Y=dt,L=Ke("LnxIcon"),F=Oo,k=wt,m=Ke("router-view"),b=bt,T=gt,z=Ct;return le(),ie(T,{position:"absolute",style:{"min-height":"100vh",position:"relative",overflow:"hidden"}},{default:q(()=>[V(T,{"has-sider":"",position:"absolute",style:{top:"0px",bottom:"48px"}},{default:q(()=>[ae(r)!=="sm"?(le(),ie($,{key:0,bordered:"",style:{height:"100%","background-color":"#f0f2f5"},"collapse-mode":"width",collapsed:c.value,"onUpdate:collapsed":g[0]||(g[0]=P=>c.value=P),width:280,"native-scrollbar":!1,inverted:d.value,position:ae(r)==="sm"?"absolute":"static","collapsed-width":ae(r)==="sm"?0:64},{default:q(()=>[V(H,{inverted:d.value,"collapsed-width":64,"collapsed-icon-size":22,options:E,"default-value":x.value,class:"mb-26"},null,8,["inverted","default-value"]),Ve("div",Mt,[V(H,{inverted:d.value,"collapsed-width":64,"collapsed-icon-size":22,options:A},null,8,["inverted"])])]),_:1},8,["collapsed","inverted","position","collapsed-width"])):We("",!0),ae(r)==="sm"?(le(),ie(Y,{key:1,show:i.value,"onUpdate:show":g[2]||(g[2]=P=>i.value=P),width:280,position:"absolute",style:{top:"0px",bottom:"0px"},placement:"left"},{default:q(()=>[V(H,{inverted:d.value,"collapsed-width":64,"collapsed-icon-size":22,options:E,modelValue:x.value,"onUpdate:modelValue":g[1]||(g[1]=P=>x.value=P)},null,8,["inverted","modelValue"])]),_:1},8,["show"])):We("",!0),V(T,null,{default:q(()=>[V(k,{bordered:"",style:{height:"48px",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 8px"}},{default:q(()=>[ae(r)==="sm"?(le(),ie(F,{key:0,onClick:g[3]||(g[3]=P=>i.value=!i.value)},{default:q(()=>[V(L,{icon:"",size:"24","icon-name":"grid-4"})]),_:1})):(le(),ie(F,{key:1,quaternary:"",onClick:g[4]||(g[4]=P=>c.value=!c.value)},{default:q(()=>[V(L,{size:"24","icon-name":c.value?"grid-9":"grid-4"},null,8,["icon-name"])]),_:1})),V(F,{secondary:"",type:"error",onClick:y,loading:s.value},{default:q(()=>[g[5]||(g[5]=No(" Salir ")),V(L,{class:"ms-2",size:"24","icon-name":"logout"})]),_:1},8,["loading"])]),_:1}),V(b,null,{default:q(()=>[V(m)]),_:1})]),_:1})]),_:1}),V(z,{bordered:"",position:"absolute",style:{height:"48px",display:"flex","justify-content":"space-between","align-items":"center",padding:"0 16px"}},{default:q(()=>g[6]||(g[6]=[Ve("span",null," v1.0 ",-1)])),_:1})]),_:1})}}});export{qt as default};
