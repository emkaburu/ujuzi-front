import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCategoryComponent } from './crop-category.component';

describe('CropCategoryComponent', () => {
  let component: CropCategoryComponent;
  let fixture: ComponentFixture<CropCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
