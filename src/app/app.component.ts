import { Component } from '@angular/core';
import { MagazineFacadeService } from './magazine/store/facade/magazine-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  magazines$ = this.magazineFacade.magazines$;

  constructor(private magazineFacade: MagazineFacadeService) {}

}
