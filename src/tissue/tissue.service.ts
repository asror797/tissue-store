import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/color/entities/color.entity';
import { Model } from 'src/model/entities/model.entity';
import { Repository } from 'typeorm';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';
import { AddTissueDto } from './dto/add-tissue.dto';
import { Tissue } from './entities/tissue.entity';
import { Taken } from 'src/taken/entities/taken.entity';

@Injectable()
export class TissueService {

  constructor(
    @InjectRepository(Tissue) private repo:Repository<Tissue>,
    @InjectRepository(Model) private model:Repository<Model>,
    @InjectRepository(Color) private color:Repository<Color>
    // @InjectRepository(Taken) private taken:Repository<Taken>
  ){}

  async create(createTissueDto:CreateTissueDto) {

    const tissue = new Tissue()
    tissue.amount = Number(createTissueDto.amount)
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

  async addTissue(id:string,addTissueDto:AddTissueDto){

    const added = await this.repo.findOne({where:{id:id}})

    if(!added) {
      return {};
    }

    return await this.repo.update(id,{amount:Number(added.amount)+addTissueDto.amount});
  }

  async takeTissue(id:string,addTissueDto) {
    const added = await this.repo.findOne({where:{id:id}})

    if(!added) {
      return {};
    }



    return await this.repo.update(id,{amount:added.amount-addTissueDto.amount});
  }


  async findMany(id:string,){
    this.repo.find({
      where:{
        color:{
          id:id || id+1
        }
      }
    })
    return {} ;
  }


  update(id: string, updateTissueDto: UpdateTissueDto) {

    return `This action updates a #${id} model`;
  }

  remove(id: string) {

    return this.repo.delete(id);
  }


}
