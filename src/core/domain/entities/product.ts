import { randomUUID } from 'node:crypto';

export enum UnitType {
  WEIGHT,
  UNIT,
}

export class Product {
  private readonly MIN_NAME_LENGTH = 3;
  private _id: string;
  private _stock: number;

  constructor(
    readonly name: string,
    readonly unitType: UnitType,
    stock: number,
    id?: string,
  ) {
    if (name.trim().length < this.MIN_NAME_LENGTH)
      throw new Error(
        `Product name should be at least ${this.MIN_NAME_LENGTH} characters long`,
      );

    if (stock < 0) throw new Error('Stock should be a positive number');

    this._stock = stock;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  increaseStock(quantity: number): void {
    if (quantity <= 0)
      throw new Error('Quantity to increase stock should be greater than zero');

    this._stock += quantity;
  }

  get stock(): number {
    return this._stock;
  }
}
