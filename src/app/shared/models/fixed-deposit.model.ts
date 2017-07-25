export class FixedDeposit {
  id: string;
  bankName: string;
  bankId: string;
  accountNo: string;
  fdNumber: string;
  amount: number;
  startDate: Date;
  endDate: Date;
  isReinvest: boolean;

constructor(id?: string, bankName?: string, bankId?: string, accountNo?: string, fdNumber?: string, amount?: number,
    startDate?: Date, endDate?: Date, isReinvest?: boolean) {

      this.id = id;
      this.bankName = bankName;
      this.bankId = bankId;
      this.accountNo = accountNo;
      this.fdNumber = fdNumber;
      this.amount = amount;
      this.startDate = startDate;
      this.endDate = endDate;
      this.isReinvest = isReinvest;
  }

  toLocal(remoteModel: any) {
    this.id = remoteModel.id;
    this.bankName = remoteModel.bankName;
    this.bankId = remoteModel.bankId;
    this.accountNo = remoteModel.accountNo;
    this.fdNumber = remoteModel.fdNumber;
    this.amount = remoteModel.amount;
    this.startDate = remoteModel.startDate ? new Date(remoteModel.startDate) : null;
    this.endDate = remoteModel.endDate ? new Date(remoteModel.endDate) : null;
    this.isReinvest = remoteModel.isReinvest;
    return this;
  }
}
