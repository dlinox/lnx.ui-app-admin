import{c as Se,u as so,V as co,r as M}from"./icon.utils-CZVSX6Io.js";import{d as D,h,c as $e,a as Be,s as qe,r as F,i as Z,b as Ge,e as C,u as Q,f as uo,w as He,g as ho,o as mo,j as vo,k as fo,p as Y,l as go,m as bo,n as po,q as Ae,v as De,F as yo,T as Xe,t as Ze,S as Ne,x as v,y as me,z as m,A as w,B as f,C as Co,D as V,E as xo,G as te,H as zo,I as re,J as wo,L as Io,K as L,M as So,N as Ue,O as Re,P as ce,Q as Je,R as Qe,U as ne,V as Ro,W as oe,X as Ee,Y as Te,Z as ko,_ as ke,$ as Ho,a0 as Ao,a1 as To,a2 as Po,a3 as ie,a4 as q,a5 as _o,a6 as $o,a7 as le,a8 as G,a9 as ae,aa as Ke,ab as Bo,ac as No}from"./index-Cti78UEY.js";import{u as Eo}from"./useBreakpoints-DIcDFniR.js";import{t as Fo,d as Oo,C as Mo,N as Lo,_ as jo,a as Ve}from"./LnxIcon.vue_vue_type_script_setup_true_lang-FI2dAlHU.js";import{u as de,f as se}from"./get-DsH9SH5X.js";import"./use-keyboard-CYS5I1Kx.js";const Do=D({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Uo(e){const{modalColor:t,textColor1:o,textColor2:r,boxShadow3:l,lineHeight:i,fontWeightStrong:c,dividerColor:d,closeColorHover:s,closeColorPressed:b,closeIconColor:N,closeIconColorHover:H,closeIconColorPressed:y,borderRadius:P,primaryColorHover:A}=e;return{bodyPadding:"16px 24px",borderRadius:P,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:r,titleTextColor:o,titleFontSize:"18px",titleFontWeight:c,boxShadow:l,lineHeight:i,headerBorderBottom:`1px solid ${d}`,footerBorderTop:`1px solid ${d}`,closeIconColor:N,closeIconColorHover:H,closeIconColorPressed:y,closeSize:"22px",closeIconSize:"18px",closeColorHover:s,closeColorPressed:b,closeBorderRadius:P,resizableTriggerColorHover:A}}const Ko=$e({name:"Drawer",common:Be,peers:{Scrollbar:qe},self:Uo}),Vo=D({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=F(!!e.show),o=F(null),r=Z(Ge);let l=0,i="",c=null;const d=F(!1),s=F(!1),b=C(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:N,mergedRtlRef:H}=Q(e),y=uo("Drawer",H,N),P=u,A=z=>{s.value=!0,l=b.value?z.clientY:z.clientX,i=document.body.style.cursor,document.body.style.cursor=b.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",R),document.body.addEventListener("mouseleave",P),document.body.addEventListener("mouseup",u)},I=()=>{c!==null&&(window.clearTimeout(c),c=null),s.value?d.value=!0:c=window.setTimeout(()=>{d.value=!0},300)},k=()=>{c!==null&&(window.clearTimeout(c),c=null),d.value=!1},{doUpdateHeight:T,doUpdateWidth:W}=r,E=z=>{const{maxWidth:O}=e;if(O&&z>O)return O;const{minWidth:_}=e;return _&&z<_?_:z},j=z=>{const{maxHeight:O}=e;if(O&&z>O)return O;const{minHeight:_}=e;return _&&z<_?_:z};function R(z){var O,_;if(s.value)if(b.value){let K=((O=o.value)===null||O===void 0?void 0:O.offsetHeight)||0;const X=l-z.clientY;K+=e.placement==="bottom"?X:-X,K=j(K),T(K),l=z.clientY}else{let K=((_=o.value)===null||_===void 0?void 0:_.offsetWidth)||0;const X=l-z.clientX;K+=e.placement==="right"?X:-X,K=E(K),W(K),l=z.clientX}}function u(){s.value&&(l=0,s.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",R),document.body.removeEventListener("mouseup",u),document.body.removeEventListener("mouseleave",P))}He(()=>{e.show&&(t.value=!0)}),ho(()=>e.show,z=>{z||u()}),mo(()=>{u()});const g=C(()=>{const{show:z}=e,O=[[De,z]];return e.showMask||O.push([vo,e.onClickoutside,void 0,{capture:!0}]),O});function B(){var z;t.value=!1,(z=e.onAfterLeave)===null||z===void 0||z.call(e)}return fo(C(()=>e.blockScroll&&t.value)),Y(go,o),Y(bo,null),Y(po,null),{bodyRef:o,rtlEnabled:y,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:C(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:B,bodyDirectives:g,handleMousedownResizeTrigger:A,handleMouseenterResizeTrigger:I,handleMouseleaveResizeTrigger:k,isDragging:s,isHoverOnResizeTrigger:d}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Ae(h("div",{role:"none"},h(yo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>h(Xe,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ae(h("div",Ze(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?h("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?h("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):h(Ne,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[De,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Wo,cubicBezierEaseOut:Yo}=me;function qo({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Wo}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Yo}`}),v(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Go,cubicBezierEaseOut:Xo}=me;function Zo({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Go}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Xo}`}),v(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Jo,cubicBezierEaseOut:Qo}=me;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Jo}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Qo}`}),v(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:ot,cubicBezierEaseOut:tt}=me;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[v(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ot}`}),v(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),v(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),v(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const nt=v([m("drawer",`
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
 `,[et(),Zo(),rt(),qo(),w("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),w("native-scrollbar",[m("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),f("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[w("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),m("drawer-content-wrapper",`
 box-sizing: border-box;
 `),m("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[w("native-scrollbar",[m("drawer-body-content-wrapper",`
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
 `)]),w("right-placement",`
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
 `)]),w("left-placement",`
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
 `)]),w("top-placement",`
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
 `)]),w("bottom-placement",`
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
 `)])]),v("body",[v(">",[m("drawer-container",`
 position: fixed;
 `)])]),m("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[v("> *",`
 pointer-events: all;
 `)]),m("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[w("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Co({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),it=Object.assign(Object.assign({},V.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),lt=D({name:"Drawer",inheritAttrs:!1,props:it,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=Q(e),l=xo(),i=V("Drawer","-drawer",nt,Ko,e,t),c=F(e.defaultWidth),d=F(e.defaultHeight),s=de(te(e,"width"),c),b=de(te(e,"height"),d),N=C(()=>{const{placement:u}=e;return u==="top"||u==="bottom"?"":se(s.value)}),H=C(()=>{const{placement:u}=e;return u==="left"||u==="right"?"":se(b.value)}),y=u=>{const{onUpdateWidth:g,"onUpdate:width":B}=e;g&&L(g,u),B&&L(B,u),c.value=u},P=u=>{const{onUpdateHeight:g,"onUpdate:width":B}=e;g&&L(g,u),B&&L(B,u),d.value=u},A=C(()=>[{width:N.value,height:H.value},e.drawerStyle||""]);function I(u){const{onMaskClick:g,maskClosable:B}=e;B&&E(!1),g&&g(u)}function k(u){I(u)}const T=zo();function W(u){var g;(g=e.onEsc)===null||g===void 0||g.call(e),e.show&&e.closeOnEsc&&So(u)&&(T.value||E(!1))}function E(u){const{onHide:g,onUpdateShow:B,"onUpdate:show":z}=e;B&&L(B,u),z&&L(z,u),g&&!u&&L(g,u)}Y(Ge,{isMountedRef:l,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:E,doUpdateHeight:P,doUpdateWidth:y});const j=C(()=>{const{common:{cubicBezierEaseInOut:u,cubicBezierEaseIn:g,cubicBezierEaseOut:B},self:{color:z,textColor:O,boxShadow:_,lineHeight:K,headerPadding:X,footerPadding:ee,borderRadius:ge,bodyPadding:be,titleFontSize:pe,titleTextColor:ye,titleFontWeight:Ce,headerBorderBottom:xe,footerBorderTop:p,closeIconColor:S,closeIconColorHover:n,closeIconColorPressed:x,closeColorHover:$,closeColorPressed:ze,closeIconSize:we,closeSize:Ie,closeBorderRadius:a,resizableTriggerColorHover:ao}}=i.value;return{"--n-line-height":K,"--n-color":z,"--n-border-radius":ge,"--n-text-color":O,"--n-box-shadow":_,"--n-bezier":u,"--n-bezier-out":B,"--n-bezier-in":g,"--n-header-padding":X,"--n-body-padding":be,"--n-footer-padding":ee,"--n-title-text-color":ye,"--n-title-font-size":pe,"--n-title-font-weight":Ce,"--n-header-border-bottom":xe,"--n-footer-border-top":p,"--n-close-icon-color":S,"--n-close-icon-color-hover":n,"--n-close-icon-color-pressed":x,"--n-close-size":Ie,"--n-close-color-hover":$,"--n-close-color-pressed":ze,"--n-close-icon-size":we,"--n-close-border-radius":a,"--n-resize-trigger-color-hover":ao}}),R=r?re("drawer",void 0,j,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:A,handleOutsideClick:k,handleMaskClick:I,handleEsc:W,mergedTheme:i,cssVars:r?void 0:j,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,isMounted:l}},render(){const{mergedClsPrefix:e}=this;return h(Io,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Ae(h("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?h(Xe,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?h("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,h(Vo,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[wo,{zIndex:this.zIndex,enabled:this.show}]])}})}});function at(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:l,dividerColor:i,actionColor:c,scrollbarColor:d,scrollbarColorHover:s,invertedColor:b}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:c,headerColor:l,headerColorInverted:b,footerColor:c,footerColorInverted:b,headerBorderColor:i,headerBorderColorInverted:b,footerBorderColor:i,footerBorderColorInverted:b,siderBorderColor:i,siderBorderColorInverted:b,siderColor:l,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ue(r,d),siderToggleBarColorHover:Ue(r,s),__invertScrollbar:"true"}}const ve=$e({name:"Layout",common:Be,peers:{Scrollbar:qe},self:at});function st(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function dt(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:l,textColor1:i,fontSize:c,dividerColor:d,hoverColor:s,primaryColorHover:b}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:Re(r,{alpha:.1}),itemColorActiveHover:Re(r,{alpha:.1}),itemColorActiveCollapsed:Re(r,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:b,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:b,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:d},st("#BBB",r,"#FFF","#AAA"))}const ct=$e({name:"Menu",common:Be,peers:{Tooltip:Fo,Dropdown:Oo},self:dt}),eo=ce("n-layout-sider"),fe={type:String,default:"static"},ut=m("layout",`
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
 `),w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ht={embedded:Boolean,position:fe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},oo=ce("n-layout");function to(e){return D({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),ht),setup(t){const o=F(null),r=F(null),{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Q(t),c=V("Layout","-layout",ut,ve,t,l);function d(I,k){if(t.nativeScrollbar){const{value:T}=o;T&&(k===void 0?T.scrollTo(I):T.scrollTo(I,k))}else{const{value:T}=r;T&&T.scrollTo(I,k)}}Y(oo,t);let s=0,b=0;const N=I=>{var k;const T=I.target;s=T.scrollLeft,b=T.scrollTop,(k=t.onScroll)===null||k===void 0||k.call(t,I)};Je(()=>{if(t.nativeScrollbar){const I=o.value;I&&(I.scrollTop=b,I.scrollLeft=s)}});const H={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},y={scrollTo:d},P=C(()=>{const{common:{cubicBezierEaseInOut:I},self:k}=c.value;return{"--n-bezier":I,"--n-color":t.embedded?k.colorEmbedded:k.color,"--n-text-color":k.textColor}}),A=i?re("layout",C(()=>t.embedded?"e":""),P,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:H,mergedTheme:c,handleNativeElScroll:N,cssVars:i?void 0:P,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},y)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):h(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const mt=to(!1),vt=to(!0),ft=m("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),w("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),gt=Object.assign(Object.assign({},V.props),{inverted:Boolean,position:fe,bordered:Boolean}),bt=D({name:"LayoutFooter",props:gt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=V("Layout","-layout-footer",ft,ve,e,t),l=C(()=>{const{common:{cubicBezierEaseInOut:c},self:d}=r.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=d.footerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.footerBorderColorInverted):(s["--n-color"]=d.footerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.footerBorderColor),s}),i=o?re("layout-footer",C(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),pt=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),w("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),yt={position:fe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ct=D({name:"LayoutHeader",props:Object.assign(Object.assign({},V.props),yt),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=V("Layout","-layout-header",pt,ve,e,t),l=C(()=>{const{common:{cubicBezierEaseInOut:c},self:d}=r.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=d.headerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.headerBorderColorInverted):(s["--n-color"]=d.headerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.headerBorderColor),s}),i=o?re("layout-header",C(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),xt=m("layout-sider",`
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
`,[w("bordered",[f("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),f("left-placement",[w("bordered",[f("border",`
 right: 0;
 `)])]),w("right-placement",`
 justify-content: flex-start;
 `,[w("bordered",[f("border",`
 left: 0;
 `)]),w("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[v("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[v("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),w("collapsed",[m("layout-toggle-bar",[v("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
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
 `),v("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),v("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
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
 `),w("show-content",[m("layout-sider-scroll-container",{opacity:1})]),w("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),zt=D({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),wt=D({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(Qe,{clsPrefix:e},{default:()=>h(Mo,null)}))}}),It={position:fe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},St=D({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),It),setup(e){const t=Z(oo),o=F(null),r=F(null),l=F(e.defaultCollapsed),i=de(te(e,"collapsed"),l),c=C(()=>se(i.value?e.collapsedWidth:e.width)),d=C(()=>e.collapseMode!=="transform"?{}:{minWidth:se(e.width)}),s=C(()=>t?t.siderPlacement:"left");function b(R,u){if(e.nativeScrollbar){const{value:g}=o;g&&(u===void 0?g.scrollTo(R):g.scrollTo(R,u))}else{const{value:g}=r;g&&g.scrollTo(R,u)}}function N(){const{"onUpdate:collapsed":R,onUpdateCollapsed:u,onExpand:g,onCollapse:B}=e,{value:z}=i;u&&L(u,!z),R&&L(R,!z),l.value=!z,z?g&&L(g):B&&L(B)}let H=0,y=0;const P=R=>{var u;const g=R.target;H=g.scrollLeft,y=g.scrollTop,(u=e.onScroll)===null||u===void 0||u.call(e,R)};Je(()=>{if(e.nativeScrollbar){const R=o.value;R&&(R.scrollTop=y,R.scrollLeft=H)}}),Y(eo,{collapsedRef:i,collapseModeRef:te(e,"collapseMode")});const{mergedClsPrefixRef:A,inlineThemeDisabled:I}=Q(e),k=V("Layout","-layout-sider",xt,ve,e,A);function T(R){var u,g;R.propertyName==="max-width"&&(i.value?(u=e.onAfterLeave)===null||u===void 0||u.call(e):(g=e.onAfterEnter)===null||g===void 0||g.call(e))}const W={scrollTo:b},E=C(()=>{const{common:{cubicBezierEaseInOut:R},self:u}=k.value,{siderToggleButtonColor:g,siderToggleButtonBorder:B,siderToggleBarColor:z,siderToggleBarColorHover:O}=u,_={"--n-bezier":R,"--n-toggle-button-color":g,"--n-toggle-button-border":B,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":O};return e.inverted?(_["--n-color"]=u.siderColorInverted,_["--n-text-color"]=u.textColorInverted,_["--n-border-color"]=u.siderBorderColorInverted,_["--n-toggle-button-icon-color"]=u.siderToggleButtonIconColorInverted,_.__invertScrollbar=u.__invertScrollbar):(_["--n-color"]=u.siderColor,_["--n-text-color"]=u.textColor,_["--n-border-color"]=u.siderBorderColor,_["--n-toggle-button-icon-color"]=u.siderToggleButtonIconColor),_}),j=I?re("layout-sider",C(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:A,mergedTheme:k,styleMaxWidth:c,mergedCollapsed:i,scrollContainerStyle:d,siderPlacement:s,handleNativeElScroll:P,handleTransitionend:T,handleTriggerClick:N,inlineThemeDisabled:I,cssVars:E,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender},W)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:se(this.width)}]},this.nativeScrollbar?h("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?h(zt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(wt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${t}-layout-sider__border`}):null)}}),ue=ce("n-menu"),Fe=ce("n-submenu"),Oe=ce("n-menu-item-group"),We=[v("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[v("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ye=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[v("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Rt=v([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[v("&::before","display: none;"),w("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[w("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[v("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),w("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[v("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[ne("selected, child-active",[v("&:focus-within",Ye)]),w("selected",[J(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[v("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[J(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[v("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",Ye)]),m("menu-item-content-header",[v("a","color: var(--n-item-text-color-horizontal);")])])]),ne("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),w("collapsed",[m("menu-item-content",[w("selected",[v("&::before",`
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
 `),w("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),w("collapsed",[f("arrow","transform: rotate(0);")]),w("selected",[v("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[v("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),w("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[v("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[ne("selected, child-active",[v("&:focus-within",We)]),w("selected",[J(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[v("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[J(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[v("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[J(null,[v("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,We)]),f("icon",`
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
 `)])]),m("menu-tooltip",[v("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,t){return[w("hover",e,t),v("&:hover",e,t)]}const ro=D({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Z(ue);return{menuProps:t,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:l,expandIcon:i}}=this,c=o?o(t.rawNode):oe(this.icon);return h("div",{onClick:d=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):oe(this.title),this.extra||l?h("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):oe(this.extra)):null),this.showArrow?h(Qe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):h(Do,null)}):null)}}),he=8;function Me(e){const t=Z(ue),{props:o,mergedCollapsedRef:r}=t,l=Z(Fe,null),i=Z(Oe,null),c=C(()=>o.mode==="horizontal"),d=C(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var y;return Math.max((y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize,o.iconSize)}),b=C(()=>{var y;return!c.value&&e.root&&r.value&&(y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize}),N=C(()=>{if(c.value)return;const{collapsedWidth:y,indent:P,rootIndent:A}=o,{root:I,isGroup:k}=e,T=A===void 0?P:A;return I?r.value?y/2-s.value/2:T:i&&typeof i.paddingLeftRef.value=="number"?P/2+i.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(k?P/2:P)+l.paddingLeftRef.value:0}),H=C(()=>{const{collapsedWidth:y,indent:P,rootIndent:A}=o,{value:I}=s,{root:k}=e;return c.value||!k||!r.value?he:(A===void 0?P:A)+I+he-(y+I)/2});return{dropdownPlacement:d,activeIconSize:b,maxIconSize:s,paddingLeft:N,iconMarginRight:H,NMenu:t,NSubmenu:l}}const Le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},kt=D({name:"MenuDivider",setup(){const e=Z(ue),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:h("div",{class:`${t.value}-menu-divider`})}}),no=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ht=Ee(no),At=D({name:"MenuOption",props:no,setup(e){const t=Me(e),{NSubmenu:o,NMenu:r}=t,{props:l,mergedClsPrefixRef:i,mergedCollapsedRef:c}=r,d=o?o.mergedDisabledRef:{value:!1},s=C(()=>d.value||e.disabled);function b(H){const{onClick:y}=e;y&&y(H)}function N(H){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),b(H))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:l,dropdownEnabled:Te(()=>e.root&&c.value&&l.mode!=="horizontal"&&!s.value),selected:Te(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:l}}=this,i=l==null?void 0:l(o.rawNode);return h("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),h(Lo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):oe(this.title),trigger:()=>h(ro,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),io=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Tt=Ee(io),Pt=D({name:"MenuOptionGroup",props:io,setup(e){Y(Fe,null);const t=Me(e);Y(Oe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Z(ue);return function(){const{value:l}=o,i=t.paddingLeft.value,{nodeProps:c}=r,d=c==null?void 0:c(e.tmNode.rawNode);return h("div",{class:`${l}-menu-item-group`,role:"group"},h("div",Object.assign({},d,{class:[`${l}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),oe(e.title),e.extra?h(ko,null," ",oe(e.extra)):null),h("div",null,e.tmNodes.map(s=>je(s,r))))}}});function Pe(e){return e.type==="divider"||e.type==="render"}function _t(e){return e.type==="divider"}function je(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Pe(o))return _t(o)?h(kt,Object.assign({key:e.key},o.props)):null;const{labelField:l}=t,{key:i,level:c,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:c,root:c===0,isGroup:d});return e.children?e.isGroup?h(Pt,ke(s,Tt,{tmNode:e,tmNodes:e.children,key:i})):h(_e,ke(s,$t,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):h(At,ke(s,Ht,{key:i,tmNode:e}))}const lo=Object.assign(Object.assign({},Le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),$t=Ee(lo),_e=D({name:"Submenu",props:lo,setup(e){const t=Me(e),{NMenu:o,NSubmenu:r}=t,{props:l,mergedCollapsedRef:i,mergedThemeRef:c}=o,d=C(()=>{const{disabled:y}=e;return r!=null&&r.mergedDisabledRef.value||l.disabled?!0:y}),s=F(!1);Y(Fe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),Y(Oe,null);function b(){const{onClick:y}=e;y&&y()}function N(){d.value||(i.value||o.toggleExpand(e.internalKey),b())}function H(y){s.value=y}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:Te(()=>{var y;return(y=e.virtualChildActive)!==null&&y!==void 0?y:o.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>l.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!d.value&&(l.mode==="horizontal"||i.value)),handlePopoverShowChange:H,handleClick:N}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,l=()=>{const{isHorizontal:c,paddingLeft:d,collapsed:s,mergedDisabled:b,maxIconSize:N,activeIconSize:H,title:y,childActive:P,icon:A,handleClick:I,menuProps:{nodeProps:k},dropdownShow:T,iconMarginRight:W,tmNode:E,mergedClsPrefix:j,isEllipsisPlaceholder:R,extra:u}=this,g=k==null?void 0:k(E.rawNode);return h("div",Object.assign({},g,{class:[`${j}-menu-item`,g==null?void 0:g.class],role:"menuitem"}),h(ro,{tmNode:E,paddingLeft:d,collapsed:s,disabled:b,iconMarginRight:W,maxIconSize:N,activeIconSize:H,title:y,extra:u,showArrow:!c,childActive:P,clsPrefix:j,icon:A,hover:T,onClick:I,isEllipsisPlaceholder:R}))},i=()=>h(Ho,null,{default:()=>{const{tmNodes:c,collapsed:d}=this;return d?null:h("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>je(s,this.menuProps)))}});return this.root?h(jo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>h("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:i())}):h("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),i())}}),Bt=Object.assign(Object.assign({},V.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Nt=D({name:"Menu",inheritAttrs:!1,props:Bt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Q(e),r=V("Menu","-menu",Rt,ct,e,t),l=Z(eo,null),i=C(()=>{var p;const{collapsed:S}=e;if(S!==void 0)return S;if(l){const{collapseModeRef:n,collapsedRef:x}=l;if(n.value==="width")return(p=x.value)!==null&&p!==void 0?p:!1}return!1}),c=C(()=>{const{keyField:p,childrenField:S,disabledField:n}=e;return Se(e.items||e.options,{getIgnored(x){return Pe(x)},getChildren(x){return x[S]},getDisabled(x){return x[n]},getKey(x){var $;return($=x[p])!==null&&$!==void 0?$:x.name}})}),d=C(()=>new Set(c.value.treeNodes.map(p=>p.key))),{watchProps:s}=e,b=F(null);s!=null&&s.includes("defaultValue")?He(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const N=te(e,"value"),H=de(N,b),y=F([]),P=()=>{y.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(H.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?He(P):P();const A=so(e,["expandedNames","expandedKeys"]),I=de(A,y),k=C(()=>c.value.treeNodes),T=C(()=>c.value.getPath(H.value).keyPath);Y(ue,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:H,mergedExpandedKeysRef:I,activePathRef:T,mergedClsPrefixRef:t,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:W,toggleExpand:j});function W(p,S){const{"onUpdate:value":n,onUpdateValue:x,onSelect:$}=e;x&&L(x,p,S),n&&L(n,p,S),$&&L($,p,S),b.value=p}function E(p){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:n,onExpandedNamesChange:x,onOpenNamesChange:$}=e;S&&L(S,p),n&&L(n,p),x&&L(x,p),$&&L($,p),y.value=p}function j(p){const S=Array.from(I.value),n=S.findIndex(x=>x===p);if(~n)S.splice(n,1);else{if(e.accordion&&d.value.has(p)){const x=S.findIndex($=>d.value.has($));x>-1&&S.splice(x,1)}S.push(p)}E(S)}const R=p=>{const S=c.value.getPath(p??H.value,{includeSelf:!1}).keyPath;if(!S.length)return;const n=Array.from(I.value),x=new Set([...n,...S]);e.accordion&&d.value.forEach($=>{x.has($)&&!S.includes($)&&x.delete($)}),E(Array.from(x))},u=C(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:S},self:n}=r.value,{borderRadius:x,borderColorHorizontal:$,fontSize:ze,itemHeight:we,dividerColor:Ie}=n,a={"--n-divider-color":Ie,"--n-bezier":S,"--n-font-size":ze,"--n-border-color-horizontal":$,"--n-border-radius":x,"--n-item-height":we};return p?(a["--n-group-text-color"]=n.groupTextColorInverted,a["--n-color"]=n.colorInverted,a["--n-item-text-color"]=n.itemTextColorInverted,a["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,a["--n-item-text-color-active"]=n.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=n.itemIconColorInverted,a["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=n.arrowColorInverted,a["--n-arrow-color-hover"]=n.arrowColorHoverInverted,a["--n-arrow-color-active"]=n.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=n.itemColorHoverInverted,a["--n-item-color-active"]=n.itemColorActiveInverted,a["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=n.groupTextColor,a["--n-color"]=n.color,a["--n-item-text-color"]=n.itemTextColor,a["--n-item-text-color-hover"]=n.itemTextColorHover,a["--n-item-text-color-active"]=n.itemTextColorActive,a["--n-item-text-color-child-active"]=n.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,a["--n-item-icon-color"]=n.itemIconColor,a["--n-item-icon-color-hover"]=n.itemIconColorHover,a["--n-item-icon-color-active"]=n.itemIconColorActive,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=n.arrowColor,a["--n-arrow-color-hover"]=n.arrowColorHover,a["--n-arrow-color-active"]=n.arrowColorActive,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,a["--n-arrow-color-child-active"]=n.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,a["--n-item-color-hover"]=n.itemColorHover,a["--n-item-color-active"]=n.itemColorActive,a["--n-item-color-active-hover"]=n.itemColorActiveHover,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),a}),g=o?re("menu",C(()=>e.inverted?"a":"b"),u,e):void 0,B=Ao(),z=F(null),O=F(null);let _=!0;const K=()=>{var p;_?_=!1:(p=z.value)===null||p===void 0||p.sync({showAllItemsBeforeCalculate:!0})};function X(){return document.getElementById(B)}const ee=F(-1);function ge(p){ee.value=e.options.length-p}function be(p){p||(ee.value=-1)}const pe=C(()=>{const p=ee.value;return{children:p===-1?[]:e.options.slice(p)}}),ye=C(()=>{const{childrenField:p,disabledField:S,keyField:n}=e;return Se([pe.value],{getIgnored(x){return Pe(x)},getChildren(x){return x[p]},getDisabled(x){return x[S]},getKey(x){var $;return($=x[n])!==null&&$!==void 0?$:x.name}})}),Ce=C(()=>Se([{}]).treeNodes[0]);function xe(){var p;if(ee.value===-1)return h(_e,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ce.value,domId:B,isEllipsisPlaceholder:!0});const S=ye.value.treeNodes[0],n=T.value,x=!!(!((p=S.children)===null||p===void 0)&&p.some($=>n.includes($.key)));return h(_e,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:x,tmNode:S,domId:B,rawNodes:S.rawNode.children||[],tmNodes:S.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:A,uncontrolledExpanededKeys:y,mergedExpandedKeys:I,uncontrolledValue:b,mergedValue:H,activePath:T,tmNodes:k,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:u,themeClass:g==null?void 0:g.themeClass,overflowRef:z,counterRef:O,updateCounter:()=>{},onResize:K,onUpdateOverflow:be,onUpdateCount:ge,renderCounter:xe,getCounter:X,onRender:g==null?void 0:g.onRender,showOption:R,deriveResponsiveState:K}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r==null||r();const l=()=>this.tmNodes.map(s=>je(s,this.$props)),c=t==="horizontal"&&this.responsive,d=()=>h("div",Ze(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,c&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),c?h(co,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return c?h(To,{onResize:this.onResize},{default:d}):d()}}),U=e=>({label:()=>h(Po,{to:{name:e.route,params:e.params||{}},exact:!0},{default:()=>e.label}),key:e.key,icon:e.iconName?M(e.iconName):void 0,children:e.children,type:e.children??"item"}),Dt=D({__name:"AdminLayout",setup(e){const t=_o(),{screenSize:o}=Eo(),r=F(!0),l=F(!1),i=F(!1),c=F(t.name),d=[U({label:"Dashboard",key:"Dashboard",route:"Dashboard",iconName:"element-equal"}),{label:"Administración",key:"administration",icon:M("cpu-setting"),children:[{type:"group",label:"General",key:"people-general",children:[U({label:"Tipos de documentos",key:"DocumentType",route:"DocumentType",iconName:"tag"}),U({label:"Tipos de estudiantes",key:"StudentType",route:"StudentType",iconName:"tag"}),U({label:"Metodos de pago",key:"PaymentType",route:"PaymentType",iconName:"tag"})]},{type:"group",label:"Personas",key:"people",children:[U({label:"Estudiantes",key:"Student",route:"Student",iconName:"personalcard"}),U({label:"Docentes",route:"Teacher",key:"Teacher",iconName:"teacher"})]},{type:"group",label:"Académico",key:"academic",children:[U({label:"Periodos académicos",key:"Period",route:"Period",iconName:"calendar-2"}),U({label:"Planes de estudio",key:"Curriculum",route:"Curriculum",iconName:"book-1"}),U({label:"Areas",route:"Area",key:"Area",iconName:"book-square"}),U({label:"Modulos",key:"Module",route:"Module",iconName:"bookmark"}),U({label:"Cursos",key:"Course",route:"Course",iconName:"book-saved"})]},{type:"group",label:"Infraestructura",key:"infrastructure",children:[U({label:"Laboratorios",route:"Laboratory",key:"Laboratory",iconName:"devices"})]},{type:"group",label:"Financiero",key:"financial",children:[U({label:"Costos",key:"Price",route:"Price",iconName:"moneys"})]}]},{label:"Matriculas",key:"enrollments",icon:M("folder"),children:[U({label:"Matriculas",key:"enrollment",route:"Enrollment",iconName:"folder-add"}),{label:"Matriculas virtuales",key:"virtual-enrollments",icon:M("folder-cloud")},{label:"Convalidaciones",key:"validations",icon:M("folder-connection")}]},{label:"Notas",key:"grades",icon:M("archive-book"),children:[{label:"Ingreso de notas",key:"grades-entry",icon:M("archive-add")},{label:"Rectificación de notas",key:"grades-rectification",icon:M("archive-slash")}]},{label:"Carga de académica",key:"academic-load",icon:M("archive"),children:[U({label:"Apertura de grupos",key:"Group",route:"Group",iconName:"calendar-add"})]},{label:"Reportes",key:"reports",icon:M("chart-21"),children:[{label:"Reporte de matriculas",key:"enrollments-report",icon:M("chart-21")},{label:"Reporte de notas",key:"grades-report",icon:M("chart-21")},{label:"Reporte de carga académica",key:"academic-load-report",icon:M("chart-21")}]},{label:"Seguridad",key:"security",icon:M("shield"),children:[{type:"group",label:"Administradores",key:"security-admins",children:[{label:"Usuarios Administradores",key:"security-admins-users",icon:M("security-user")},{label:"Roles Administradores",key:"security-admins-roles",icon:M("key-square")}]},{type:"group",label:"Docentes",key:"security-teachers",children:[{label:"Usuarios Docentes",key:"security-teachers-users",icon:M("security-user")},{label:"Roles Docentes",key:"security-teachers-roles",icon:M("key-square")}]},{type:"group",label:"Usuarios",key:"security-students",children:[{label:"Usuarios Estudiantes",key:"security-students-users",icon:M("security-user")},{label:"Roles Estudiantes",key:"security-students-roles",icon:M("key-square")}]}]}];return(s,b)=>{const N=Nt,H=St,y=lt,P=No,A=Ct,I=$o("router-view"),k=vt,T=mt,W=bt;return le(),ie(T,{position:"absolute",style:{"min-height":"100vh",position:"relative",overflow:"hidden"}},{default:q(()=>[G(T,{"has-sider":"",position:"absolute",style:{top:"0px",bottom:"48px"}},{default:q(()=>[ae(o)!=="sm"?(le(),ie(H,{key:0,bordered:"",style:{height:"100%","background-color":"#f0f2f5"},"collapse-mode":"width",collapsed:l.value,"onUpdate:collapsed":b[0]||(b[0]=E=>l.value=E),width:280,"native-scrollbar":!1,inverted:i.value,position:ae(o)==="sm"?"absolute":"static","collapsed-width":ae(o)==="sm"?0:64},{default:q(()=>[G(N,{inverted:i.value,"collapsed-width":64,"collapsed-icon-size":22,options:d,"default-value":c.value},null,8,["inverted","default-value"])]),_:1},8,["collapsed","inverted","position","collapsed-width"])):Ke("",!0),ae(o)==="sm"?(le(),ie(y,{key:1,show:r.value,"onUpdate:show":b[2]||(b[2]=E=>r.value=E),width:280,position:"absolute",style:{top:"0px",bottom:"0px"},placement:"left"},{default:q(()=>[G(N,{inverted:i.value,"collapsed-width":64,"collapsed-icon-size":22,options:d,modelValue:c.value,"onUpdate:modelValue":b[1]||(b[1]=E=>c.value=E)},null,8,["inverted","modelValue"])]),_:1},8,["show"])):Ke("",!0),G(T,null,{default:q(()=>[G(A,{bordered:"",style:{height:"48px",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 8px"}},{default:q(()=>[ae(o)==="sm"?(le(),ie(P,{key:0,onClick:b[3]||(b[3]=E=>r.value=!r.value)},{default:q(()=>[G(Ve,{icon:"",size:"24","icon-name":"grid-4"})]),_:1})):(le(),ie(P,{key:1,quaternary:"",onClick:b[4]||(b[4]=E=>l.value=!l.value)},{default:q(()=>[G(Ve,{size:"24","icon-name":l.value?"grid-9":"grid-4"},null,8,["icon-name"])]),_:1}))]),_:1}),G(k,null,{default:q(()=>[G(I)]),_:1})]),_:1})]),_:1}),G(W,{bordered:"",position:"absolute",style:{height:"48px",display:"flex","justify-content":"end","align-items":"center",padding:"0 16px"}},{default:q(()=>b[5]||(b[5]=[Bo(" v1.0 ")])),_:1})]),_:1})}}});export{Dt as default};
