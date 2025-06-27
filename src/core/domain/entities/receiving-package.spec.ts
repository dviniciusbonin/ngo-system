import { Product, UnitType } from './product';
import { ReceivingPackage } from './receiving-package';

describe('ReceivingPackage', () => {
  it('should be able to create a receiving package', () => {
    const receivingPackage = new ReceivingPackage();
    receivingPackage.addItem(new Product('Arroz', UnitType.KG, 20), 10);
    receivingPackage.addItem(new Product('Lata Milho', UnitType.UNIT, 15), 5);

    expect(receivingPackage).toBeInstanceOf(ReceivingPackage);
    expect(receivingPackage.receivedAt).toBeDefined();
    expect(receivingPackage.id).toBeDefined();
    expect(receivingPackage.items).toHaveLength(2);
  });

  it('should throw an error when creating a receiving package with zero items', () => {
    expect(() => new ReceivingPackage().finalize()).toThrow(
      'Items should not be empty',
    );
  });
});
