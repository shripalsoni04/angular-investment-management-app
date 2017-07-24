import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositListComponent } from './fixed-deposit-list.component';

describe('FixedDepositListComponent', () => {
  let component: FixedDepositListComponent;
  let fixture: ComponentFixture<FixedDepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedDepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
