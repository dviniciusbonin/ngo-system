import { Item } from './item';
import { Package } from './package';

export class ReceiveingPackage extends Package {
  private _receivedAt: Date;

  constructor(
    readonly items: Item[],
    receivedAt?: Date,
    id?: string,
  ) {
    super(items, id);
    this._receivedAt = receivedAt ?? new Date();
  }

  get receivedAt(): Date {
    return this._receivedAt;
  }
}
