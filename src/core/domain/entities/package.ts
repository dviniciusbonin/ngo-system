import { randomUUID } from 'crypto';
import { Item } from './item';
import { Product } from './product';

export abstract class Package {
  private _id: string;
  private _items: Item[] = [];

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  addItem(product: Product, quantity: number) {
    this._items.push(new Item(product.id, quantity));
  }

  finalize() {
    if (this._items.length === 0) throw new Error('Items should not be empty');
  }

  get id(): string {
    return this._id;
  }

  get items(): Item[] {
    return this._items;
  }
}
