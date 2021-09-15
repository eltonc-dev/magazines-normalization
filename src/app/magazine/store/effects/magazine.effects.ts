import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { MagazineActions } from '../actions/magazine.actions';
import { MagazineResourceService } from '../../services/magazine-resource.service';
import { Magazine } from '../../models/magazine';
import { MagazineNormalizer } from '../normalizers/magazines-normalizers';


@Injectable()
export class MagazineEffects {

  constructor(
    private actions$: Actions,
    private magazineResource: MagazineResourceService
  ) {}

  fetchAll$ = createEffect( () => this.actions$.pipe(
    ofType(MagazineActions.fetchAll),
    switchMap(() => this.magazineResource.fetchAll()
      .pipe(
        switchMap((magazines: Magazine[]) => of(MagazineActions.fetchAllSuccess(MagazineNormalizer.normalize(magazines)))),
        catchError( (error) => of(MagazineActions.fetchAllFailure({error})))
      ))
  ))

}
