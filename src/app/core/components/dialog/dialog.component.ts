import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

export declare type DialogType = 'alert' | 'confirm';

export interface DialogData {
  title: string;
  message: string;
  type: DialogType;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title: string;

  message: string;

  type: DialogType;

  constructor(
    @Inject(MD_DIALOG_DATA) private dialogData: DialogData
  ) {
    if (dialogData) {
      this.title = dialogData.title || '';
      this.message = dialogData.message || '';
      this.type = dialogData.type;
    }
  }

  ngOnInit() {
  }

}
