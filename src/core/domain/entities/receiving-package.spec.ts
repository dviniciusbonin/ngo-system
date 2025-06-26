import { Item } from './item';
import { randomUUID } from 'node:crypto';
import { ReceiveingPackage } from './receiving-package';

describe('ReceivingPackage', () => {
  it('should be able to create a receiving package', () => {
    const items: Item[] = [
      new Item(randomUUID(), 10),
      new Item(randomUUID(), 5),
    ];
    const receivingPackage = new ReceiveingPackage(items);

    expect(receivingPackage).toBeInstanceOf(ReceiveingPackage);
    expect(receivingPackage.receivedAt).toBeDefined();
    expect(receivingPackage.id).toBeDefined();
  });

  it('should throw an error when creating a receiving package with zero items', () => {
    expect(() => new ReceiveingPackage([])).toThrow(
      'Items should not be empty',
    );
  });
});
