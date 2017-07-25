import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { User } from '../../shared/models';

@Injectable()
export class UserService {

  private API_ENDPOINT = {
    user: '/user',
    userBank: (userId) => {
      return `user/${userId}/bank`;
    },
    userBankAcNumbers: (userId, bankId) => {
      return `user/${userId}/bank/${bankId}/account-number`;
    }
  };

  constructor(private baseService: BaseService) { }

  getUserById(userId: string) {
    return this.baseService.getById<User>(this.API_ENDPOINT.user, userId, User);
  }
}
