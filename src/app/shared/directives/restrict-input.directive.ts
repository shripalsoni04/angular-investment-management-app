import { Directive, HostListener, Input } from '@angular/core';

const BACK_KEY_CODE = 8;
const TAB_KEY_CODE = 9;
const SHIFT_KEY_CODE = 16;
const ESC_KEY_CODE = 27;
const LEFT_KEY_CODE = 37;
const UP_KEY_CODE = 38;
const RIGHT_KEY_CODE = 39;
const DOWN_KEY_CODE = 40;

@Directive({ selector: '[restrictInput]' })
export class RestrictInputDirective {

  @Input() restrictInput: string;

  constructor() { }


  @HostListener('keydown', ['$event'])
  onInput(event: any) {
    if (this.restrictInput) {
      const keyCode = event.keyCode || event.which;
      if (keyCode === BACK_KEY_CODE || keyCode === TAB_KEY_CODE || keyCode === ESC_KEY_CODE || keyCode === SHIFT_KEY_CODE
        || keyCode === LEFT_KEY_CODE || keyCode === UP_KEY_CODE || keyCode === RIGHT_KEY_CODE || keyCode === DOWN_KEY_CODE) {
        return true;
      }

      const strKey = String.fromCharCode(keyCode);

      let pattern;
      if (this.restrictInput === 'number') {
        pattern = '\\d';
      } else {
        pattern = this.restrictInput;
      }

      const regEx = new RegExp(pattern);
      if (regEx.test(strKey)) {
        return true;
      } else {
        event.stopPropagation();
        return false;
      }
    }
  }
}
