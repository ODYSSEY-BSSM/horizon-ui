export interface Roadmap {
  id: number;
  title: string;
}

export interface Directory {
  id: number;
  name: string;
  parentId: number;
  directories: Directory[];
  roadmaps: Roadmap[];
}

export interface GetDirectoryRes {
  directories: Directory[];
  roadmaps: Roadmap[];
}
