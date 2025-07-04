import{a as C,z as r,B as c,x as o,d as $,u as S,G as u,f as b,e as y,K as E,h as i,_ as w}from"./index-DRRg_eBM.js";function z(t){const{textColor1:e,textColor2:l,fontWeightStrong:h,fontSize:g}=t;return{fontSize:g,titleTextColor:e,textColor:l,titleFontWeight:h}}const R={common:C,self:z},T=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[c("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),c("description",[o("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),c("content",[o("&:not(:first-child)",`
 margin-top: 12px;
 `)]),c("footer",[o("&:not(:first-child)",`
 margin-top: 12px;
 `)]),c("action",[o("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),j=Object.assign(Object.assign({},u.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),B=$({name:"Thing",props:j,slots:Object,setup(t,{slots:e}){const{mergedClsPrefixRef:l,inlineThemeDisabled:h,mergedRtlRef:g}=S(t),s=u("Thing","-thing",T,R,t,l),f=b("Thing",g,l),v=y(()=>{const{self:{titleTextColor:d,textColor:n,titleFontWeight:x,fontSize:m},common:{cubicBezierEaseInOut:_}}=s.value;return{"--n-bezier":_,"--n-font-size":m,"--n-text-color":n,"--n-title-font-weight":x,"--n-title-text-color":d}}),a=h?E("thing",void 0,v,t):void 0;return()=>{var d;const{value:n}=l,x=f?f.value:!1;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),i("div",{class:[`${n}-thing`,a==null?void 0:a.themeClass,x&&`${n}-thing--rtl`],style:h?void 0:v.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}});export{B as _};
