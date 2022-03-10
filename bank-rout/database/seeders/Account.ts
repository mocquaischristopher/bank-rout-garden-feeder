import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'
import { DateTime } from 'luxon'

export default class AccountSeeder extends BaseSeeder {
  public async run () {
    
    await Account.createMany ([
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 1000,
      overdraf: 300,
      customer_id: 4,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 2,
      overdraf: 0,
      customer_id: 5,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 542,
      overdraf: 150,
      customer_id: 6,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 56,
      overdraf: 50,
      customer_id: 7,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 1000000,
      overdraf: 10000,
      customer_id: 8,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 3678,
      overdraf: 300,
      customer_id: 9,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 503,
      overdraf: 0,
      customer_id: 10,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 85,
      overdraf: 50,
      customer_id: 11,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 900,
      overdraf: 300,
      customer_id: 12,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 666,
      overdraf: 150,
      customer_id: 13,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      accountNb: 'account' + "account.id" + Math.random().toString(36),
      balance: 1000000000,
      overdraf: 0,
      customer_id: 14,
      createdAt:DateTime.now(),
      updatedAt: DateTime.now()
    },
    ])
  }
}