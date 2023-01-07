import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/history.entity';
import { TissueService } from 'src/tissue/tissue.service';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Model } from 'src/model/entities/model.entity';
import { Color } from 'src/color/entities/color.entity';

@Module({
  imports:[TypeOrmModule.forFeature([History,Tissue,Model,Color])],
  controllers: [HistoryController],
  providers: [HistoryService,TissueService]
})
export class HistoryModule {}
