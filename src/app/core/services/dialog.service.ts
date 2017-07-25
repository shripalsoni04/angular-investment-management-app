import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DialogComponent, DialogData } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {

  constructor(private mdDialog: MdDialog) { }

  alert(message: string, title: string = 'Alert') {
    return this.mdDialog.open(DialogComponent, {
      data: <DialogData>{
        title: title,
        message: message,
        type: 'alert'
      }
    });
  }

  confirm(message: string, title: string = 'Confirm') {
    return this.mdDialog.open(DialogComponent, {
      data: <DialogData>{
        title: title,
        message: message,
        type: 'confirm'
      }
    }).afterClosed();
  }

  confirmDelete(message: string = 'Are you sure you want to delete this record ?', title: string = 'Confirm Delete') {
    return this.confirm(message, title);
  }
}
