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

    const user = [
      {
        id: '1',
        banks: [
          {
            id: '1',
            name: 'Bank 1',
            accounts: [
              { accountNumber: '12123112412', accountName: 'Person 1' }
            ]
          },
          {
            id: '2',
            name: 'Bank 2',
            accounts: [
              { accountNumber: '4421234121', accountName: 'Joint A/C Person 1 & 2' }
            ]
          },
          {
            id: '3',
            name: 'Bank 3',
            accounts: [
              { accountNumber: '21231212', accountName: 'Person 1' }
            ]
          }
        ]
      }
    ];

    return {
      'fixed-deposits': fixedDeposit,
      'user': user
    };
  }
}
