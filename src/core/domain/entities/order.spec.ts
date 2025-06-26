import { randomUUID } from 'node:crypto';
import { Item } from './item';
import { Order, Status } from './order';

describe('Order', () => {
  it('should throw an error when creating an order with no items', () => {
    expect(() => new Order([])).toThrow('Items should not be empty');
  });

  it('should be able to finsish order', () => {
    const order = new Order([new Item(randomUUID(), 10)]);
    order.finish();
    expect(order.status).toBe(Status.Finished);
  });

  it('shold be able to create and order', () => {
    const order = new Order([new Item(randomUUID(), 10)]);
    expect(order).toBeInstanceOf(Order);
    expect(order.status).toBe(Status.Received);
    expect(order.id).toBeDefined();
  });
});
