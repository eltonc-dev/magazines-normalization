import { TestBed } from '@angular/core/testing';

import { MagazineFacadeService } from './magazine-facade.service';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('MagazineFacadeService', () => {
  let service: MagazineFacadeService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });
    service = TestBed.inject(MagazineFacadeService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch fetchAll', function () {
    const spy = spyOn(store, 'dispatch');
    service.fetchAll();
    expect(spy).toHaveBeenCalled();
  });

});
