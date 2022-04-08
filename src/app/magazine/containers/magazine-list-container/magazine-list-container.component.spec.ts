import { useMagazineFacadeStub } from './../../store/facade/testing/magazine-facade.stub';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineListContainerComponent } from './magazine-list-container.component';

describe('MagazineListContainerComponent', () => {
  let component: MagazineListContainerComponent;
  let fixture: ComponentFixture<MagazineListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineListContainerComponent ],
      providers: [useMagazineFacadeStub]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
