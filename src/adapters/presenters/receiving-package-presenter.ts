import { ReceivingPackage } from 'src/core/domain/entities/receiving-package';

export class ReceivingPackagePresenter {
  static toJSON(receivingPackage: ReceivingPackage) {
    return {
      id: receivingPackage.id,
      receivedAt: receivingPackage.receivedAt.toISOString(),
      items: receivingPackage.items.map((item) => ({
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
  }
}
