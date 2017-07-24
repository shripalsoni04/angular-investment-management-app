import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDBService implements InMemoryDbService {
  createDb() {
    console.log('create db callled123 ');
    const fixedDeposit = [
      {
        id: '1',
        bankId: '1',
        bankName: 'Bank 1',
        accountNo: '12123112412',
        fdNumber: '1231123412312',
        amount: 50000,
        startDate: +new Date('2017-01-01'),
        endDate: +new Date('2017-12-31'),
        isReinvest: true
      },
      {
        id: '2',
        bankId: '2',
        bankName: 'Bank 2',
        accountNo: '4421234121',
        fdNumber: '4433434223455',
        amount: 25000,
        startDate: +new Date('2017-02-01'),
        endDate: +new Date('2018-01-31'),
        isReinvest: false
      },
      {
        id: '3',
        bankId: '3',
        bankName: 'Bank 3',
        accountNo: '21231212',
        fdNumber: '8372381232322',
        amount: 70000,
        startDate: +new Date('2017-03-01'),
        endDate: +new Date('2018-02-28'),
        isReinvest: true
      }
    ];
    return {
      'fixed-deposits': fixedDeposit
    };
  }
}
