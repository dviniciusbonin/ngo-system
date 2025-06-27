import { Product, UnitType } from 'src/core/domain/entities/product';
import { ReceivingPackage } from 'src/core/domain/entities/receiving-package';
import { ProductRepository } from '../repositories/product-repository';
import { ReceivingPackageRepository } from '../repositories/receiving-package-repository';

interface RegisterPackageInput {
  items: {
    productId?: string;
    productName?: string;
    unitType: UnitType;
    quantity: number;
  }[];
}

interface RegisterPackageOutput {
  package: ReceivingPackage;
}

export class RegisterPackage {
  constructor(
    private receivingPackageRepository: ReceivingPackageRepository,
    private productRepository: ProductRepository,
  ) {}

  async execute(input: RegisterPackageInput): Promise<RegisterPackageOutput> {
    const receivingPackage = new ReceivingPackage();

    for (const itemInput of input.items) {
      let product: Product | null = null;

      if (itemInput.productId) {
        product = await this.productRepository.findById(itemInput.productId);
        if (product) {
          product.increaseStock(itemInput.quantity);
          await this.productRepository.save(product);
        }
      }

      if (!product) {
        product = new Product(
          itemInput.productName as string,
          itemInput.unitType,
          itemInput.quantity,
        );
        await this.productRepository.save(product);
      }

      receivingPackage.addItem(product, itemInput.quantity);
    }

    receivingPackage.finalize();
    await this.receivingPackageRepository.save(receivingPackage);

    return { package: receivingPackage };
  }
}
