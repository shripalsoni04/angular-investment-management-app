import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FixedDeposit } from '../../shared/models';

@Injectable()
export class FixedDepositService {

  lstFixedDeposit$: BehaviorSubject<FixedDeposit[]> = new BehaviorSubject([]);

  constructor() { }

  getFixedDeposits() {
    const lstFD = [
      new FixedDeposit('1', 'Bank 1', '1', '12123112412', '1231123412312', 50000, new Date('2017-01-01'), new Date('2017-12-31'), true),
      new FixedDeposit('2', 'Bank 2', '2', '4421234121', '4433434223455', 25000, new Date('2017-02-01'), new Date('2018-01-31'), false),
      new FixedDeposit('3', 'Bank 3', '3', '21231212', '8372381232322', 70000, new Date('2017-03-01'), new Date('2018-02-28'), true)
    ];

    this.lstFixedDeposit$.next(lstFD);
    return Observable.of(lstFD);
  }

  createFixedDeposit(newFD: FixedDeposit) {
    const lstFD = this.lstFixedDeposit$.getValue();
    this.lstFixedDeposit$.next([...lstFD, newFD]);
    return Observable.of(newFD);
  }

  updateFixedDeposit(fixedDeposit: FixedDeposit) {
    const lstFD = this.lstFixedDeposit$.getValue();
    const existingFD = lstFD.find(fd => fd.id === fixedDeposit.id);
    const newFDList = lstFD.map(fd => {
      if (fd.id === fixedDeposit.id) {
        const newFD = { ...fd, ...fixedDeposit };
        return newFD;
      } else {
        return fd;
      }
    });
    this.lstFixedDeposit$.next(newFDList);
    return Observable.of(fixedDeposit);
  }

  deleteFixedDeposit(id: string) {
    const lstFD = this.lstFixedDeposit$.getValue();
    const newFDList = lstFD.filter(fd => {
      return fd.id !== id;
    });
    this.lstFixedDeposit$.next(newFDList);
    return Observable.of(id);
  }
}
