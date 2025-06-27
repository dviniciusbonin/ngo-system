import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PackageController } from 'src/adapters/controllers/package-controller';
import { CreatePackageDto } from '../dtos/create-package.dto';
import { DataSource } from 'src/interfaces/datasource';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('packages')
@Controller({
  version: '1',
  path: '/packages',
})
export class NestPackageController {
  private packageController: PackageController;

  constructor(@Inject('DataSource') private dataSource: DataSource) {
    this.packageController = new PackageController(this.dataSource);
  }

  @Post()
  async create(@Body() createPackageDto: CreatePackageDto) {
    return this.packageController.registerPackage(createPackageDto);
  }
}
