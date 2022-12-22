import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {

  constructor(
    @InjectRepository(Reservation)  private repo:Repository<Reservation>,
    @InjectRepository(Tissue)  private tissue:Repository<Tissue>
  ){}

  async create(createReservationDto: CreateReservationDto) {
    const reservation = new Reservation()
    reservation.amount = createReservationDto.amount
    reservation.tissue = await this.tissue.findOne({where:{id:createReservationDto.tissue}})

    return this.repo.save(reservation);
  }

  findAll() {
    return this.repo.find({relations:['tissue']});
  }

  findOne(id: string) {
    return this.repo.findOne({where:{id:id}});
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
