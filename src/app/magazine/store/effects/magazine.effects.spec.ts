import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { MagazineEffects } from './magazine.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MagazineActions } from '../actions/magazine.actions';
import { MagazineResourceService } from '../../services/magazine-resource.service';
import { MagazineNormalizer, normalizeMagazines } from '../normalizers/magazines-normalizers';
import { Magazine } from '../../models/magazine';
import Spy = jasmine.Spy;

describe('MagazineEffects', () => {
  let actions$: Observable<any>;
  let effects: MagazineEffects;
  let magazineResource: MagazineResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MagazineEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MagazineEffects);
    magazineResource = TestBed.inject(MagazineResourceService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchAll', () => {
    const result: Magazine[] = []
    const error = 'error';
    let spyFetchAll: Spy;
    let spyNormalize: Spy;

    beforeEach(() => {
      actions$ = of(MagazineActions.fetchAll);
      spyFetchAll = spyOn(magazineResource, 'fetchAll').and.returnValue(of([]));
      spyNormalize = spyOn(MagazineNormalizer, 'normalize');
    });

    it('should call fetchAll from MagazineResource', function () {
      effects.fetchAll$.subscribe();
      expect(spyFetchAll).toHaveBeenCalled();
    });

    it('should call MagazineNormalizer.normalize with empty array', function (done) {
      effects.fetchAll$.subscribe( () => {
        expect(spyNormalize).toHaveBeenCalledWith(result)
        done();
      });
    });

    it('should return fetchAllSuccess', function (done) {
      effects.fetchAll$.subscribe( (action) => {
        expect(action.type).toEqual(MagazineActions.fetchAllSuccess.type)
        done();
      });
    });

    it('should return fetchAllFailure ', function (done) {
      spyFetchAll.and.returnValue(throwError(error));
      effects.fetchAll$.subscribe( (action) => {
        expect(action.type).toEqual(MagazineActions.fetchAllFailure.type)
        done();
      });
    });
  })
});
