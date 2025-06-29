import { Order } from './order';
import { Package } from './package';

export class DeliveryPackage extends Package {
  private _deliveryAt: Date;

  constructor(
    readonly order: Order,
    deliveryAt?: Date,
    id?: string,
  ) {
    super(id);
    this._deliveryAt = deliveryAt ?? new Date();
  }

  get deliveryAt(): Date {
    return this._deliveryAt;
  }

  get items() {
    return this.order.items;
  }

  finishOrder() {
    this.order.finish();
    this._deliveryAt = new Date();
  }
}
