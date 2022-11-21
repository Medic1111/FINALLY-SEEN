export interface TeamData {
  collaborators: number;
  commits: number;
  prs: number;
  top: TopData[];
}

interface TopData {
  avatar_url: string;
  login: string;
  html_url: string;
}
