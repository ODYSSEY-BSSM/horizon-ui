interface Roadmap {
  id: number;
  title: string;
}

export interface GetDirectoryRes {
  id: number;
  name: string;
  parentId: number;
  childDirectories: GetDirectoryRes[];
  roadmaps: Roadmap[];
}
