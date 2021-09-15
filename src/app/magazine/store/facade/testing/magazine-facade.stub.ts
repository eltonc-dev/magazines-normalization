import { of } from 'rxjs';

import { MagazineFacadeService } from '../magazine-facade.service';



class MagazineFacadeStub {
  magazines$ =  of([]);
  fetchAll(): void {}
}

export const useMagazineFacadeStub = {
  provide: MagazineFacadeService,
  useClass: MagazineFacadeStub
}
