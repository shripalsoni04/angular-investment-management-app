import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { SnackBarComponent, SnackbarType } from '../components/snackbar';

@Injectable()
export class SnackBarService {

  constructor(private snackBar: MdSnackBar) { }

  showError(message: string, action?: string, config?: MdSnackBarConfig) {
    config = { ...config, ...{duration: 3000} };
    return this.prepareAndGetSnackBarRef(message, 'error', action, config);
  }

  showWarning(message: string, action?: string, config?: MdSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'warning', action, config);
  }

  showSuccess(message: string, action?: string, config?: MdSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'success', action, config);
  }

  showInfo(message: string, action?: string, config?: MdSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'info', action, config);
  }

  private prepareAndGetSnackBarRef(message: string, type: SnackbarType, action?: string, config?: MdSnackBarConfig) {
    const defaultConfig = {
      duration: 3000
    };
    config = { ...defaultConfig, ...config };
    const snackBarRef = this.snackBar.openFromComponent<SnackBarComponent>(SnackBarComponent, config);
    snackBarRef.instance.message = message;
    snackBarRef.instance.type = type;
    return snackBarRef;
  }
}
