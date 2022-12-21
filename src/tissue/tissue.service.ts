import { Injectable } from '@nestjs/common';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';

@Injectable()
export class TissueService {
  create(createTissueDto: CreateTissueDto) {
    return 'This action adds a new tissue';
  }

  findAll() {
    return `This action returns all tissue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tissue`;
  }

  update(id: number, updateTissueDto: UpdateTissueDto) {
    return `This action updates a #${id} tissue`;
  }

  remove(id: number) {
    return `This action removes a #${id} tissue`;
  }
}
