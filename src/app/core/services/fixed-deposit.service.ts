import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { FixedDeposit } from '../../shared/models';
import { BaseService } from './base.service';

@Injectable()
export class FixedDepositService {

  private API_ENDPOINT = 'fixed-deposits';

  lstFixedDeposit$: BehaviorSubject<FixedDeposit[]> = new BehaviorSubject([]);

  constructor(private baseService: BaseService) { }

  getFixedDeposits() {
    return this.baseService
      .getList(this.API_ENDPOINT, FixedDeposit)
      .do((lstFD: FixedDeposit[]) => this.lstFixedDeposit$.next(lstFD));
  }

  getFixedDepositById(id: string) {
    return this.baseService.getById<FixedDeposit>(this.API_ENDPOINT, id, FixedDeposit);
  }

  createFixedDeposit(newFD: FixedDeposit) {
    return this.baseService
      .create(this.API_ENDPOINT, newFD)
      .do(() => {
        const lstFD = this.lstFixedDeposit$.getValue();
        this.lstFixedDeposit$.next([...lstFD, newFD]);
      });
  }

  updateFixedDeposit(fixedDeposit: FixedDeposit) {
    return this.baseService
      .update(this.API_ENDPOINT, fixedDeposit.id, fixedDeposit)
      .do(() => {
        const lstFD = this.lstFixedDeposit$.getValue();
        const newFDList: FixedDeposit[] = lstFD.map(fd => {
          if (fd.id === fixedDeposit.id) {
            const newFD = <FixedDeposit>{ ...fd, ...fixedDeposit };
            return newFD;
          } else {
            return fd;
          }
        });
        this.lstFixedDeposit$.next(newFDList);
      });
  }

  deleteFixedDeposit(id: string) {
    return this.baseService
      .delete(this.API_ENDPOINT, id)
      .do(() => {
        const lstFD = this.lstFixedDeposit$.getValue();
        const newFDList = lstFD.filter(fd => {
          return fd.id !== id;
        });
        this.lstFixedDeposit$.next(newFDList);
      });
  }
}
