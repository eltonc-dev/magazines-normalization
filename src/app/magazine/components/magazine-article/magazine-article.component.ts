import { MagazineImage } from './../../models/magazine-image';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-magazine-article',
  templateUrl: './magazine-article.component.html',
  styleUrls: ['./magazine-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineArticleComponent {

  @Input() title!: string;
  @Input() textContent!: string;
  @Input() images?: MagazineImage[];

}
