import { DataSource } from 'src/interfaces/datasource';
import { ProductModel } from '../models/product-model';
import { PrismaService } from './prisma.service';
import { ReceivingPackageModel } from '../models/package-model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDataSource implements DataSource {
  constructor(private prisma: PrismaService) {}

  async createProduct(product: ProductModel): Promise<void> {
    await this.prisma.product.create({
      data: {
        name: product.name,
        stock: product.stock,
        unit_type: product.unit_type,
        created_at: product.created_at,
        updated_at: product.updated_at,
        id: product.id,
      },
    });
  }

  async getProductById(id: string): Promise<ProductModel | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) return null;

    return {
      id: product.id,
      name: product.name,
      unit_type: product.unit_type,
      stock: product.stock,
      created_at: product.created_at,
      updated_at: product.updated_at,
    };
  }

  async createReceivingPackage(
    receivingPackage: ReceivingPackageModel,
  ): Promise<void> {
    await this.prisma.receivingPackage.create({
      data: {
        received_at: receivingPackage.received_at,
        items: {
          createMany: {
            data: receivingPackage.items.map((item) => ({
              id: item.id,
              quantity: item.quantity,
              product_id: item.product_id,
            })),
          },
        },
        id: receivingPackage.id,
      },
    });
  }
}
