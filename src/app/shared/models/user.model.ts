export class UserBankAccount {
  accountNumber: string;
  accountName: string;

  toLocal(remoteData: any) {
    this.accountNumber = remoteData.accountNumber;
    this.accountName = remoteData.accountName;
    return this;
  }
}

export class UserBank {
  id: string;
  name: string;
  accounts: UserBankAccount[] = [];

  toLocal(remoteData: any) {
    this.id = remoteData.id;
    this.name = remoteData.name;
    if (remoteData.accounts) {
      this.accounts = remoteData.accounts.map(account => new UserBankAccount().toLocal(account));
    }
    return this;
  }
}

export class User {
  userId: string;
  banks: UserBank[] = [];

  toLocal(remoteData: any) {
    this.userId = remoteData.userId;
    if (remoteData.banks) {
      this.banks = remoteData.banks.map(bank => new UserBank().toLocal(bank));
    }
    return this;
  }
}
