import { MagazineArticle } from './../../models/magazine-article';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-magazine-issue',
  templateUrl: './magazine-issue.component.html',
  styleUrls: ['./magazine-issue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineIssueComponent {

  @Input() month!: number;
  @Input() year!: number;
  @Input() articles?: MagazineArticle[];

}
