import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineIssueComponent } from './magazine-issue.component';

describe('MagazineIssueComponent', () => {
  let component: MagazineIssueComponent;
  let fixture: ComponentFixture<MagazineIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
