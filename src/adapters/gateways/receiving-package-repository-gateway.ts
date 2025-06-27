import { ReceivingPackageRepository } from 'src/core/application/repositories/receiving-package-repository';
import { ReceivingPackage } from 'src/core/domain/entities/receiving-package';
import { DataSource } from 'src/interfaces/datasource';

export class ReceivingPackageRepositoryGateway
  implements ReceivingPackageRepository
{
  constructor(private dataSource: DataSource) {}
  async save(receivingPackage: ReceivingPackage): Promise<void> {
    await this.dataSource.createReceivingPackage({
      id: receivingPackage.id,
      received_at: receivingPackage.receivedAt,
      items: receivingPackage.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        product_id: item.productId,
        receiving_package_id: receivingPackage.id,
      })),
    });
  }
}
