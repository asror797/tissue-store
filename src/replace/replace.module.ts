import { Module } from '@nestjs/common';
import { ReplaceService } from './replace.service';
import { ReplaceController } from './replace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Replace } from './entities/replace.entity';
import { Taken } from 'src/taken/entities/taken.entity';
import { TakenService } from 'src/taken/taken.service';
import { TissueService } from 'src/tissue/tissue.service';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Model } from 'src/model/entities/model.entity';
import { ModelService } from 'src/model/model.service';
import { ColorService } from 'src/color/color.service';
import { Color } from 'src/color/entities/color.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Replace,Taken,Tissue,Model,Color])],
  controllers: [ReplaceController],
  providers: [ReplaceService,TakenService,TissueService,ModelService,ColorService]
})
export class ReplaceModule {}
