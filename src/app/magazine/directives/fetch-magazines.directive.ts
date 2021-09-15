import { Directive, HostListener } from '@angular/core';
import { MagazineFacadeService } from '../store/facade/magazine-facade.service';

@Directive({
  selector: '[appFetchMagazines]'
})
export class FetchMagazinesDirective {

  constructor(private magazineFacade: MagazineFacadeService ) { }


  // TODO: Create a debounce decorator to avoid users to dispatch unnecessary fetch actions
  @HostListener('click')
  handleClick() {
    this.magazineFacade.fetchAll();
  }

}
