import { createFeatureSelector, createSelector } from '@ngrx/store';
import { magazineFeatureKey } from '../reducers/magazine.reducer';
import { MagazineState } from '../state/magazine.state';
import { Magazine } from '../../models/magazine';
import { MagazineNormalizer } from '../normalizers/magazines-normalizers';


const feature = createFeatureSelector<MagazineState>(
  magazineFeatureKey
);


const getAll = createSelector(feature, (state: MagazineState): Magazine[] => {
  if(state.entities && state.result) {
    const data = { magazines: state.result.magazines };
    return MagazineNormalizer.denormalize(data, state.entities )?.magazines || [];
  }
  return [];
});

export const MagazineSelectors = {
  feature,
  getAll
}
