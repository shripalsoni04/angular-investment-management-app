import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixedDepositModalComponent } from './create-fixed-deposit-modal.component';

describe('FixedDepositModalComponent', () => {
  let component: CreateFixedDepositModalComponent;
  let fixture: ComponentFixture<CreateFixedDepositModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFixedDepositModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFixedDepositModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
