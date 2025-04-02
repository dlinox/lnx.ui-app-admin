import{a as S,x as m,z as u,C,A as h,d as x,u as T,D as g,e as f,I as k,r as w,w as $,h as r,aO as R,T as _,aP as O,aw as B}from"./index-B1moMmGf.js";import{u as P}from"./DataTable.types-BIkVFYV7.js";function j(e){const{opacityDisabled:a,heightTiny:n,heightSmall:t,heightMedium:l,heightLarge:s,heightHuge:c,primaryColor:o,fontSize:i}=e;return{fontSize:i,textColor:o,sizeTiny:n,sizeSmall:t,sizeMedium:l,sizeLarge:s,sizeHuge:c,color:o,opacitySpinning:a}}const I={name:"Spin",common:S,self:j},N=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),u("spin-container",`
 position: relative;
 `,[u("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[C()])]),u("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),u("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),u("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),u("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),V={small:20,medium:18,large:16},W=Object.assign(Object.assign({},g.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),L=x({name:"Spin",props:W,slots:Object,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:n}=T(e),t=g("Spin","-spin",N,I,e,a),l=f(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:d},self:p}=t.value,{opacitySpinning:y,color:v,textColor:b}=p,z=typeof i=="number"?O(i):p[B("size",i)];return{"--n-bezier":d,"--n-opacity-spinning":y,"--n-size":z,"--n-color":v,"--n-text-color":b}}),s=n?k("spin",f(()=>{const{size:i}=e;return typeof i=="number"?String(i):i[0]}),l,e):void 0,c=P(e,["spinning","show"]),o=w(!1);return $(i=>{let d;if(c.value){const{delay:p}=e;if(p){d=window.setTimeout(()=>{o.value=!0},p),i(()=>{clearTimeout(d)});return}}o.value=c.value}),{mergedClsPrefix:a,active:o,mergedStrokeWidth:f(()=>{const{strokeWidth:i}=e;if(i!==void 0)return i;const{size:d}=e;return V[typeof d=="number"?"medium":d]}),cssVars:n?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,a;const{$slots:n,mergedClsPrefix:t,description:l}=this,s=n.icon&&this.rotate,c=(l||n.description)&&r("div",{class:`${t}-spin-description`},l||((e=n.description)===null||e===void 0?void 0:e.call(n))),o=n.icon?r("div",{class:[`${t}-spin-body`,this.themeClass]},r("div",{class:[`${t}-spin`,s&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),c):r("div",{class:[`${t}-spin-body`,this.themeClass]},r(R,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),c);return(a=this.onRender)===null||a===void 0||a.call(this),n.default?r("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},r("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),r(_,{name:"fade-in-transition"},{default:()=>this.active?o:null})):o}});export{L as _};
