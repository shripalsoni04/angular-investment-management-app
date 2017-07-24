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

constructor(id: string, bankName: string, bankId: string, accountNo: string, fdNumber: string, amount: number,
    startDate: Date, endDate: Date, isReinvest: boolean) {

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
}
