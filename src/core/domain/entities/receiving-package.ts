import { Package } from './package';

export class ReceivingPackage extends Package {
  private _receivedAt: Date;

  constructor(receivedAt?: Date, id?: string) {
    super(id);
    this._receivedAt = receivedAt ?? new Date();
  }

  get receivedAt(): Date {
    return this._receivedAt;
  }
}
