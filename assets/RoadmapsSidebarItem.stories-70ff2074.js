import{j as r,a as e}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{a as o}from"./Header-ca4794e7.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2f2952e5.js";import"./emotion-styled.browser.esm-fb891883.js";import"./extends-4c19d496.js";import"./global-82ed9981.js";import"./HorizonLogo-f8ad6e8a.js";import"./Icon-4ac498c5.js";import"./Text-820f29b2.js";import"./iframe-26ca0a8d.js";import"../sb-preview/runtime.js";const ye={title:"Components/Layout/RoadmapsSidebarItem",component:o,parameters:{layout:"padded",docs:{description:{component:"로드맵 사이드바 아이템 컴포넌트입니다. 계층 구조를 시각적으로 표현하며, 선택/비선택 상태를 지원합니다."}}},tags:["autodocs"],argTypes:{itemName:{description:"표시할 텍스트 내용",control:"text"},icon:{description:"아이콘 이름",control:"text"},to:{description:"링크 경로",control:"text"},selected:{description:"선택 상태 여부",control:"boolean"},level:{description:"계층 레벨 (1부터 시작)",control:{type:"range",min:1,max:5,step:1}}},args:{itemName:"로드맵 아이템",icon:"folder",to:"/roadmap",selected:!1,level:1}},t={args:{itemName:"프론트엔드 로드맵",icon:"folder",to:"/frontend"}},a={args:{itemName:"현재 선택된 항목",icon:"folder_open",to:"/current",selected:!0}},i={args:{itemName:"아이콘이 없는 항목",icon:"",to:"/no-icon"}},u={args:{itemName:"레벨 1 (루트)",icon:"folder",to:"/level1",level:1}},s={args:{itemName:"레벨 2 (1뎁스)",icon:"folder",to:"/level2",level:2}},d={args:{itemName:"레벨 3 (2뎁스)",icon:"folder",to:"/level3",level:3}},m={args:{itemName:"레벨 4 (3뎁스)",icon:"folder",to:"/level4",level:4}},l={args:{itemName:"레벨 5 (4뎁스)",icon:"folder",to:"/level5",level:5}},c={args:{itemName:"매우 긴 텍스트가 들어갔을 때의 동작을 확인하기 위한 스토리입니다",icon:"folder",to:"/long-text",level:2}},C={render:()=>r("div",{style:{width:"300px"},children:[e(o,{icon:"home",to:"/home",itemName:"홈"}),e(o,{icon:"folder",to:"/folder",level:2,itemName:"폴더"}),e(o,{icon:"file",to:"/file",level:3,itemName:"파일"}),e(o,{icon:"code",to:"/code",level:3,itemName:"코드",selected:!0}),e(o,{icon:"settings",to:"/settings",level:2,itemName:"설정"})]}),parameters:{docs:{description:{story:"다양한 아이콘을 사용한 예시입니다."}}}},p={render:()=>r("div",{style:{width:"350px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[e(o,{icon:"folder_open",to:"/frontend",selected:!0,level:1,itemName:"프론트엔드 개발"}),e(o,{icon:"folder",to:"/frontend/basic",level:2,itemName:"프론트엔드 개발"}),e(o,{icon:"graph_1",to:"/frontend/basic/html",level:3,itemName:"HTML"}),e(o,{icon:"graph_1",to:"/frontend/basic/css",level:3,itemName:"CSS"}),e(o,{icon:"graph_1",to:"/frontend/basic/js",level:3,itemName:"JavaScript"}),e(o,{icon:"folder",to:"/frontend/framework",level:2,itemName:"프레임워크"}),e(o,{icon:"graph_1",to:"/frontend/framework/react",level:3,itemName:"React"}),e(o,{icon:"file",to:"/frontend/framework/vue",level:3,itemName:"Vue.js"}),e(o,{icon:"file",to:"/frontend/framework/angular",level:3,itemName:"Angular"})]}),parameters:{docs:{description:{story:"실제 로드맵에서 사용될 수 있는 계층 구조의 예시입니다."}}}},v={render:()=>r("div",{style:{width:"300px"},children:[r("div",{style:{marginBottom:"16px"},children:[e("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"비선택 상태"}),e(o,{icon:"folder",to:"/inactive",itemName:"비선택 아이템"})]}),r("div",{style:{marginBottom:"16px"},children:[e("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"선택 상태"}),e(o,{icon:"folder_open",to:"/active",selected:!0,itemName:"선택된 아이템"})]}),r("div",{children:[e("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"아이콘 없음"}),e(o,{icon:"",to:"/no-icon",itemName:"아이콘 없는 아이템"})]})]}),parameters:{docs:{description:{story:"컴포넌트의 다양한 상태를 한 번에 비교할 수 있습니다."}}}},B={render:()=>r("div",{children:[r("div",{style:{width:"200px",marginBottom:"20px",border:"1px solid #ddd",padding:"10px"},children:[e("h4",{style:{margin:"0 0 10px 0",fontSize:"12px"},children:"좁은 너비 (200px)"}),e(o,{icon:"folder",to:"/narrow",level:3,itemName:"좁은 공간에서의 표시"})]}),r("div",{style:{width:"400px",border:"1px solid #ddd",padding:"10px"},children:[e("h4",{style:{margin:"0 0 10px 0",fontSize:"12px"},children:"넓은 너비 (400px)"}),e(o,{icon:"folder",to:"/wide",level:3,itemName:"넓은 공간에서의 표시"})]})]}),parameters:{docs:{description:{story:"다양한 너비에서의 컴포넌트 동작을 확인할 수 있습니다."}}}},f={render:()=>e("div",{style:{width:"300px",height:"400px",overflow:"auto",border:"1px solid #ddd"},children:Array.from({length:50},(me,n)=>e(o,{icon:n%3===0?"folder":"file",to:`/item-${n}`,level:Math.floor(n/10)+1,selected:n===25,itemName:`아이템 ${n+1}`},n))}),parameters:{docs:{description:{story:"많은 수의 아이템이 렌더링될 때의 성능을 테스트할 수 있습니다."}}}},D={render:()=>e("div",{style:{width:"300px"},children:r("div",{style:{marginBottom:"10px"},children:[e("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px 0"},children:"각 아이템에 마우스를 올려보세요"}),e(o,{icon:"folder",to:"/hover1",itemName:"호버 테스트 1"}),e(o,{icon:"file",to:"/hover2",level:2,itemName:"호버 테스트 2"}),e(o,{icon:"code",to:"/hover3",level:3,itemName:"호버 테스트 3",selected:!0})]})}),parameters:{docs:{description:{story:"호버 효과를 테스트할 수 있습니다."}}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    itemName: '프론트엔드 로드맵',
    icon: 'folder',
    to: '/frontend'
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var N,S,y;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    itemName: '현재 선택된 항목',
    icon: 'folder_open',
    to: '/current',
    selected: true
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var A,b,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    itemName: '아이콘이 없는 항목',
    icon: '',
    to: '/no-icon'
  }
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var R,I,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    itemName: '레벨 1 (루트)',
    icon: 'folder',
    to: '/level1',
    level: 1
  }
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var _,L,F;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    itemName: '레벨 2 (1뎁스)',
    icon: 'folder',
    to: '/level2',
    level: 2
  }
}`,...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var z,T,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    itemName: '레벨 3 (2뎁스)',
    icon: 'folder',
    to: '/level3',
    level: 3
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var j,H,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    itemName: '레벨 4 (3뎁스)',
    icon: 'folder',
    to: '/level4',
    level: 4
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var $,J,P;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    itemName: '레벨 5 (4뎁스)',
    icon: 'folder',
    to: '/level5',
    level: 5
  }
}`,...(P=(J=l.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var V,W,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    itemName: '매우 긴 텍스트가 들어갔을 때의 동작을 확인하기 위한 스토리입니다',
    icon: 'folder',
    to: '/long-text',
    level: 2
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var q,G,K;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <RoadmapsSidebarItem icon='home' to='/home' itemName='홈' />
      <RoadmapsSidebarItem icon='folder' to='/folder' level={2} itemName='폴더' />
      <RoadmapsSidebarItem icon='file' to='/file' level={3} itemName='파일' />
      <RoadmapsSidebarItem icon='code' to='/code' level={3} itemName='코드' selected />
      <RoadmapsSidebarItem icon='settings' to='/settings' level={2} itemName='설정' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘을 사용한 예시입니다.'
      }
    }
  }
}`,...(K=(G=C.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '350px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <RoadmapsSidebarItem icon='folder_open' to='/frontend' selected level={1} itemName='프론트엔드 개발' />
      <RoadmapsSidebarItem icon='folder' to='/frontend/basic' level={2} itemName='프론트엔드 개발' />
      <RoadmapsSidebarItem icon='graph_1' to='/frontend/basic/html' level={3} itemName='HTML' />
      <RoadmapsSidebarItem icon='graph_1' to='/frontend/basic/css' level={3} itemName='CSS' />
      <RoadmapsSidebarItem icon='graph_1' to='/frontend/basic/js' level={3} itemName='JavaScript' />
      <RoadmapsSidebarItem icon='folder' to='/frontend/framework' level={2} itemName='프레임워크' />
      <RoadmapsSidebarItem icon='graph_1' to='/frontend/framework/react' level={3} itemName='React' />
      <RoadmapsSidebarItem icon='file' to='/frontend/framework/vue' level={3} itemName='Vue.js' />
      <RoadmapsSidebarItem icon='file' to='/frontend/framework/angular' level={3} itemName='Angular' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '실제 로드맵에서 사용될 수 있는 계층 구조의 예시입니다.'
      }
    }
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          비선택 상태
        </h4>
        <RoadmapsSidebarItem icon='folder' to='/inactive' itemName='비선택 아이템' />
      </div>
      <div style={{
      marginBottom: '16px'
    }}>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          선택 상태
        </h4>
        <RoadmapsSidebarItem icon='folder_open' to='/active' selected itemName='선택된 아이템' />
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          아이콘 없음
        </h4>
        <RoadmapsSidebarItem icon='' to='/no-icon' itemName='아이콘 없는 아이템' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 다양한 상태를 한 번에 비교할 수 있습니다.'
      }
    }
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,ne;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      width: '200px',
      marginBottom: '20px',
      border: '1px solid #ddd',
      padding: '10px'
    }}>
        <h4 style={{
        margin: '0 0 10px 0',
        fontSize: '12px'
      }}>
          좁은 너비 (200px)
        </h4>
        <RoadmapsSidebarItem icon='folder' to='/narrow' level={3} itemName='좁은 공간에서의 표시' />
      </div>
      <div style={{
      width: '400px',
      border: '1px solid #ddd',
      padding: '10px'
    }}>
        <h4 style={{
        margin: '0 0 10px 0',
        fontSize: '12px'
      }}>
          넓은 너비 (400px)
        </h4>
        <RoadmapsSidebarItem icon='folder' to='/wide' level={3} itemName='넓은 공간에서의 표시' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '다양한 너비에서의 컴포넌트 동작을 확인할 수 있습니다.'
      }
    }
  }
}`,...(ne=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,ae,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    height: '400px',
    overflow: 'auto',
    border: '1px solid #ddd'
  }}>
      {Array.from({
      length: 50
    }, (_, index) => <RoadmapsSidebarItem key={index} icon={index % 3 === 0 ? 'folder' : 'file'} to={\`/item-\${index}\`} level={Math.floor(index / 10) + 1} selected={index === 25} itemName={\`아이템 \${index + 1}\`} />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: '많은 수의 아이템이 렌더링될 때의 성능을 테스트할 수 있습니다.'
      }
    }
  }
}`,...(ie=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ue,se,de;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div style={{
      marginBottom: '10px'
    }}>
        <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px 0'
      }}>
          각 아이템에 마우스를 올려보세요
        </p>
        <RoadmapsSidebarItem icon='folder' to='/hover1' itemName='호버 테스트 1' />
        <RoadmapsSidebarItem icon='file' to='/hover2' level={2} itemName='호버 테스트 2' />
        <RoadmapsSidebarItem icon='code' to='/hover3' level={3} itemName='호버 테스트 3' selected />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '호버 효과를 테스트할 수 있습니다.'
      }
    }
  }
}`,...(de=(se=D.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Ae=["Default","Selected","WithoutIcon","Level1","Level2","Level3","Level4","Level5","LongText","DifferentIcons","HierarchyExample","StateComparison","ResponsiveTest","PerformanceTest","HoverTest"];export{t as Default,C as DifferentIcons,p as HierarchyExample,D as HoverTest,u as Level1,s as Level2,d as Level3,m as Level4,l as Level5,c as LongText,f as PerformanceTest,B as ResponsiveTest,a as Selected,v as StateComparison,i as WithoutIcon,Ae as __namedExportsOrder,ye as default};
