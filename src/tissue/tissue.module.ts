import { Module } from '@nestjs/common';
import { TissueService } from './tissue.service';
import { TissueController } from './tissue.controller';

@Module({
  controllers: [TissueController],
  providers: [TissueService]
})
export class TissueModule {}
