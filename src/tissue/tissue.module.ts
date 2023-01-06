import { Module } from '@nestjs/common';
import { TissueService } from './tissue.service';
import { TissueController } from './tissue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tissue } from './entities/tissue.entity';
import { Color } from 'src/color/entities/color.entity';
import { Model } from 'src/model/entities/model.entity';
import { ColorService } from 'src/color/color.service';
import { ModelService } from 'src/model/model.service';
import { TakenService } from 'src/taken/taken.service';
import { Taken } from 'src/taken/entities/taken.entity';
import { History } from 'src/history/entities/history.entity';
import { HistoryService } from 'src/history/history.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Tissue,Model,Color,Taken,History])
  ],
  controllers: [TissueController],
  providers: [TissueService,ColorService,ModelService,TakenService,HistoryService]
})
export class TissueModule {}
