import { randomUUID } from 'node:crypto';

export class Item {
  private _id: string;
  private _quantity: number;

  constructor(
    readonly productId: string,
    quantity: number,
    id?: string,
  ) {
    if (quantity <= 0) throw new Error('Quantity should be greater than zero');

    this._quantity = quantity;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get quantity(): number {
    return this._quantity;
  }
}
