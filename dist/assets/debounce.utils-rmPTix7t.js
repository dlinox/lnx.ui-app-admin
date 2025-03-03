import{a as se,O as de,z as I,B as t,aF as N,x as O,A as d,U,D as A,d as ce,u as ue,az as he,r as P,G as be,e as z,au as m,aO as D,aw as c,I as fe,aZ as L,h as a,aB as p,aI as ge,aM as ve,K as j}from"./index-Bqe-vxMq.js";import{u as me}from"./get-C8gX6CwU.js";const pe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function we(e){const{primaryColor:l,opacityDisabled:r,borderRadius:o,textColor3:s}=e;return Object.assign(Object.assign({},pe),{iconColor:s,textColor:"white",loadingColor:l,opacityDisabled:r,railColor:"rgba(0, 0, 0, .14)",railColorActive:l,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${de(l,{alpha:.2})}`})}const xe={name:"Switch",common:se,self:we},ye=I("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),I("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[N({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),O("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[d("rubber-band",[d("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[O("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[O("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[N()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),d("active",[t("rail","background-color: var(--n-rail-color-active);")]),d("loading",[t("rail",`
 cursor: wait;
 `)]),d("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ke=Object.assign(Object.assign({},A.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Be=ce({name:"Switch",props:ke,slots:Object,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:l,inlineThemeDisabled:r}=ue(e),o=A("Switch","-switch",ye,xe,e,l),s=he(e),{mergedSizeRef:y,mergedDisabledRef:g}=s,k=P(e.defaultValue),R=be(e,"value"),v=me(R,k),S=z(()=>v.value===e.checkedValue),w=P(!1),n=P(!1),u=z(()=>{const{railStyle:i}=e;if(i)return i({focused:n.value,checked:S.value})});function h(i){const{"onUpdate:value":$,onChange:_,onUpdateValue:V}=e,{nTriggerFormInput:F,nTriggerFormChange:W}=s;$&&j($,i),V&&j(V,i),_&&j(_,i),k.value=i,F(),W()}function E(){const{nTriggerFormFocus:i}=s;i()}function X(){const{nTriggerFormBlur:i}=s;i()}function Y(){e.loading||g.value||(v.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue))}function G(){n.value=!0,E()}function Z(){n.value=!1,X(),w.value=!1}function q(i){e.loading||g.value||i.key===" "&&(v.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue),w.value=!1)}function J(i){e.loading||g.value||i.key===" "&&(i.preventDefault(),w.value=!0)}const K=z(()=>{const{value:i}=y,{self:{opacityDisabled:$,railColor:_,railColorActive:V,buttonBoxShadow:F,buttonColor:W,boxShadowFocus:Q,loadingColor:ee,textColor:te,iconColor:ie,[m("buttonHeight",i)]:b,[m("buttonWidth",i)]:ne,[m("buttonWidthPressed",i)]:ae,[m("railHeight",i)]:f,[m("railWidth",i)]:C,[m("railBorderRadius",i)]:oe,[m("buttonBorderRadius",i)]:re},common:{cubicBezierEaseInOut:le}}=o.value;let M,T,H;return B?(M=`calc((${f} - ${b}) / 2)`,T=`max(${f}, ${b})`,H=`max(${C}, calc(${C} + ${b} - ${f}))`):(M=D((c(f)-c(b))/2),T=D(Math.max(c(f),c(b))),H=c(f)>c(b)?C:D(c(C)+c(b)-c(f))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":W,"--n-button-width":ne,"--n-button-width-pressed":ae,"--n-button-height":b,"--n-height":T,"--n-offset":M,"--n-opacity-disabled":$,"--n-rail-border-radius":oe,"--n-rail-color":_,"--n-rail-color-active":V,"--n-rail-height":f,"--n-rail-width":C,"--n-width":H,"--n-box-shadow-focus":Q,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),x=r?fe("switch",z(()=>y.value[0]),K,e):void 0;return{handleClick:Y,handleBlur:Z,handleFocus:G,handleKeyup:q,handleKeydown:J,mergedRailStyle:u,pressed:w,mergedClsPrefix:l,mergedValue:v,checked:S,mergedDisabled:g,cssVars:r?void 0:K,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:l,checked:r,mergedRailStyle:o,onRender:s,$slots:y}=this;s==null||s();const{checked:g,unchecked:k,icon:R,"checked-icon":v,"unchecked-icon":S}=y,w=!(L(R)&&L(v)&&L(S));return a("div",{role:"switch","aria-checked":r,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,r&&`${e}-switch--active`,l&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},p(g,n=>p(k,u=>n||u?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),n),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),u)):null)),a("div",{class:`${e}-switch__button`},p(R,n=>p(v,u=>p(S,h=>a(ge,null,{default:()=>this.loading?a(ve,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(u||n)?a("div",{class:`${e}-switch__button-icon`,key:u?"checked-icon":"icon"},u||n):!this.checked&&(h||n)?a("div",{class:`${e}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||n):null})))),p(g,n=>n&&a("div",{key:"checked",class:`${e}-switch__checked`},n)),p(k,n=>n&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});function Re(e,l){let r;return function(...o){r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,o)},l)}}export{Be as _,Re as d};
