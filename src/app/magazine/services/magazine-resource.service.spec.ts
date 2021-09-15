import { TestBed } from '@angular/core/testing';

import { MagazineResourceService } from './magazine-resource.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MagazineService', () => {
  let service: MagazineResourceService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MagazineResourceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#fetchAll', () => {
    it('should make a GET with url "assets/data/magazines.json" ', function () {
      const spy = spyOn(http, 'get');
      service.fetchAll();
      expect(spy).toHaveBeenCalledWith('assets/data/magazines.json');
    });
  })
});
