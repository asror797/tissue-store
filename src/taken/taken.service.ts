import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Repository } from 'typeorm';
import { CreateTakenDto } from './dto/create-taken.dto';
import { UpdateTakenDto } from './dto/update-taken.dto';
import { Taken } from './entities/taken.entity';

@Injectable()
export class TakenService {

  constructor(
    @InjectRepository(Taken) private repo:Repository<Taken>,
    @InjectRepository(Tissue) private tissue:Repository<Tissue>
  ){}

  async create(createTakenDto: CreateTakenDto) {

    const taken = new Taken()
    taken.amount = createTakenDto.amount
    taken.comment = createTakenDto.comment
    taken.tissue = await this.tissue.findOne({where:{id:createTakenDto.tissue}})

    return this.repo.save(taken);
  }

  findAll() {
    return this.repo.find({relations:['replace']});
  }

  findOne(id: string) {
    return this.repo.findOne({where:{id:id}});
  }

  update(id: number, updateTakenDto: UpdateTakenDto) {
    return `This action updates a #${id} taken`;
  }

  remove(id: number) {
    return `This action removes a #${id} taken`;
  }
}
