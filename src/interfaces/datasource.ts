import { ReceivingPackageModel } from 'src/infra/datasource/models/package-model';
import { ProductModel } from 'src/infra/datasource/models/product-model';

export interface DataSource {
  createProduct: (product: ProductModel) => Promise<void>;
  getProductById: (id: string) => Promise<ProductModel | null>;
  createReceivingPackage: (
    receivingPackage: ReceivingPackageModel,
  ) => Promise<void>;
}
