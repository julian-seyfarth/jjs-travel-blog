import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustSevenComponent } from './august-seven.component';

describe('AugustSevenComponent', () => {
  let component: AugustSevenComponent;
  let fixture: ComponentFixture<AugustSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
