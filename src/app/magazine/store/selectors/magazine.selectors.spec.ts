import { magazineFeatureKey } from '../reducers/magazine.reducer';
import { initialMagazineState } from '../state/magazine.state';
import { MagazineSelectors } from './magazine.selectors';
import { MagazineNormalizer } from '../normalizers/magazines-normalizers';


describe('Magazine Selectors', () => {
  it('should select the feature state', () => {
    const mockStore = {
      [magazineFeatureKey]: initialMagazineState
    }
    expect(MagazineSelectors.feature(mockStore)).toEqual(initialMagazineState);
  });

  describe('#getAll', () => {
    it('should return empty Array when entities is NULL', function () {
      const mockStore = {
        [magazineFeatureKey]: initialMagazineState
      }
      expect(MagazineSelectors.getAll(mockStore)).toEqual([])
    });

    it('should call denormalize with data and magazines ids', function () {
      const data = {
        entities: {
          magazines: {},
          issues: {},
          images: {},
          articles: {}
        },
        result: {
          magazines: [
            "firstId"
          ]
        }
      };
      const mockStore = { [magazineFeatureKey]: data }
      const spy = spyOn(MagazineNormalizer, 'denormalize');

      MagazineSelectors.getAll(mockStore);

      expect(spy).toHaveBeenCalledWith({ magazines: data.result.magazines }, data.entities)
    });
  });
});
