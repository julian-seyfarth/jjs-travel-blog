import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBaseComponentComponent } from './post-base-component.component';

describe('PostBaseComponentComponent', () => {
  let component: PostBaseComponentComponent;
  let fixture: ComponentFixture<PostBaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBaseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
