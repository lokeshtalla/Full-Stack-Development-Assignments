// tests/item.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Item = require('../models/Item');
require('dotenv').config();

let token;
let itemId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await request(app).post('/api/auth/register').send({
    username: 'testuser',
    email: 'test@example.com',
    password: 'testpass'
  });

  const res = await request(app).post('/api/auth/login').send({
    email: 'test@example.com',
    password: 'testpass'
  });

  token = res.body.token;
});

afterAll(async () => {
  await Item.deleteMany({});
  await mongoose.connection.close();
});

describe('📦 Item API', () => {
  it('POST /api/items → success', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test Item', description: 'Test Desc', price: 100 });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
    itemId = res.body._id;
  });

  it('GET /api/items → should return items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/items/:id → should return item', async () => {
    const res = await request(app).get(`/api/items/${itemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(itemId);
  });

  it('PUT /api/items/:id → should update item', async () => {
    const res = await request(app)
      .put(`/api/items/${itemId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated Item' });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated Item');
  });

  it('DELETE /api/items/:id → should delete item', async () => {
    const res = await request(app)
      .delete(`/api/items/${itemId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  it('POST /api/items → failure (validation)', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send({ price: 50 });

    expect(res.statusCode).toBe(400);
  });
});
