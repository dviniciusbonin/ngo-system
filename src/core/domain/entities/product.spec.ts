import { Product, UnitType } from './product';

describe('Product', () => {
  it('should be able to create a product with valid name, unitType and stock', () => {
    const product = new Product('Product Name', UnitType.WEIGHT, 100);
    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBeDefined();
  });

  it('should throw an error when creating a product with invalid name', () => {
    expect(() => new Product('P', UnitType.WEIGHT, 100)).toThrow(
      'Product name should be at least 3 characters long',
    );
  });

  it('should throw an error when creating a product with negative stock', () => {
    expect(() => new Product('Product Name', UnitType.WEIGHT, -100)).toThrow(
      'Stock should be a positive number',
    );
  });

  it('should increase stock by a given quantity', () => {
    const product = new Product('Product Name', UnitType.WEIGHT, 100);
    product.increaseStock(50);
    expect(product.stock).toBe(150);
  });

  it('should throw an error when increasing stock by a negative quantity', () => {
    expect(() =>
      new Product('Product Name', UnitType.WEIGHT, 100).increaseStock(-50),
    ).toThrow('Quantity to increase stock should be greater than zero');
  });

  it('should throw and error when increasing stock by zero', () => {
    expect(() =>
      new Product('Product Name', UnitType.WEIGHT, 100).increaseStock(0),
    ).toThrow('Quantity to increase stock should be greater than zero');
  });
});
