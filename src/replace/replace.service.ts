import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Taken } from 'src/taken/entities/taken.entity';
import { Repository } from 'typeorm';
import { CreateReplaceDto } from './dto/create-replace.dto';
import { UpdateReplaceDto } from './dto/update-replace.dto';
import { Replace } from './entities/replace.entity';

@Injectable()
export class ReplaceService {

  constructor(
    @InjectRepository(Replace)  private repo:Repository<Replace>,
    @InjectRepository(Taken) private taken:Repository<Taken>
  ){}

  async create(createReplaceDto: CreateReplaceDto) {
    const replace = new Replace()
    replace.amount = createReplaceDto.amount
    replace.taken = await this.taken.findOne({where:{id:createReplaceDto.taken}})
    return this.repo.save(replace);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} replace`;
  }

  update(id: number, updateReplaceDto: UpdateReplaceDto) {
    return `This action updates a #${id} replace`;
  }

  remove(id: number) {
    return `This action removes a #${id} replace`;
  }
}
