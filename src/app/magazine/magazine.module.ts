import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MagazineEffects } from './store/effects/magazine.effects';
import { StoreModule } from '@ngrx/store';
import { magazineFeatureKey, reducer } from './store/reducers/magazine.reducer';
import { FetchMagazinesDirective } from './directives/fetch-magazines.directive';



@NgModule({
  declarations: [
    FetchMagazinesDirective
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(magazineFeatureKey, reducer),
    EffectsModule.forFeature([MagazineEffects])
  ],
  exports: [
    FetchMagazinesDirective
  ]
})
export class MagazineModule { }
