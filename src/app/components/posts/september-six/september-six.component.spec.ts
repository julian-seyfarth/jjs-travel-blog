import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberSixComponent } from './september-six.component';

describe('SeptemberSixComponent', () => {
  let component: SeptemberSixComponent;
  let fixture: ComponentFixture<SeptemberSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptemberSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptemberSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
