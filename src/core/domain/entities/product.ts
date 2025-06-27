import { randomUUID } from 'node:crypto';

export enum UnitType {
  KG = 'KG',
  UNIT = 'UNIDADE',
}

export class Product {
  private readonly MIN_NAME_LENGTH = 3;
  private _id: string;
  private _stock: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    readonly name: string,
    readonly unitType: UnitType,
    stock: number,
    createdAt?: Date,
    updatedAt?: Date,
    id?: string,
  ) {
    if (name.trim().length < this.MIN_NAME_LENGTH)
      throw new Error(
        `Product name should be at least ${this.MIN_NAME_LENGTH} characters long`,
      );

    if (stock < 0) throw new Error('Stock should be a positive number');

    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
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
    this._updatedAt = new Date();
  }

  get stock(): number {
    return this._stock;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}
