import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Model } from './model/entities/model.entity';
import { ModelModule } from './model/model.module';
import { ColorModule } from './color/color.module';
import { Color } from './color/entities/color.entity';
import { TissueModule } from './tissue/tissue.module';
import { Tissue } from './tissue/entities/tissue.entity';
import { ReservationModule } from './reservation/reservation.module';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReplaceModule } from './replace/replace.module';
import { TakenModule } from './taken/taken.module';
import { Taken } from './taken/entities/taken.entity';
import { Replace } from './replace/entities/replace.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'asror',
      port:5432,
      password:'aaa13579#',
      database:'storetissue',
      host:'localhost',
      entities:[Model,Color,Tissue,Reservation,Taken,Replace],
      synchronize:true
    }),
    ModelModule,
    ColorModule,
    TissueModule,
    ReservationModule,
    ReplaceModule,
    TakenModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
