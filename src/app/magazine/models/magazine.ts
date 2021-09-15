import { MagazineIssue } from './magazine-issue';

interface MagazineBase {
  id: string;
  name: string;
  issues: any[];
}

export interface Magazine extends MagazineBase {
  issues: MagazineIssue[];
}

export interface NormalizedMagazine extends MagazineBase {
  issues: string[];
}
