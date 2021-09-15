import { createReducer, on } from '@ngrx/store';

import { initialMagazineState } from '../state/magazine.state';
import { MagazineActions } from '../actions/magazine.actions';

export const magazineFeatureKey = 'magazine';

export const reducer = createReducer(
  initialMagazineState,
  on(MagazineActions.fetchAll, (state) => ({ ...state, error: null })), // cleaning the error
  on(MagazineActions.fetchAllSuccess, (state, { entities, result }) => ({ ...state, entities, result }) ),
  on(MagazineActions.fetchAllFailure, (state, { error }) => ({ ...state, error }) )
);

