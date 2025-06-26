import { randomUUID } from 'crypto';
import { Item } from './item';

export enum Status {
  Received = 'Recebido',
  Deliveried = 'Entregue',
  Finished = 'Finalizado',
}

export class Order {
  private _id: string;
  private _status: Status;

  constructor(
    readonly items: Item[],
    status?: Status,
    id?: string,
  ) {
    if (items.length === 0) throw new Error('Items should not be empty');

    this._id = id ?? randomUUID();
    this._status = status ?? Status.Received;
  }

  get id(): string {
    return this._id;
  }

  get status(): Status {
    return this._status;
  }

  finish() {
    this._status = Status.Finished;
  }
}
