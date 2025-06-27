import { ReceivingPackage } from 'src/core/domain/entities/receiving-package';

export abstract class ReceivingPackageRepository {
  abstract save(receivingPackage: ReceivingPackage): Promise<void>;
}
