import { Module } from '@nestjs/common';
import { TakenService } from './taken.service';
import { TakenController } from './taken.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taken } from './entities/taken.entity';
import { TissueService } from 'src/tissue/tissue.service';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Model } from 'src/model/entities/model.entity';
import { ModelService } from 'src/model/model.service';
import { ColorService } from 'src/color/color.service';
import { Color } from 'src/color/entities/color.entity';
import { Replace } from 'src/replace/entities/replace.entity';
import { ReplaceModule } from 'src/replace/replace.module';

@Module({
  imports:[TypeOrmModule.forFeature([Taken,Tissue,Model,Color,Replace])],
  controllers: [TakenController],
  providers: [TakenService,TissueService,ModelService,ColorService,ReplaceModule]
})
export class TakenModule {}
