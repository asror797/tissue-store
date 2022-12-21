import { Injectable } from '@nestjs/common';
import { CreateReplaceDto } from './dto/create-replace.dto';
import { UpdateReplaceDto } from './dto/update-replace.dto';

@Injectable()
export class ReplaceService {
  create(createReplaceDto: CreateReplaceDto) {
    return 'This action adds a new replace';
  }

  findAll() {
    return `This action returns all replace`;
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
