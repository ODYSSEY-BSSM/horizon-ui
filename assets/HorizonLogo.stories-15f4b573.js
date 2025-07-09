import{j as n,a as e}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{H as r}from"./HorizonLogo-f8ad6e8a.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2f2952e5.js";import"./emotion-styled.browser.esm-fb891883.js";import"./extends-4c19d496.js";const H={title:"UI/HorizonLogo",component:r,parameters:{layout:"centered",docs:{description:{component:"Horizon 브랜드 로고 컴포넌트. 심볼만, 텍스트만, 또는 전체 로고를 표시할 수 있습니다."}}},tags:["autodocs"],argTypes:{symbolOnly:{control:"boolean",description:"심볼만 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textOnly:{control:"boolean",description:"텍스트만 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},width:{control:"text",description:"로고 너비",table:{type:{summary:"string | number"},defaultValue:{summary:"auto"}}},height:{control:"text",description:"로고 높이",table:{type:{summary:"string | number"},defaultValue:{summary:"auto"}}}}},t={args:{},parameters:{docs:{description:{story:"전체 로고 (심볼 + 텍스트)"}}}},o={args:{symbolOnly:!0},parameters:{docs:{description:{story:"심볼만 표시하는 버전"}}}},i={args:{textOnly:!0},parameters:{docs:{description:{story:"텍스트만 표시하는 버전"}}}},s={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[n("div",{style:{textAlign:"center"},children:[e(r,{width:80,height:21}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Small (80px)"})]}),n("div",{style:{textAlign:"center"},children:[e(r,{width:140,height:40}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Medium (140px)"})]}),n("div",{style:{textAlign:"center"},children:[e(r,{width:210,height:60}),e("p",{style:{margin:"8px 0 0 0",fontSize:"12px",color:"#666"},children:"Large (210px)"})]})]}),parameters:{docs:{description:{story:"다양한 크기의 로고"}}}},a={render:()=>n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:[n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{width:140}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Default"})]}),n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{symbolOnly:!0,width:40}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Symbol Only"})]}),n("div",{style:{textAlign:"center",padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e(r,{textOnly:!0,width:100}),e("p",{style:{margin:"12px 0 0 0",fontWeight:"bold"},children:"Text Only"})]})]}),parameters:{docs:{description:{story:"모든 로고 변형을 한눈에 보기"}}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: '전체 로고 (심볼 + 텍스트)'
      }
    }
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,C,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,v,A;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const L=["Default","SymbolOnly","TextOnly","Sizes","AllVariants"];export{a as AllVariants,t as Default,s as Sizes,o as SymbolOnly,i as TextOnly,L as __namedExportsOrder,H as default};
