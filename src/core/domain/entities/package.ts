import { randomUUID } from 'crypto';
import { Item } from './item';

export abstract class Package {
  private _id: string;

  constructor(
    readonly items: Item[],
    id?: string,
  ) {
    if (items.length === 0) throw new Error('Items should not be empty');
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }
}
