import { reducer } from './magazine.reducer';
import { initialMagazineState } from '../state/magazine.state';
import { MagazineActions } from '../actions/magazine.actions';
import { NormalizedMagazine } from '../../models/magazine';
import { NormalizedMagazineIssue } from '../../models/magazine-issue';
import { NormalizedMagazineArticle } from '../../models/magazine-article';
import { MagazineImage } from '../../models/magazine-image';

describe('Magazine Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialMagazineState, action);

      expect(result).toBe(initialMagazineState);
    });
  });

  describe('#fetchAll', () => {
    it('should reset error when fetchAll', function () {
      const state = {
        ...initialMagazineState,
        error: 'some error'
      };

      const result = reducer(state, MagazineActions.fetchAll);

      expect(result.error).toBeNull();
    });

    it('should set entities and result in state', function () {
      const mockEntities = {
        magazines: { },
        issues: {},
        articles: {},
        images: {}
      };
      const mockResult = {
        magazines: []
      };

      const result = reducer(
        initialMagazineState,
        MagazineActions.fetchAllSuccess(
          {
            entities: mockEntities,
            result: mockResult
          }
        )
      )

      expect(result.entities).toEqual(mockEntities);
      expect(result.result).toEqual(mockResult);
    });

    it('should set error in state', function () {
      const error = 'error';

      const result = reducer(initialMagazineState, MagazineActions.fetchAllFailure({error}));

      expect(result.error).toEqual(error);
    });
  });
});
