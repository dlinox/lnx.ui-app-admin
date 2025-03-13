import{d as A,h as f,a as Y,z as x,A as P,B as g,x as p,W as ce,V as ae,u as H,r as D,e as N,D as L,p as ue,f as q,I as ee,Q as pe,M as W,aJ as me,G as se,n as fe,v as ge,a0 as be,a1 as ve,Z as he,i as xe,aK as Ce,ar as oe,U as _e,aL as ye,O as T,aD as U,aM as we,aN as ze,aw as J,g as Se,a8 as Pe,a9 as Q,aj as X,aa as w,a6 as k,ac as z,ae as te,_ as re,az as Ie,ao as O,ag as Re,al as $e,am as Ne,ab as Ee}from"./index-BDy3jz-R.js";import{u as Te}from"./get-I814HMgj.js";import{h as le}from"./DataTable.types-DKc2i3jV.js";import{C as ke}from"./Dropdown-DschnT-y.js";import{e as Me,f as Ve,g as De}from"./EditEnrollmentGroup.vue_vue_type_script_setup_true_lang-0bhR_yRn.js";import{r as Fe}from"./icon.utils-BzaQiRL0.js";import{c as Ae,_ as Be,a as Le}from"./Col-C2AyWxkb.js";import{a as Oe,b as je}from"./FormItem-DAU9UqDA.js";const We=A({name:"ChevronLeft",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function Ue(e){const{fontWeight:o,textColor1:a,textColor2:t,textColorDisabled:s,dividerColor:r,fontSize:l}=e;return{titleFontSize:l,titleFontWeight:o,dividerColor:r,titleTextColor:a,titleTextColorDisabled:s,fontSize:l,textColor:t,arrowColor:t,arrowColorDisabled:s,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const He={name:"Collapse",common:Y,self:Ue},qe=x("collapse","width: 100%;",[x("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[P("disabled",[g("header","cursor: not-allowed;",[g("header-main",`
 color: var(--n-title-text-color-disabled);
 `),x("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),x("collapse-item","margin-left: 32px;"),p("&:first-child","margin-top: 0;"),p("&:first-child >",[g("header","padding-top: 0;")]),P("left-arrow-placement",[g("header",[x("collapse-item-arrow","margin-right: 4px;")])]),P("right-arrow-placement",[g("header",[x("collapse-item-arrow","margin-left: 4px;")])]),g("content-wrapper",[g("content-inner","padding-top: 16px;"),ce({duration:"0.15s"})]),P("active",[g("header",[P("active",[x("collapse-item-arrow","transform: rotate(90deg);")])])]),p("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),ae("disabled",[P("trigger-area-main",[g("header",[g("header-main","cursor: pointer;"),x("collapse-item-arrow","cursor: default;")])]),P("trigger-area-arrow",[g("header",[x("collapse-item-arrow","cursor: pointer;")])]),P("trigger-area-extra",[g("header",[g("header-extra","cursor: pointer;")])])]),g("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[g("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),g("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),x("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),Ke=Object.assign(Object.assign({},L.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ie=pe("n-collapse"),zo=A({name:"Collapse",props:Ke,slots:Object,setup(e,{slots:o}){const{mergedClsPrefixRef:a,inlineThemeDisabled:t,mergedRtlRef:s}=H(e),r=D(e.defaultExpandedNames),l=N(()=>e.expandedNames),u=Te(l,r),h=L("Collapse","-collapse",qe,He,e,a);function v(C){const{"onUpdate:expandedNames":m,onUpdateExpandedNames:y,onExpandedNamesChange:$}=e;y&&W(y,C),m&&W(m,C),$&&W($,C),r.value=C}function c(C){const{onItemHeaderClick:m}=e;m&&W(m,C)}function n(C,m,y){const{accordion:$}=e,{value:M}=u;if($)C?(v([m]),c({name:m,expanded:!0,event:y})):(v([]),c({name:m,expanded:!1,event:y}));else if(!Array.isArray(M))v([m]),c({name:m,expanded:!0,event:y});else{const i=M.slice(),d=i.findIndex(I=>m===I);~d?(i.splice(d,1),v(i),c({name:m,expanded:!1,event:y})):(i.push(m),v(i),c({name:m,expanded:!0,event:y}))}}ue(ie,{props:e,mergedClsPrefixRef:a,expandedNamesRef:u,slots:o,toggleItem:n});const b=q("Collapse",s,a),S=N(()=>{const{common:{cubicBezierEaseInOut:C},self:{titleFontWeight:m,dividerColor:y,titlePadding:$,titleTextColor:M,titleTextColorDisabled:i,textColor:d,arrowColor:I,fontSize:V,titleFontSize:E,arrowColorDisabled:F,itemMargin:B}}=h.value;return{"--n-font-size":V,"--n-bezier":C,"--n-text-color":d,"--n-divider-color":y,"--n-title-padding":$,"--n-title-font-size":E,"--n-title-text-color":M,"--n-title-text-color-disabled":i,"--n-title-font-weight":m,"--n-arrow-color":I,"--n-arrow-color-disabled":F,"--n-item-margin":B}}),_=t?ee("collapse",void 0,S,e):void 0;return{rtlEnabled:b,mergedTheme:h,mergedClsPrefix:a,cssVars:t?void 0:S,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Ge=A({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:me(se(e,"show"))}},render(){return f(be,null,{default:()=>{const{show:e,displayDirective:o,onceTrue:a,clsPrefix:t}=this,s=o==="show"&&a,r=f("div",{class:`${t}-collapse-item__content-wrapper`},f("div",{class:`${t}-collapse-item__content-inner`},this.$slots));return s?fe(r,[[ge,e]]):e?r:null}})}}),Ze={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},So=A({name:"CollapseItem",props:Ze,setup(e){const{mergedRtlRef:o}=H(e),a=ve(),t=he(()=>{var n;return(n=e.name)!==null&&n!==void 0?n:a}),s=xe(ie);s||Ce("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:l,mergedClsPrefixRef:u,slots:h}=s,v=N(()=>{const{value:n}=r;if(Array.isArray(n)){const{value:b}=t;return!~n.findIndex(S=>S===b)}else if(n){const{value:b}=t;return b!==n}return!0});return{rtlEnabled:q("Collapse",o,u),collapseSlots:h,randomName:a,mergedClsPrefix:u,collapsed:v,triggerAreas:se(l,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:n}=e;return n||l.displayDirective}),arrowPlacement:N(()=>l.arrowPlacement),handleClick(n){let b="main";le(n,"arrow")&&(b="arrow"),le(n,"extra")&&(b="extra"),l.triggerAreas.includes(b)&&s&&!e.disabled&&s.toggleItem(v.value,t.value,n)}}},render(){const{collapseSlots:e,$slots:o,arrowPlacement:a,collapsed:t,mergedDisplayDirective:s,mergedClsPrefix:r,disabled:l,triggerAreas:u}=this,h=oe(o.header,{collapsed:t},()=>[this.title]),v=o["header-extra"]||e["header-extra"],c=o.arrow||e.arrow;return f("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${a}-arrow-placement`,l&&`${r}-collapse-item--disabled`,!t&&`${r}-collapse-item--active`,u.map(n=>`${r}-collapse-item--trigger-area-${n}`)]},f("div",{class:[`${r}-collapse-item__header`,!t&&`${r}-collapse-item__header--active`]},f("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},a==="right"&&h,f("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},oe(c,{collapsed:t},()=>[f(_e,{clsPrefix:r},{default:()=>this.rtlEnabled?f(We,null):f(ke,null)})])),a==="left"&&h),ye(v,{collapsed:t},n=>f("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},n))),f(Ge,{clsPrefix:r,displayDirective:s,show:!t},o))}});function Je(e){const{textColor2:o,textColor3:a,fontSize:t,fontWeight:s}=e;return{labelFontSize:t,labelFontWeight:s,valueFontWeight:s,valueFontSize:"24px",labelTextColor:a,valuePrefixTextColor:o,valueSuffixTextColor:o,valueTextColor:o}}const Qe={name:"Statistic",common:Y,self:Je},Xe={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};function Ye(e){const{dividerColor:o,cardColor:a,modalColor:t,popoverColor:s,tableHeaderColor:r,tableColorStriped:l,textColor1:u,textColor2:h,borderRadius:v,fontWeightStrong:c,lineHeight:n,fontSizeSmall:b,fontSizeMedium:S,fontSizeLarge:_}=e;return Object.assign(Object.assign({},Xe),{fontSizeSmall:b,fontSizeMedium:S,fontSizeLarge:_,lineHeight:n,borderRadius:v,borderColor:T(a,o),borderColorModal:T(t,o),borderColorPopover:T(s,o),tdColor:a,tdColorModal:t,tdColorPopover:s,tdColorStriped:T(a,l),tdColorStripedModal:T(t,l),tdColorStripedPopover:T(s,l),thColor:T(a,r),thColorModal:T(t,r),thColorPopover:T(s,r),thTextColor:u,tdTextColor:h,thFontWeight:c})}const eo={name:"Table",common:Y,self:Ye},oo=x("statistic",[g("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),x("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[g("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})]),g("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),g("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})])])]),to=Object.assign(Object.assign({},L.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Po=A({name:"Statistic",props:to,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a,mergedRtlRef:t}=H(e),s=L("Statistic","-statistic",oo,Qe,e,o),r=q("Statistic",t,o),l=N(()=>{const{self:{labelFontWeight:h,valueFontSize:v,valueFontWeight:c,valuePrefixTextColor:n,labelTextColor:b,valueSuffixTextColor:S,valueTextColor:_,labelFontSize:C},common:{cubicBezierEaseInOut:m}}=s.value;return{"--n-bezier":m,"--n-label-font-size":C,"--n-label-font-weight":h,"--n-label-text-color":b,"--n-value-font-weight":c,"--n-value-font-size":v,"--n-value-prefix-text-color":n,"--n-value-suffix-text-color":S,"--n-value-text-color":_}}),u=a?ee("statistic",void 0,l,e):void 0;return{rtlEnabled:r,mergedClsPrefix:o,cssVars:a?void 0:l,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{mergedClsPrefix:o,$slots:{default:a,label:t,prefix:s,suffix:r}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{class:[`${o}-statistic`,this.themeClass,this.rtlEnabled&&`${o}-statistic--rtl`],style:this.cssVars},U(t,l=>f("div",{class:`${o}-statistic__label`},this.label||l)),f("div",{class:`${o}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},U(s,l=>l&&f("span",{class:`${o}-statistic-value__prefix`},l)),this.value!==void 0?f("span",{class:`${o}-statistic-value__content`},this.value):U(a,l=>l&&f("span",{class:`${o}-statistic-value__content`},l)),U(r,l=>l&&f("span",{class:`${o}-statistic-value__suffix`},l))))}}),ro=p([x("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[p("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[p("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),p("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[p("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),P("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[p("tr",[p("&:last-child",[p("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),P("single-line",[p("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),p("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),P("single-column",[p("tr",[p("&:not(:last-child)",[p("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),P("striped",[p("tr:nth-of-type(even)",[p("td","background-color: var(--n-td-color-striped)")])]),ae("bottom-bordered",[p("tr",[p("&:last-child",[p("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),we(x("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[p("th",`
 background-color: var(--n-th-color-modal);
 `),p("td",`
 background-color: var(--n-td-color-modal);
 `)])),ze(x("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[p("th",`
 background-color: var(--n-th-color-popover);
 `),p("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),lo=Object.assign(Object.assign({},L.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Io=A({name:"Table",props:lo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a,mergedRtlRef:t}=H(e),s=L("Table","-table",ro,eo,e,o),r=q("Table",t,o),l=N(()=>{const{size:h}=e,{self:{borderColor:v,tdColor:c,tdColorModal:n,tdColorPopover:b,thColor:S,thColorModal:_,thColorPopover:C,thTextColor:m,tdTextColor:y,borderRadius:$,thFontWeight:M,lineHeight:i,borderColorModal:d,borderColorPopover:I,tdColorStriped:V,tdColorStripedModal:E,tdColorStripedPopover:F,[J("fontSize",h)]:B,[J("tdPadding",h)]:K,[J("thPadding",h)]:G},common:{cubicBezierEaseInOut:Z}}=s.value;return{"--n-bezier":Z,"--n-td-color":c,"--n-td-color-modal":n,"--n-td-color-popover":b,"--n-td-text-color":y,"--n-border-color":v,"--n-border-color-modal":d,"--n-border-color-popover":I,"--n-border-radius":$,"--n-font-size":B,"--n-th-color":S,"--n-th-color-modal":_,"--n-th-color-popover":C,"--n-th-font-weight":M,"--n-th-text-color":m,"--n-line-height":i,"--n-td-padding":K,"--n-th-padding":G,"--n-td-color-striped":V,"--n-td-color-striped-modal":E,"--n-td-color-striped-popover":F}}),u=a?ee("table",N(()=>e.size[0]),l,e):void 0;return{rtlEnabled:r,mergedClsPrefix:o,cssVars:a?void 0:l,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),ne=()=>({studentId:null,curriculumId:null,moduleId:null,payments:[]}),no=()=>({studentId:[],curriculumId:[],moduleId:[{type:"number",required:!0,trigger:["blur","input"],message:"Obligatorio"}]}),ao={class:"table-auto w-full"},so={class:"px-4 py-2 flex items-center"},io={class:"ms-2"},co={class:"text-end px-4 py-2"},uo={class:"border-b-2 border-gray-500"},po={class:"px-4 py-2 font-bold text-lg text-end"},mo={class:"px-4 py-2 font-bold text-lg text-end"},fo={class:"text-red-500 text-sm text-end text-sm"},Ro=A({__name:"EnrollmentModuleForm",props:{modelValue:{type:Boolean},studentId:{},curriculumId:{}},emits:["update:modelValue","success"],setup(e,{emit:o}){const a=o,t=e,s=N({get:()=>t.modelValue,set:i=>a("update:modelValue",i)}),r=D(!1),l=D(!1),u=D([]),h=D(null),v=N(()=>no()),c=D(ne()),n=D([]),b=D(0),S=i=>{console.log("Pago validado",i),c.value.payments.push(i.token),n.value.push({token:i.token,amount:i.payment.amount,sequenceNumber:i.payment.sequenceNumber})},_=i=>{let I=n.value[i].token;n.value.splice(i,1);let V=c.value.payments.find(F=>F.token==I);if(!V)return;let E=c.value.payments.indexOf(V);c.value.payments.splice(E,1)},C=i=>{console.log("Seleccionando modulo",i),c.value.payments=[],u.value.forEach(d=>{d.value==i&&(b.value=d.price)})},m=async()=>{const i=await De(t.studentId,t.curriculumId);u.value=i.data},y=()=>n.value.reduce((d,I)=>d+parseInt(I.amount),0)>=b.value?null:"El monto pagado es menor al total",$=async()=>{c.value.studentId=t.studentId,c.value.curriculumId=t.curriculumId,r.value=!0,(await Ve(c.value)).status&&(a("success"),s.value=!1),r.value=!1,console.log("Guardando matricula",c.value)},M=()=>{m(),console.log("Inicializando formulario")};return Se(s,i=>{i&&(c.value=Object.assign({},{...ne()}),n.value=[],M())}),(i,d)=>{const I=Ae,V=Oe,E=Be,F=Pe("LnxIcon"),B=Re,K=Le,G=je,Z=$e,de=Ne;return Q(),X(re,null,[w(de,{show:s.value,"onUpdate:show":d[2]||(d[2]=R=>s.value=R)},{default:k(()=>[w(Z,{style:{width:"600px"},title:"MATRICULA EN MODULO",segmented:{content:!0,footer:!0},size:"small",role:"dialog","aria-modal":"true"},{default:k(()=>[w(G,{ref_key:"formRef",ref:h,model:c.value,rules:v.value,size:"large"},{default:k(()=>[w(K,{gutter:[16,16]},{default:k(()=>[w(E,{span:"24"},{default:k(()=>[w(V,{path:"moduleId",label:"Modulo"},{default:k(()=>[w(I,{value:c.value.moduleId,"onUpdate:value":[d[0]||(d[0]=R=>c.value.moduleId=R),C],placeholder:"Seleccionar modulo",options:u.value,"virtual-scroll":!1,clearable:"",filterable:""},null,8,["value","options"])]),_:1})]),_:1}),w(E,{span:"24"},{default:k(()=>[z("span",{role:"button",onClick:d[1]||(d[1]=R=>l.value=!0),class:"border border-dashed border-gray-300 p-4 rounded-sm flex items-center justify-center cursor-pointer text-gray-400 hover:bg-gray-50 font-bold hover:text-gray-500 mb-4"},[w(F,{class:"me-3","icon-name":"money-add",size:"20"}),d[4]||(d[4]=te(" Agregar pago "))]),z("table",ao,[z("tbody",null,[(Q(!0),X(re,null,Ie(n.value,(R,j)=>(Q(),X("tr",{key:j,class:"border-b border-gray-300 border-dashed px-4 py-2"},[z("td",so,[w(B,{type:"error",size:"small",secondary:"",onClick:go=>_(j),"render-icon":Ee(Fe)("trash")},null,8,["onClick","render-icon"]),z("i",io,O(R.sequenceNumber),1)]),z("td",co,"S/. "+O(R.amount),1)]))),128)),z("tr",uo,[d[5]||(d[5]=z("td",{class:"px-4 py-2"},"Total pagado",-1)),z("td",po," S/. "+O(n.value.reduce((R,j)=>R+parseInt(j.amount),0)),1)]),z("tr",null,[d[6]||(d[6]=z("td",{class:"px-4 py-2"},"Total a pagar",-1)),z("td",mo," S/. "+O(b.value),1)])])]),z("div",fo,O(y()),1)]),_:1}),w(E,{span:"24"},{default:k(()=>[w(B,{size:"large",type:"primary",onClick:$,block:"",loading:r.value},{default:k(()=>d[7]||(d[7]=[te(" Realizar matricula ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["show"]),w(Me,{modelValue:l.value,"onUpdate:modelValue":d[3]||(d[3]=R=>l.value=R),studentId:t.studentId,onSuccess:S},null,8,["modelValue","studentId"])],64)}}});export{Ro as _,Po as a,zo as b,Io as c,So as d};
