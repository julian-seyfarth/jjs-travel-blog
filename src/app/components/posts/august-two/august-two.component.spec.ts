import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustTwoComponent } from './august-two.component';

describe('AugustTwoComponent', () => {
  let component: AugustTwoComponent;
  let fixture: ComponentFixture<AugustTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
