import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixedDepositComponent } from './create-fixed-deposit.component';

describe('CreateFixedDepositComponent', () => {
  let component: CreateFixedDepositComponent;
  let fixture: ComponentFixture<CreateFixedDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFixedDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFixedDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
