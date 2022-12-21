import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { TissueModule } from 'src/tissue/tissue.module';

@Module({
  imports:[TypeOrmModule.forFeature([Reservation,Tissue])],
  controllers: [ReservationController],
  providers: [ReservationService,TissueModule]
})
export class ReservationModule {}
