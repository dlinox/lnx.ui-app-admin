import{a as g,z as m,V as c,B as l,A as r,d as p,u as x,D as h,e as b,I as C,h as s,_}from"./index-B-obX2sB.js";function $(i){const{textColor1:t,dividerColor:o,fontWeightStrong:d}=i;return{textColor:t,color:o,fontWeight:d}}const w={name:"Divider",common:g,self:$},z=m("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[l("line",[r("left",{width:"28px"})])]),r("title-position-right",[l("line",[r("right",{width:"28px"})])]),r("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[l("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),y=Object.assign(Object.assign({},h.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),P=p({name:"Divider",props:y,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=x(i),d=h("Divider","-divider",z,w,i,t),a=b(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:v,textColor:u,fontWeight:f}}=d.value;return{"--n-bezier":e,"--n-color":v,"--n-text-color":u,"--n-font-weight":f}}),n=o?C("divider",void 0,a,i):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{$slots:t,titlePlacement:o,vertical:d,dashed:a,cssVars:n,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),s("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:d,[`${e}-divider--no-title`]:!t.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${o}`]:t.default&&o}],style:n},d?null:s("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!d&&t.default?s(_,null,s("div",{class:`${e}-divider__title`},this.$slots),s("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});export{P as _};
