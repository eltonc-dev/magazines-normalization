import { MagazineArticle } from './magazine-article';

export interface MagazineIssueBase {
  id: string;
  month: number;
  year: number;
  articles: any[];
}

export interface MagazineIssue extends MagazineIssueBase {
  articles: MagazineArticle[];
}

export interface NormalizedMagazineIssue extends MagazineIssueBase {
  articles: string[];
}
