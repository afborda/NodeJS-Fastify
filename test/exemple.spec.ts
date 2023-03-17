import { test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

test('new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transactions',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
