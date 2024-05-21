import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesAndBlogComponent } from './values-and-blog.component';

describe('ValuesAndBlogComponent', () => {
  let component: ValuesAndBlogComponent;
  let fixture: ComponentFixture<ValuesAndBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesAndBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValuesAndBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
