import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/color/entities/color.entity';
import { Model } from 'src/model/entities/model.entity';
import { Repository } from 'typeorm';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';
import { Tissue } from './entities/tissue.entity';

@Injectable()
export class TissueService {

  constructor(
    @InjectRepository(Tissue) private repo:Repository<Tissue>,
    @InjectRepository(Model) private model:Repository<Model>,
    @InjectRepository(Color) private color:Repository<Color>
  ){}

  async create(createTissueDto:CreateTissueDto) {

    const tissue = new Tissue()
    tissue.amount = createTissueDto.amount
    tissue.model = await this.model.findOne({where:{id:createTissueDto.model}})
    tissue.color = await this.color.findOne({where:{id:createTissueDto.color}})
    
    return this.repo.save(tissue);
  }

  findAll() {
    return this.repo.find({relations:['model','color']});
  }

  findOne(id: string) {
    return this.repo.findOne({where:{id:id}});
  }

  update(id: number, updateTissueDto: UpdateTissueDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: string) {

    return this.repo.delete(id);
  }


}
