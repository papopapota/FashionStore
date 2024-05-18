import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGigantComponent } from './categories-gigant.component';

describe('CategoriesGigantComponent', () => {
  let component: CategoriesGigantComponent;
  let fixture: ComponentFixture<CategoriesGigantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesGigantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesGigantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
