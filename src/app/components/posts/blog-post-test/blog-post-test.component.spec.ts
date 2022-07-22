import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTestComponent } from './blog-post-test.component';

describe('BlogPostTestComponent', () => {
  let component: BlogPostTestComponent;
  let fixture: ComponentFixture<BlogPostTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
