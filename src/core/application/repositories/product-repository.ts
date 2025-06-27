import { Product } from 'src/core/domain/entities/product';

export abstract class ProductRepository {
  abstract save(product: Product): Promise<void>;
  abstract findById(id: string): Promise<Product | null>;
}
