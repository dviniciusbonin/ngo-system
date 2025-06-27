import { Module } from '@nestjs/common';
import { PrismaDataSource } from './prisma/prisma-datasource';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'DataSource',
      useClass: PrismaDataSource,
    },
  ],
  exports: ['DataSource'],
})
export class DataSourceModule {}
