import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tissue } from 'src/tissue/entities/tissue.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {

  constructor(
    @InjectRepository(History) private repo:Repository<History> ,
    @InjectRepository(Tissue) private tissue:Repository<Tissue>
  ){}

  async create(id:string ,createHistoryDto:CreateHistoryDto) {

    const newHistory = new History()
    newHistory.amount = createHistoryDto.amount
    newHistory.comment = createHistoryDto.comment
    newHistory.tissue = await this.tissue.findOne({where:{id:id}})
    return await this.repo.save(newHistory);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
