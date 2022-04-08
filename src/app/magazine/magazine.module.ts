import { MagazineFacadeService } from './store/facade/magazine-facade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchMagazinesDirective } from './directives/fetch-magazines.directive';
import { MagazineStoreModule } from './store/magazine-store.module';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MagazineListContainerComponent } from './containers/magazine-list-container/magazine-list-container.component';
import { MagazineIssueComponent } from './components/magazine-issue/magazine-issue.component';
import { MagazineArticleComponent } from './components/magazine-article/magazine-article.component';



@NgModule({
  declarations: [
    FetchMagazinesDirective,
    MagazineComponent,
    MagazineListContainerComponent,
    MagazineIssueComponent,
    MagazineArticleComponent
  ],
  imports: [
    CommonModule,
    MagazineStoreModule
  ],
  exports: [
    FetchMagazinesDirective,
    MagazineListContainerComponent
  ]
})
export class MagazineModule {
  // Initialize magazine items in the store
  constructor( private magazinesFacade: MagazineFacadeService){
    this.magazinesFacade.fetchAll();
  }
 }
