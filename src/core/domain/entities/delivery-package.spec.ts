import { randomUUID } from 'node:crypto';
import { Order, Status } from './order';
import { DeliveryPackage } from './delivery-package';
import { Item } from './item';

describe('DeliveryPackage', () => {
  const ITEMS: Item[] = [new Item(randomUUID(), 10), new Item(randomUUID(), 5)];

  it('should be able to create a delivery package with valid order and delivery date', () => {
    const order = new Order(ITEMS);
    const deliveryPackage = new DeliveryPackage(order, new Date('2022-01-01'));
    expect(deliveryPackage).toBeInstanceOf(DeliveryPackage);
  });

  it('should be able to finish the order', () => {
    const order = new Order(ITEMS);
    const deliveryPackage = new DeliveryPackage(order);

    deliveryPackage.finishOrder();

    expect(deliveryPackage.deliveryAt).toBeDefined();
    expect(order.status).toBe(Status.Finished);
  });
});
