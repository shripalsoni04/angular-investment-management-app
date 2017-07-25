import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/finally';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import { FixedDeposit, User, UserBank, UserBankAccount } from '../../shared/models';
import { FixedDepositService, UserService } from '../../core/services';

@Component({
  selector: 'app-fixed-deposit-modal',
  templateUrl: './create-fixed-deposit-modal.component.html',
  styleUrls: ['./create-fixed-deposit-modal.component.scss']
})
export class CreateFixedDepositModalComponent implements OnInit {

  @ViewChild('ngForm') formGroupDirective: FormGroupDirective;

  fixedDeposit: FixedDeposit = new FixedDeposit();

  form: FormGroup;

  isEditMode = false;

  user: User;

  lstAccounts: UserBankAccount[] = [];

  bankChangeSubscription: Subscription;

  isBusy = false;

  constructor(
    private formBuilder: FormBuilder,
    private fdService: FixedDepositService,
    private userService: UserService,
    private mdDialogRef: MdDialogRef<CreateFixedDepositModalComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.prepareForm();
    this.loadData(data.fdId);
    this.isEditMode = !!data.fdId;
  }

  ngOnInit() {

  }

  saveFD() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const fdModel = new FixedDeposit();
      this.fixedDeposit.id = this.fixedDeposit.id || (Math.random() * 1000).toString();
      this.fixedDeposit.bankName = this.getBankNameById(formValue.bank);
      this.fixedDeposit.bankId = formValue.bank;
      this.fixedDeposit.accountNo = formValue.accountNo;
      this.fixedDeposit.fdNumber = formValue.fdNumber;
      this.fixedDeposit.amount = formValue.amount;
      this.fixedDeposit.startDate = formValue.startDate;
      this.fixedDeposit.endDate = formValue.endDate;
      this.fixedDeposit.isReinvest = formValue.reinvest;

      this.isBusy = true;
      (this.isEditMode ?
        this.fdService.updateFixedDeposit(this.fixedDeposit) :
        this.fdService.createFixedDeposit(this.fixedDeposit)).subscribe(() => {
          this.isBusy = false;
          this.mdDialogRef.close();
        }, () => {
          this.isBusy = false;
        });
    }
  }

  isErrorState(control: FormControl): boolean {
    const isInvalid = control && control.invalid;
    const isTouched = control && control.touched;
    const isSubmitted = this.formGroupDirective.submitted;
    return !!(isInvalid && (isTouched || isSubmitted));
  }

  private loadData(fdId?: string) {
    this.isBusy = true;
    Observable.forkJoin(
      this.getFDDetailsById(fdId),
      this.loadUser()
    ).subscribe((results) => {
      this.isBusy = false;
      this.fixedDeposit = results[0];
      this.user = results[1];
      this.prepareForm();
    }, () => {
      this.isBusy = false;
    });
  }

  private getFDDetailsById(id?: string) {
    return id ? this.fdService.getFixedDepositById(id) : Observable.of(new FixedDeposit());
  }

  private loadUser() {
    return this.userService.getUserById('1');
  }

  private prepareForm() {
    this.form = this.formBuilder.group({
      fdNumber: [this.fixedDeposit.fdNumber, Validators.required],
      bank: [this.fixedDeposit.bankId, Validators.required],
      accountNo: [this.fixedDeposit.accountNo, Validators.required],
      amount: [this.fixedDeposit.amount, Validators.required],
      startDate: [this.fixedDeposit.startDate, Validators.required],
      endDate: [this.fixedDeposit.endDate, Validators.required],
      reinvest: !!this.fixedDeposit.isReinvest
    });

    const bankFormControl = this.form.get('bank') as FormControl;
    this.setAccountList(bankFormControl.value);
    this.setupBankChangeListener(bankFormControl);
  }

  private setAccountList(bankId: string) {
    if (!this.user) {
      return false;
    }
    const selectedBank = this.user.banks.find(bank => bank.id === bankId);
    this.lstAccounts = selectedBank ? selectedBank.accounts : [];
  }

  private setupBankChangeListener(bankFormControl: FormControl) {
    this.unsubscribeBankChangeListener();
    this.bankChangeSubscription = bankFormControl.valueChanges.subscribe((value) => {
      this.form.get('accountNo').reset();
      this.setAccountList(value);
    });
  }

  private unsubscribeBankChangeListener() {
    if (this.bankChangeSubscription) {
      this.bankChangeSubscription.unsubscribe();
    }
  }

  private getBankNameById(bankId: string) {
    const selectedBank = this.user.banks.find(bank => bank.id === bankId);
    return selectedBank ? selectedBank.name : null;
  }
}
