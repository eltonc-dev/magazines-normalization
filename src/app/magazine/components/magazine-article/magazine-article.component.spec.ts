import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineArticleComponent } from './magazine-article.component';

describe('MagazineArticleComponent', () => {
  let component: MagazineArticleComponent;
  let fixture: ComponentFixture<MagazineArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
