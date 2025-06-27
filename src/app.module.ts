import { Module } from '@nestjs/common';
import { ApiModule } from './infra/api/api.module';

@Module({
  imports: [ApiModule],
  providers: [],
})
export class AppModule {}
