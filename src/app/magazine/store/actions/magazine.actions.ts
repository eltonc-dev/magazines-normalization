import { createAction, props } from '@ngrx/store';

import { EntityMagazineState, ResultMagazineState } from '../state/magazine.state';

const fetchAll = createAction(
  '[Magazine] fetch All'
);

const fetchAllSuccess = createAction(
  '[Magazine] fetch All Success',
  props<{
    entities: EntityMagazineState | null,
    result: ResultMagazineState | null
  }>()
);

const fetchAllFailure = createAction(
  '[Magazine] fetch All Failure',
  props<{ error: any }>()
);

export const MagazineActions = {
  fetchAll,
  fetchAllSuccess,
  fetchAllFailure
};
