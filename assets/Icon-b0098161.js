import{a as u}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{s as _}from"./emotion-styled.browser.esm-fb891883.js";import{c as n}from"./global-82ed9981.js";const i={fontFamily:{materialSymbols:"'Material Symbols Outlined'"},iconSize:{large:"2rem",medium:"1.75rem",small:"1.5rem"},weight:{regular:400,light:300},fill:{regular:1,light:0}},m=n`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${i.fontFamily.materialSymbols};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`,e=(l,t,a)=>n`
  ${m};
  font-size: ${i.iconSize[l]};
  font-variation-settings:
    'FILL' ${i.fill[a]},
    'wght' ${i.weight[t]};
`,d=l=>{const t={Stroke_R_32:e("large","regular","light"),Stroke_R_28:e("medium","regular","light"),Stroke_R_24:e("small","regular","light"),Fill_R_32:e("large","regular","regular"),Fill_R_28:e("medium","regular","regular"),Fill_R_24:e("small","regular","regular"),Stroke_L_32:e("large","light","light"),Stroke_L_28:e("medium","light","light"),Stroke_L_24:e("small","light","light"),Fill_L_32:e("large","light","regular"),Fill_L_28:e("medium","light","regular"),Fill_L_24:e("small","light","regular")};return t[l]||t.Stroke_R_24},r=({name:l,variant:t,"aria-label":a,"aria-hidden":o,style:s})=>u(g,{variant:t,role:a?"img":void 0,"aria-label":a,"aria-hidden":o??(a?void 0:!0),style:{...s},children:l}),g=_.span`
  ${({variant:l})=>d(l)}
`;try{r.displayName="Icon",r.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"Stroke_R_32"'},{value:'"Stroke_R_28"'},{value:'"Stroke_R_24"'},{value:'"Fill_R_32"'},{value:'"Fill_R_28"'},{value:'"Fill_R_24"'},{value:'"Stroke_L_32"'},{value:'"Stroke_L_28"'},{value:'"Stroke_L_24"'},{value:'"Fill_L_32"'},{value:'"Fill_L_28"'},{value:'"Fill_L_24"'}]}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-hidden":{defaultValue:null,description:"Indicates whether the element is exposed to an accessibility API.",name:"aria-hidden",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}export{r as I};
