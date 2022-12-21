import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ModelService {


  constructor(@InjectRepository(Model) private readonly repo:Repository<Model>) {}

  create(createModelDto: CreateModelDto) {

    const model = this.repo.create(createModelDto)

    return this.repo.save(model);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({where:{id:id}});
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
