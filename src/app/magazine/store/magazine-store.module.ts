import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { magazineFeatureKey, reducer } from './reducers/magazine.reducer';
import { MagazineEffects } from './effects/magazine.effects';


/**
 * I created this Module to concentrate de StoreConfigurations
 * As The application grows, i like to be able to easily move this store part of the code away. To a lib, for example.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(magazineFeatureKey, reducer),
    EffectsModule.forFeature([MagazineEffects])
  ]
})
export class MagazineStoreModule { }
