import { NormalizedMagazine } from '../../models/magazine';
import { NormalizedMagazineIssue } from '../../models/magazine-issue';
import { NormalizedMagazineArticle } from '../../models/magazine-article';
import { MagazineImage } from '../../models/magazine-image';

export interface EntityMagazineState {
  magazines: { [key: string]: NormalizedMagazine }
  issues: { [key: string]: NormalizedMagazineIssue }
  articles: { [key: string]: NormalizedMagazineArticle }
  images: { [key: string]: MagazineImage }
}

export interface ResultMagazineState {
  magazines: string[];
}

export interface MagazineState {
  entities: EntityMagazineState | null,
  result:  ResultMagazineState | null;
  error: any;
}

export const initialMagazineState: MagazineState = {
  entities: null,
  result: null,
  error: null
};
