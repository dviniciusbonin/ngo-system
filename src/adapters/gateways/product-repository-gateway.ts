import { DataSource } from 'src/interfaces/datasource';
import { ProductRepository } from 'src/core/application/repositories/product-repository';
import { Product, UnitType } from 'src/core/domain/entities/product';

export class ProductRepositoryGateway implements ProductRepository {
  constructor(private dataSource: DataSource) {}
  async save(product: Product): Promise<void> {
    await this.dataSource.createProduct({
      id: product.id,
      name: product.name,
      unit_type: product.unitType.toString(),
      stock: product.stock,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  async findById(id: string): Promise<Product | null> {
    const product = await this.dataSource.getProductById(id);

    if (!product) return null;

    return new Product(
      product.name,
      UnitType[product.unit_type as keyof typeof UnitType],
      product.stock,
      product.created_at,
      product.updated_at,
      product.id,
    );
  }
}
