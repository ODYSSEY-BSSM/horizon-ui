import{c as V,s as U,j as O}from"./global-9b2c5a82.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-90fff251.js";const t={fontFamily:{suit:"'SUIT Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"},fontWeight:{bold:700,semibold:600,medium:500,regular:400},fontSize:{28:"1.75rem",24:"1.5rem",20:"1.25rem",18:"1.125rem",16:"1rem",14:"0.875rem",12:"0.75rem",8:"0.5rem"},letterSpacing:{2:"2%",4:"4%"},fontHeight:{140:"140%"}},G=V`
  font-family: ${t.fontFamily.suit};
  line-height: ${t.fontHeight[140]};
  letter-spacing: ${t.letterSpacing[2]};
`,e=(a,r)=>V`
  ${G};
  font-size: ${t.fontSize[a]};
  font-weight: ${t.fontWeight[r]};
`,J=a=>{const r={H_B_28:e(28,"bold"),H_B_24:e(24,"bold"),H_B_20:e(20,"bold"),H_B_16:e(16,"bold"),H_B_12:e(12,"bold"),T_SB_24:e(24,"semibold"),T_SB_20:e(20,"semibold"),T_SB_16:e(16,"semibold"),T_SB_14:e(14,"semibold"),T_SB_12:e(12,"semibold"),B_M_20:e(20,"medium"),B_M_16:e(16,"medium"),B_M_14:e(14,"medium"),B_M_12:e(12,"medium"),B_M_8:e(8,"medium"),C_SB_12:e(12,"medium"),L_M_12:e(12,"medium"),P_R_16:e(16,"medium"),P_R_12:e(12,"medium"),BTN_M_28:e(28,"medium"),BTN_M_24:e(24,"medium"),BTN_M_20:e(20,"medium")};return r[a]||r.H_B_16},d=({children:a,variant:r,color:q,width:F="auto",textAlign:k="left",ellipsis:z=!1,whiteSpace:I="nowrap",tag:j="span",...L})=>O(K,{as:j,variant:r,ellipsis:z,color:q,width:F,textAlign:k,whiteSpace:I,...L,children:a}),K=U.span`
  ${({variant:a})=>J(a)}
  ${({ellipsis:a})=>a&&`
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
  color: ${({color:a})=>a};
  width: ${({width:a})=>a};
  text-align: ${({textAlign:a})=>a};
  white-space: ${({whiteSpace:a})=>a};
`;try{d.displayName="Text",d.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"H_B_28"'},{value:'"H_B_24"'},{value:'"H_B_20"'},{value:'"H_B_16"'},{value:'"H_B_12"'},{value:'"T_SB_24"'},{value:'"T_SB_20"'},{value:'"T_SB_16"'},{value:'"T_SB_14"'},{value:'"T_SB_12"'},{value:'"B_M_20"'},{value:'"B_M_16"'},{value:'"B_M_14"'},{value:'"B_M_12"'},{value:'"B_M_8"'},{value:'"C_SB_12"'},{value:'"L_M_12"'},{value:'"P_R_16"'},{value:'"P_R_12"'},{value:'"BTN_M_28"'},{value:'"BTN_M_24"'},{value:'"BTN_M_20"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"Color | undefined"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"Width<string | number> | undefined"}},textAlign:{defaultValue:{value:"left"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'},{value:'"start"'}]}},ellipsis:{defaultValue:{value:"false"},description:"",name:"ellipsis",required:!1,type:{name:"boolean | undefined"}},whiteSpace:{defaultValue:{value:"nowrap"},description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace | undefined"}},tag:{defaultValue:{value:"span"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"span"'},{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}const ee={title:"UI/Text",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["H_B_28","H_B_24","H_B_20","H_B_16","H_B_12","T_SB_24","T_SB_20","T_SB_16","T_SB_14","T_SB_12","B_M_20","B_M_16","B_M_14","B_M_12","B_M_8","C_SB_12","L_M_12","P_R_16","P_R_12","BTN_M_28","BTN_M_24","BTN_M_20"]},color:{control:"color"},textAlign:{control:"select",options:["left","center","right"]},ellipsis:{control:"boolean"},width:{control:"text"},tag:{control:"select",options:["span","p","h1","h2","h3","h4","h5","h6"]}}},u={args:{variant:"P_R_16",children:"기본 텍스트"}},n={args:{variant:"H_B_28",children:"큰 제목"}},l={args:{variant:"T_SB_24",children:"제목"}},s={args:{variant:"B_M_20",children:"부제목"}},i={args:{variant:"P_R_16",children:"본문 텍스트"}},o={args:{variant:"P_R_16",width:"200px",ellipsis:!0,children:"이 텍스트는 너무 길어서 말줄임표로 표시됩니다. 이 텍스트는 너무 길어서 말줄임표로 표시됩니다."}},_={args:{variant:"P_R_16",color:"#ff0000",children:"빨간색 텍스트"}},c={args:{variant:"H_B_28",tag:"h1",children:"h1 태그로 렌더링된 제목"}};var m,B,p;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'P_R_16',
    children: '기본 텍스트'
  }
}`,...(p=(B=u.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var v,h,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'H_B_28',
    children: '큰 제목'
  }
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var g,f,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'T_SB_24',
    children: '제목'
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,D,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'B_M_20',
    children: '부제목'
  }
}`,...(M=(D=s.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var y,H,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'P_R_16',
    children: '본문 텍스트'
  }
}`,...(b=(H=i.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var A,x,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'P_R_16',
    width: '200px',
    ellipsis: true,
    children: '이 텍스트는 너무 길어서 말줄임표로 표시됩니다. 이 텍스트는 너무 길어서 말줄임표로 표시됩니다.'
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var R,P,N;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'P_R_16',
    color: '#ff0000',
    children: '빨간색 텍스트'
  }
}`,...(N=(P=_.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var $,W,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'H_B_28',
    tag: 'h1',
    children: 'h1 태그로 렌더링된 제목'
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const ae=["Default","Heading","Title","Subtitle","Body","WithEllipsis","WithCustomColor","WithCustomTag"];export{i as Body,u as Default,n as Heading,s as Subtitle,l as Title,_ as WithCustomColor,c as WithCustomTag,o as WithEllipsis,ae as __namedExportsOrder,ee as default};
