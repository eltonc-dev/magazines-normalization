import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MagazineActions } from '../actions/magazine.actions';
import { MagazineSelectors } from '../selectors/magazine.selectors';
import { Magazine } from '../../models/magazine';

@Injectable({
  providedIn: 'root'
})
export class MagazineFacadeService {

  /**
   * Retrieve all magazines stored
   */
  magazines$: Observable<Magazine[]> = this.store.select(MagazineSelectors.getAll);

  constructor(
    private store: Store
  ) { }

  /**
   * Responsible to fetch all the data
   * Dispatches the fetchAll Action
   */
  fetchAll() {
    this.store.dispatch(MagazineActions.fetchAll());
  }

}
