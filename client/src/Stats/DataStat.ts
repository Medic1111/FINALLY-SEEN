export interface DataStat {
  collaborators: number;
  commits: number;
  prs: number;
  top: StatArray[];
}

interface StatArray {
  avatar_url: string;
  login: string;
  html_url: string;
}
