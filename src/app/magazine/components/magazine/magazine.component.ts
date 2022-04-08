import { MagazineIssue } from './../../models/magazine-issue';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineComponent {

  @Input() name!: string;
  @Input() issues!: MagazineIssue[];

}
