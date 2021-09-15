import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchMagazinesDirective } from './directives/fetch-magazines.directive';
import { MagazineStoreModule } from './store/magazine-store.module';



@NgModule({
  declarations: [
    FetchMagazinesDirective
  ],
  imports: [
    CommonModule,
    MagazineStoreModule
  ],
  exports: [
    FetchMagazinesDirective
  ]
})
export class MagazineModule { }
