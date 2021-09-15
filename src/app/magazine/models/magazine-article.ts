import { MagazineImage } from './magazine-image';

interface MagazineArticleBase {
  id: string;
  title: string;
  textContent: string;
  images: any[];
}

export interface MagazineArticle extends MagazineArticleBase {
  images: MagazineImage[];
}

export interface NormalizedMagazineArticle extends MagazineArticleBase {
  images: string[];
}
