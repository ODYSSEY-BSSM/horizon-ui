import{s as S,j as e,a as n,F as p}from"./emotion-styled.browser.esm-1e5c824c.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-90fff251.js";const r=({symbolOnly:t,textOnly:o,width:A="auto",height:D="auto"})=>{t&&o&&(t=!1,o=!1);const B=()=>t?"0 0 40 40":o?"40 0 108 40":"0 0 148 40",z=n(p,{children:[!o&&n(p,{children:[e("path",{d:"M13 10C13.5523 10 14 10.4477 14 11V25L19 30H14L9 25V10H13ZM30 15V30H26C25.4477 30 25 29.5523 25 29V15L20 10H25L30 15Z",fill:"#57D998"}),e("path",{d:"M12 25L17 30H12L7 25V11C7 10.4477 7.44772 10 8 10H12V25ZM22 29C22 29.5523 21.5523 30 21 30H17V11C17 10.4477 17.4477 10 18 10H22V29ZM32 15V29C32 29.5523 31.5523 30 31 30H27V15L22 10H27L32 15Z",fill:"#5C5CE6"})]}),!t&&e("path",{d:"M57.6 12.2V27.36H54.56V20.88H48.44V27.36H45.4V12.2H48.44V18.28H54.56V12.2H57.6ZM67.9494 24.88C70.8094 24.88 72.5894 22.92 72.5894 19.78C72.5894 16.64 70.8094 14.68 67.9494 14.68C65.0894 14.68 63.3094 16.64 63.3094 19.78C63.3094 22.92 65.0894 24.88 67.9494 24.88ZM67.9494 12.04C72.4494 12.04 75.6294 15.24 75.6294 19.78C75.6294 24.32 72.4494 27.52 67.9494 27.52C63.4494 27.52 60.2694 24.32 60.2694 19.78C60.2694 15.24 63.4494 12.04 67.9494 12.04ZM84.2098 19.8C85.6298 19.8 86.5298 18.96 86.5298 17.3C86.5298 15.64 85.6298 14.8 84.2098 14.8H81.3298V19.8H84.2098ZM90.2898 27.36H86.6498L83.3898 22.4H81.3298V27.36H78.2898V12.2H84.8698C87.6298 12.2 89.5698 14.14 89.5698 17.18C89.5698 18.98 89.0898 20.5 86.6698 21.86L90.2898 27.36ZM92.8891 12.2H95.9291V27.36H92.8891V12.2ZM109.629 12.2V14.8L102.109 24.76H109.629V27.36H98.3289V24.76L105.809 14.8H98.3289V12.2H109.629ZM119.178 24.88C122.038 24.88 123.818 22.92 123.818 19.78C123.818 16.64 122.038 14.68 119.178 14.68C116.318 14.68 114.538 16.64 114.538 19.78C114.538 22.92 116.318 24.88 119.178 24.88ZM119.178 12.04C123.678 12.04 126.858 15.24 126.858 19.78C126.858 24.32 123.678 27.52 119.178 27.52C114.678 27.52 111.498 24.32 111.498 19.78C111.498 15.24 114.678 12.04 119.178 12.04ZM142.359 12.2V27.36H138.919L132.499 17.26V27.36H129.459V12.2H132.899L139.319 22.32V12.2H142.359Z",fill:"#0A131D"})]});return e(M,{style:{width:A,height:D},children:e("svg",{viewBox:B(),fill:"none",xmlns:"http://www.w3.org/2000/svg",children:z})})},M=S.div`
  display: inline-block;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;try{r.displayName="HorizonLogo",r.__docgenInfo={description:"",displayName:"HorizonLogo",props:{symbolOnly:{defaultValue:null,description:"",name:"symbolOnly",required:!1,type:{name:"boolean | undefined"}},textOnly:{defaultValue:null,description:"",name:"textOnly",required:!1,type:{name:"boolean | undefined"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string | number | undefined"}},height:{defaultValue:{value:"auto"},description:"",name:"height",required:!1,type:{name:"string | number | undefined"}}}}}catch{}const W={title:"UI/HorizonLogo",component:r,parameters:{layout:"centered",docs:{description:{component:"Horizon 브랜드 로고 컴포넌트. 심볼만, 텍스트만, 또는 전체 로고를 표시할 수 있습니다."}}},tags:["autodocs"],argTypes:{symbolOnly:{control:"boolean",description:"심볼만 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textOnly:{control:"boolean",description:"텍스트만 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},width:{control:"text",description:"로고 너비",table:{type:{summary:"string | number"},defaultValue:{summary:"auto"}}},height:{control:"text",description:"로고 높이",table:{type:{summary:"string | number"},defaultValue:{summary:"auto"}}}}},i={args:{},parameters:{docs:{description:{story:"전체 로고 (심볼 + 텍스트)"}}}},a={args:{symbolOnly:!0},parameters:{docs:{description:{story:"심볼만 표시하는 버전"}}}},s={args:{textOnly:!0},parameters:{docs:{description:{story:"텍스트만 표시하는 버전"}}}},d={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[n("div",{style:{textAlign:"center"},children:[e(r,{width:80,height:21}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Small (80px)"})]}),n("div",{style:{textAlign:"center"},children:[e(r,{width:140,height:40}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Medium (140px)"})]}),n("div",{style:{textAlign:"center"},children:[e(r,{width:210,height:60}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Large (210px)"})]})]}),parameters:{docs:{description:{story:"다양한 크기의 로고"}}}},l={render:()=>n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:[n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{width:140}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Default"})]}),n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{symbolOnly:!0,width:40}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Symbol Only"})]}),n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{textOnly:!0,width:100}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Text Only"})]})]}),parameters:{docs:{description:{story:"모든 로고 변형을 한눈에 보기"}}}};var u,c,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: '전체 로고 (심볼 + 텍스트)'
      }
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,y,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    symbolOnly: true
  },
  parameters: {
    docs: {
      description: {
        story: '심볼만 표시하는 버전'
      }
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,h,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    textOnly: true
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트만 표시하는 버전'
      }
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var H,b,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <HorizonLogo width={80} height={21} />
        <p style={{
        margin: '8px 0 0 0',
        fontSize: '12px',
        color: '#666'
      }}>
          Small (80px)
        </p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <HorizonLogo width={140} height={40} />
        <p style={{
        margin: '8px 0 0 0',
        fontSize: '12px',
        color: '#666'
      }}>
          Medium (140px)
        </p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <HorizonLogo width={210} height={60} />
        <p style={{
        margin: '8px 0 0 0',
        fontSize: '12px',
        color: '#666'
      }}>
          Large (210px)
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 로고'
      }
    }
  }
}`,...(V=(b=d.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var v,L,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  }}>
      <div style={{
      textAlign: 'center',
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px'
    }}>
        <HorizonLogo width={140} />
        <p style={{
        margin: '12px 0 0 0',
        fontWeight: 'bold'
      }}>Default</p>
      </div>
      <div style={{
      textAlign: 'center',
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px'
    }}>
        <HorizonLogo symbolOnly width={40} />
        <p style={{
        margin: '12px 0 0 0',
        fontWeight: 'bold'
      }}>Symbol Only</p>
      </div>
      <div style={{
      textAlign: 'center',
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px'
    }}>
        <HorizonLogo textOnly width={100} />
        <p style={{
        margin: '12px 0 0 0',
        fontWeight: 'bold'
      }}>Text Only</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '모든 로고 변형을 한눈에 보기'
      }
    }
  }
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const T=["Default","SymbolOnly","TextOnly","Sizes","AllVariants"];export{l as AllVariants,i as Default,d as Sizes,a as SymbolOnly,s as TextOnly,T as __namedExportsOrder,W as default};
