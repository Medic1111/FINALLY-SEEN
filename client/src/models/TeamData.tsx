export interface TeamData {
  collaborators: number;
  commits: number;
  prs: number;
  top: {
    avatar_url: string;
    login: string;
    html_url: string;
  }[];
}
