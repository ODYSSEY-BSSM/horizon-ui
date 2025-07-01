import { GetDirectoryRes } from '@/types/directory/remote.ts';

export const mockData: GetDirectoryRes[] = [
  {
    id: 1,
    name: '프론트엔드 개발',
    parentId: 0,
    childDirectories: [
      {
        id: 11,
        name: 'React 생태계',
        parentId: 1,
        childDirectories: [],
        roadmaps: [
          {
            id: 101,
            title: 'React Hooks 마스터하기',
          },
          {
            id: 102,
            title: 'React 상태관리 완전정복',
          },
        ],
      },
      {
        id: 12,
        name: 'JavaScript 심화',
        parentId: 1,
        childDirectories: [],
        roadmaps: [
          {
            id: 103,
            title: 'ES6+ 문법 정리',
          },
          {
            id: 104,
            title: '비동기 프로그래밍',
          },
        ],
      },
    ],
    roadmaps: [
      {
        id: 105,
        title: '프론트엔드 개발자 로드맵',
      },
      {
        id: 106,
        title: '웹 접근성 가이드',
      },
    ],
  },
  {
    id: 2,
    name: '백엔드 개발',
    parentId: 0,
    childDirectories: [
      {
        id: 21,
        name: 'Node.js',
        parentId: 2,
        childDirectories: [],
        roadmaps: [
          {
            id: 201,
            title: 'Express.js 완벽 가이드',
          },
          {
            id: 202,
            title: 'Node.js 성능 최적화',
          },
        ],
      },
    ],
    roadmaps: [
      {
        id: 203,
        title: '백엔드 아키텍처 설계',
      },
      {
        id: 204,
        title: 'API 설계 가이드',
      },
    ],
  },
  {
    id: 3,
    name: '데이터베이스',
    parentId: 0,
    childDirectories: [],
    roadmaps: [
      {
        id: 301,
        title: 'SQL 기초부터 고급까지',
      },
      {
        id: 302,
        title: 'NoSQL 데이터베이스 선택 가이드',
      },
      {
        id: 303,
        title: '데이터베이스 성능 튜닝',
      },
    ],
  },
  {
    id: 4,
    name: 'DevOps',
    parentId: 0,
    childDirectories: [
      {
        id: 41,
        name: '클라우드 서비스',
        parentId: 4,
        childDirectories: [
          {
            id: 411,
            name: 'AWS',
            parentId: 41,
            childDirectories: [],
            roadmaps: [
              {
                id: 401,
                title: 'AWS 기초 서비스',
              },
              {
                id: 402,
                title: 'AWS 보안 모범사례',
              },
            ],
          },
        ],
        roadmaps: [
          {
            id: 403,
            title: '멀티클라우드 전략',
          },
        ],
      },
    ],
    roadmaps: [
      {
        id: 404,
        title: 'CI/CD 파이프라인 구축',
      },
      {
        id: 405,
        title: '컨테이너 오케스트레이션',
      },
    ],
  },
  {
    id: 5,
    name: '개인 프로젝트',
    parentId: 0,
    childDirectories: [],
    roadmaps: [
      {
        id: 501,
        title: '포트폴리오 웹사이트 만들기',
      },
      {
        id: 502,
        title: '토이 프로젝트 아이디어 모음',
      },
    ],
  },
];
