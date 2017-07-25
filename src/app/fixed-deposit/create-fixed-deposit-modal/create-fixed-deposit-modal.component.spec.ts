import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositModalComponent } from './fixed-deposit-modal.component';

describe('FixedDepositModalComponent', () => {
  let component: FixedDepositModalComponent;
  let fixture: ComponentFixture<FixedDepositModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedDepositModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
