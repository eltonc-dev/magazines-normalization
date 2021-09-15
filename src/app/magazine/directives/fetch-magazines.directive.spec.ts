import { FetchMagazinesDirective } from './fetch-magazines.directive';
import { TestBed } from '@angular/core/testing';
import { useMagazineFacadeStub } from '../store/facade/testing/magazine-facade.stub';
import { MagazineFacadeService } from '../store/facade/magazine-facade.service';

describe('FetchMagazinesDirective', () => {
  let directive: FetchMagazinesDirective;
  let facade: MagazineFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FetchMagazinesDirective,
        useMagazineFacadeStub
      ]
    })

    directive = TestBed.inject(FetchMagazinesDirective);
    facade = TestBed.inject(MagazineFacadeService);

  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call fetchAll when handleClick fired', function () {
    const spy = spyOn(facade, 'fetchAll');
    directive.handleClick();
    expect(spy).toHaveBeenCalled();
  });

});
