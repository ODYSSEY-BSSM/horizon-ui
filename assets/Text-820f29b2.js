import{a as v}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{s as p}from"./emotion-styled.browser.esm-fb891883.js";import{c as u}from"./global-82ed9981.js";const t={fontFamily:{suit:"'SUIT Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"},fontWeight:{bold:700,semibold:600,medium:500,regular:400},fontSize:{28:"1.75rem",24:"1.5rem",20:"1.25rem",18:"1.125rem",16:"1rem",14:"0.875rem",12:"0.75rem",8:"0.5rem"},letterSpacing:{2:"2%",4:"4%"},fontHeight:{140:"140%"}},f=u`
  font-family: ${t.fontFamily.suit};
  line-height: ${t.fontHeight[140]};
  letter-spacing: ${t.letterSpacing[2]};
`,e=(a,l)=>u`
  ${f};
  font-size: ${t.fontSize[a]};
  font-weight: ${t.fontWeight[l]};
`,c=a=>{const l={H_B_28:e(28,"bold"),H_B_24:e(24,"bold"),H_B_20:e(20,"bold"),H_B_16:e(16,"bold"),H_B_12:e(12,"bold"),T_SB_24:e(24,"semibold"),T_SB_20:e(20,"semibold"),T_SB_16:e(16,"semibold"),T_SB_14:e(14,"semibold"),T_SB_12:e(12,"semibold"),B_M_20:e(20,"medium"),B_M_16:e(16,"medium"),B_M_14:e(14,"medium"),B_M_12:e(12,"medium"),B_M_8:e(8,"medium"),C_SB_12:e(12,"medium"),L_M_12:e(12,"medium"),P_R_16:e(16,"medium"),P_R_12:e(12,"medium"),BTN_M_28:e(28,"medium"),BTN_M_24:e(24,"medium"),BTN_M_20:e(20,"medium")};return l[a]||l.H_B_16},i=({children:a,variant:l,color:_,width:n="auto",textAlign:r="left",ellipsis:o=!1,whiteSpace:m="nowrap",tag:d="p",...s})=>v(B,{as:d,variant:l,ellipsis:o,color:_,width:n,textAlign:r,whiteSpace:m,...s,children:a}),y=i,B=p.p`
  ${({variant:a})=>c(a)}
  ${({ellipsis:a})=>a&&`
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
  color: ${({color:a})=>a};
  width: ${({width:a})=>a};
  text-align: ${({textAlign:a})=>a};
  white-space: ${({whiteSpace:a})=>a};
`;try{i.displayName="Text",i.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"H_B_28"'},{value:'"H_B_24"'},{value:'"H_B_20"'},{value:'"H_B_16"'},{value:'"H_B_12"'},{value:'"T_SB_24"'},{value:'"T_SB_20"'},{value:'"T_SB_16"'},{value:'"T_SB_14"'},{value:'"T_SB_12"'},{value:'"B_M_20"'},{value:'"B_M_16"'},{value:'"B_M_14"'},{value:'"B_M_12"'},{value:'"B_M_8"'},{value:'"C_SB_12"'},{value:'"L_M_12"'},{value:'"P_R_16"'},{value:'"P_R_12"'},{value:'"BTN_M_28"'},{value:'"BTN_M_24"'},{value:'"BTN_M_20"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"Color | undefined"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"Width<string | number> | undefined"}},textAlign:{defaultValue:{value:"left"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'},{value:'"start"'}]}},ellipsis:{defaultValue:{value:"false"},description:"",name:"ellipsis",required:!1,type:{name:"boolean | undefined"}},whiteSpace:{defaultValue:{value:"nowrap"},description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace | undefined"}},tag:{defaultValue:{value:"p"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"span"'},{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}export{y as T};
