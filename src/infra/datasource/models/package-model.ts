export enum OrderStatus {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
}

export interface ProductModel {
  id: string;
  name: string;
  unit_type: string;
  stock: number;
  created_at: Date;
  updated_at: Date;
}

export interface ItemModel {
  id: string;
  quantity: number;
  product_id: string;
  receiving_package_id?: string;
  delivery_package_id?: string;
}

export interface ReceivingPackageModel {
  id: string;
  received_at: Date;
  items: ItemModel[];
}

export interface OrderModel {
  id: string;
  status: OrderStatus;
  created_at: Date;
  updated_at: Date;
  delivery_package?: DeliveryPackageModel;
}

export interface DeliveryPackageModel {
  id: string;
  delivery_at?: Date;
  items: ItemModel[];
  order: OrderModel;
}
