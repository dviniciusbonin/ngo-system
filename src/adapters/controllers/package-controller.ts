import { DataSource } from 'src/interfaces/datasource';
import { ReceivingPackageRepositoryGateway } from '../gateways/receiving-package-repository-gateway';
import { ProductRepositoryGateway } from '../gateways/product-repository-gateway';
import { RegisterPackage } from 'src/core/application/usecases/register-package';
import { UnitType } from 'src/core/domain/entities/product';
import { ReceivingPackagePresenter } from '../presenters/receiving-package-presenter';

export interface RegisterPackageControllerInput {
  items: {
    productId?: string;
    productName?: string;
    unitType: UnitType;
    quantity: number;
  }[];
}

export class PackageController {
  constructor(private dataSource: DataSource) {}

  async registerPackage({ items }: RegisterPackageControllerInput) {
    const receivingPackageGateway = new ReceivingPackageRepositoryGateway(
      this.dataSource,
    );
    const productGateway = new ProductRepositoryGateway(this.dataSource);
    const registerPackageUseCase = new RegisterPackage(
      receivingPackageGateway,
      productGateway,
    );

    const output = await registerPackageUseCase.execute({
      items: items,
    });

    return ReceivingPackagePresenter.toJSON(output.package);
  }
}
