import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberOneComponent } from './september-one.component';

describe('SeptemberOneComponent', () => {
  let component: SeptemberOneComponent;
  let fixture: ComponentFixture<SeptemberOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptemberOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptemberOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
