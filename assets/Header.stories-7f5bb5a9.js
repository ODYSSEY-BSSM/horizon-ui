import{j as S,a as e}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{H as t}from"./Header-dbd0c44c.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2f2952e5.js";import"./emotion-styled.browser.esm-fb891883.js";import"./extends-4c19d496.js";import"./global-82ed9981.js";import"./HorizonLogo-f8ad6e8a.js";import"./Icon-4ac498c5.js";import"./Text-820f29b2.js";import"./iframe-0831033e.js";import"../sb-preview/runtime.js";const K={title:"Components/Header",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",description:"헤더 제목"},button:{control:"object",description:"버튼 속성"}}},n={args:{title:"기본 헤더"}},o={args:{title:"텍스트 버튼 헤더",button:{text:"추가"}}},r={args:{title:"아이콘 버튼 헤더",button:{text:"새로 만들기",leftIcon:"add"}}},u={args:{title:"아이콘 전용 헤더",button:{leftIcon:"settings"}}},s={args:{title:"매우 긴 제목을 가진 헤더 컴포넌트 테스트입니다",button:{text:"버튼",leftIcon:"edit"}}},a={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"1px"},children:[e(t,{title:"저장 버튼",button:{text:"저장",leftIcon:"save"}}),e(t,{title:"편집 버튼",button:{text:"편집",leftIcon:"edit"}}),e(t,{title:"삭제 버튼",button:{text:"삭제",leftIcon:"delete"}}),e(t,{title:"설정 버튼",button:{text:"설정",leftIcon:"settings"}})]})},i={args:{title:"반응형 테스트",button:{text:"버튼",leftIcon:"add"}},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}}}}}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '기본 헤더'
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var C,d,m;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: '텍스트 버튼 헤더',
    button: {
      text: '추가'
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var B,x,D;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '아이콘 버튼 헤더',
    button: {
      text: '새로 만들기',
      leftIcon: 'add'
    }
  }
}`,...(D=(x=r.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var g,f,b;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: '아이콘 전용 헤더',
    button: {
      leftIcon: 'settings'
    }
  }
}`,...(b=(f=u.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var I,h,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '매우 긴 제목을 가진 헤더 컴포넌트 테스트입니다',
    button: {
      text: '버튼',
      leftIcon: 'edit'
    }
  }
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var E,T,y;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1px'
  }}>
      <Header title='저장 버튼' button={{
      text: '저장',
      leftIcon: 'save'
    }} />
      <Header title='편집 버튼' button={{
      text: '편집',
      leftIcon: 'edit'
    }} />
      <Header title='삭제 버튼' button={{
      text: '삭제',
      leftIcon: 'delete'
    }} />
      <Header title='설정 버튼' button={{
      text: '설정',
      leftIcon: 'settings'
    }} />
    </div>
}`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var v,w,H;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '반응형 테스트',
    button: {
      text: '버튼',
      leftIcon: 'add'
    }
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        }
      }
    }
  }
}`,...(H=(w=i.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const N=["Default","WithTextButton","WithIconAndText","WithIconOnly","LongTitle","DifferentButtonTexts","ResponsiveTest"];export{n as Default,a as DifferentButtonTexts,s as LongTitle,i as ResponsiveTest,r as WithIconAndText,u as WithIconOnly,o as WithTextButton,N as __namedExportsOrder,K as default};
