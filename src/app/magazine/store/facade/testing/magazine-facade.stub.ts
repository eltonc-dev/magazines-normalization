import { of } from 'rxjs';

import { MagazineFacadeService } from '../magazine-facade.service';


/*
 * I created this Magazine stub, to use in my unit tests
 * I did not treat the typing here to ensure this stub has all the properties and methods that the original has
 * Just because it was not the purpose of the test
 *
 */
class MagazineFacadeStub {
  magazines$ =  of([]);
  fetchAll(): void {}
}

export const useMagazineFacadeStub = {
  provide: MagazineFacadeService,
  useClass: MagazineFacadeStub
}
