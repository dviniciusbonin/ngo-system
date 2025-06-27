import { randomUUID } from 'node:crypto';
import { Item } from './item';

describe('Item', () => {
  it('should be able to create an item with valid id and quantity', () => {
    const item = new Item(randomUUID(), 10);
    expect(item).toBeInstanceOf(Item);
    expect(item.quantity).toBe(10);
    expect(item.id).toBeDefined();
  });

  it('should throw an error when creating an item with negative quantity', () => {
    expect(() => new Item(randomUUID(), -10)).toThrow(
      'Quantity should be greater than zero',
    );
  });

  it('should throw an error when creating an item with quantity zero', () => {
    expect(() => new Item(randomUUID(), -10)).toThrow(
      'Quantity should be greater than zero',
    );
  });
});
