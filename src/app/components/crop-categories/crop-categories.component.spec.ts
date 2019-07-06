import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCategoriesComponent } from './crop-categories.component';

describe('CropCategoriesComponent', () => {
  let component: CropCategoriesComponent;
  let fixture: ComponentFixture<CropCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
