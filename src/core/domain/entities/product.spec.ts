import { Product, UnitType } from './product';

describe('Product', () => {
  it('should be able to create a valid product', () => {
    const product = new Product('Feijão', UnitType.KG, 100);
    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBeDefined();
    expect(product.createdAt).toBeDefined();
    expect(product.updatedAt).toBeDefined();
  });

  it('should throw an error when creating a product with invalid name', () => {
    expect(() => new Product('M', UnitType.KG, 100)).toThrow(
      'Product name should be at least 3 characters long',
    );
  });

  it('should throw an error when creating a product with negative stock', () => {
    expect(() => new Product('Lata Ervilha', UnitType.UNIT, -100)).toThrow(
      'Stock should be a positive number',
    );
  });

  it('should increase stock by a given quantity', () => {
    const product = new Product('Macarrão', UnitType.KG, 100);
    product.increaseStock(50);
    expect(product.stock).toBe(150);
  });

  it('should throw an error when increasing stock by a negative quantity', () => {
    expect(() =>
      new Product('Pacote Macarrão', UnitType.UNIT, 100).increaseStock(-50),
    ).toThrow('Quantity to increase stock should be greater than zero');
  });

  it('should throw and error when increasing stock by zero', () => {
    expect(() =>
      new Product('Extrato tomate', UnitType.UNIT, 100).increaseStock(0),
    ).toThrow('Quantity to increase stock should be greater than zero');
  });
});
