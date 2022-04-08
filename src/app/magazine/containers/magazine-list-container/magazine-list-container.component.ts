import { MagazineFacadeService } from './../../store/facade/magazine-facade.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-magazine-list-container',
  templateUrl: './magazine-list-container.component.html',
  styleUrls: ['./magazine-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineListContainerComponent {

  magazines$ = this.magazineFacade.magazines$;

  constructor(private magazineFacade: MagazineFacadeService) {}

}
