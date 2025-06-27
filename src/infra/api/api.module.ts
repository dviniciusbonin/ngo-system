import { Module } from '@nestjs/common';
import { NestPackageController } from './controllers/nest-package.controller';
import { DataSourceModule } from '../datasource/datasource.module';

@Module({
  imports: [DataSourceModule],
  controllers: [NestPackageController],
})
export class ApiModule {}
