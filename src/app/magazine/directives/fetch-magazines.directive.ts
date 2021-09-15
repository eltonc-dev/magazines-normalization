import { Directive, HostListener } from '@angular/core';
import { MagazineFacadeService } from '../store/facade/magazine-facade.service';

@Directive({
  selector: '[appFetchMagazines]'
})
export class FetchMagazinesDirective {

  constructor(private magazineFacade: MagazineFacadeService ) { }


  // TODO: Create a debounce decorator to avoid users to dispatch unnecessary fetch actions
  /*
   * I created this directive to connect with the Magazines Facade, and fire the fetchAll
   * I did a simple version, and a didn't treat a debounce here to avoid users to make unnecessary/multiple calls by clicking several times in the button.
   * I could use here a debounce decorator,or get the element via DI and use a `FromEvent` operator.
   * But i choose this way, because it was easier and it was not the main purpose of this challenge
   */
  @HostListener('click')
  handleClick() {
    this.magazineFacade.fetchAll();
  }

}
