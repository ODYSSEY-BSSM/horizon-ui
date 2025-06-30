import{s as j,j as z}from"./emotion-styled.browser.esm-1e5c824c.js";import{c as q}from"./global-4eaa3a94.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-90fff251.js";const _={fontFamily:{materialSymbols:"'Material Symbols Outlined'"},iconSize:{large:"2rem",medium:"1.75rem",small:"1.5rem"},weight:{regular:400,light:300},fill:{regular:1,light:0}},A=q`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${_.fontFamily.materialSymbols};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`,e=(a,r,t)=>q`
  ${A};
  font-size: ${_.iconSize[a]};
  font-variation-settings:
    'FILL' ${_.fill[t]},
    'wght' ${_.weight[r]};
`,C=a=>{const r={Stroke_R_32:e("large","regular","light"),Stroke_R_28:e("medium","regular","light"),Stroke_R_24:e("small","regular","light"),Fill_R_32:e("large","regular","regular"),Fill_R_28:e("medium","regular","regular"),Fill_R_24:e("small","regular","regular"),Stroke_L_32:e("large","light","light"),Stroke_L_28:e("medium","light","light"),Stroke_L_24:e("small","light","light"),Fill_L_32:e("large","light","regular"),Fill_L_28:e("medium","light","regular"),Fill_L_24:e("small","light","regular")};return r[a]||r.Stroke_R_24},c=({name:a,variant:r,"aria-label":t,"aria-hidden":D,...V})=>z(N,{variant:r,role:t?"img":void 0,"aria-label":t,"aria-hidden":D??(t?void 0:!0),...V,children:a}),N=j.span`
  ${({variant:a})=>C(a)}
`;try{c.displayName="Icon",c.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"Stroke_R_32"'},{value:'"Stroke_R_28"'},{value:'"Stroke_R_24"'},{value:'"Fill_R_32"'},{value:'"Fill_R_28"'},{value:'"Fill_R_24"'},{value:'"Stroke_L_32"'},{value:'"Stroke_L_28"'},{value:'"Stroke_L_24"'},{value:'"Fill_L_32"'},{value:'"Fill_L_28"'},{value:'"Fill_L_24"'}]}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-hidden":{defaultValue:null,description:"Indicates whether the element is exposed to an accessibility API.",name:"aria-hidden",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const T={title:"UI/Icon",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["Stroke_R_32","Stroke_R_28","Stroke_R_24","Fill_R_32","Fill_R_28","Fill_R_24","Stroke_L_32","Stroke_L_28","Stroke_L_24","Fill_L_32","Fill_L_28","Fill_L_24"]},name:{control:"text"}}},l={args:{name:"home",variant:"Stroke_R_24"}},n={args:{name:"home",variant:"Stroke_R_32"}},i={args:{name:"home",variant:"Fill_R_32"}},o={args:{name:"home",variant:"Stroke_L_32"}},s={args:{name:"home",variant:"Fill_L_32"}},m={args:{name:"home",variant:"Stroke_R_24","aria-label":"홈 아이콘"}};var u,g,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Stroke_R_24'
  }
}`,...(d=(g=l.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,h,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Stroke_R_32'
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var k,v,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Fill_R_32'
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,F,L;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Stroke_L_32'
  }
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var y,b,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Fill_L_32'
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var w,x,$;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'Stroke_R_24',
    'aria-label': '홈 아이콘'
  }
}`,...($=(x=m.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const U=["Default","RegularStroke","RegularFill","LightStroke","LightFill","WithAriaLabel"];export{l as Default,s as LightFill,o as LightStroke,i as RegularFill,n as RegularStroke,m as WithAriaLabel,U as __namedExportsOrder,T as default};
