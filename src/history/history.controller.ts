import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { TissueService } from 'src/tissue/tissue.service';

@Controller('history')
export class HistoryController {
  constructor(
    private readonly historyService: HistoryService,
    private readonly tissueService: TissueService
  ) {}

  @Post('/:id')
  async create( @Param('id') id:string ,@Body() createHistoryDto: CreateHistoryDto) {

    const added = await this.tissueService.addTissue(id,{amount:createHistoryDto.amount})

    if(added) {
      return this.historyService.create(id ,createHistoryDto);
    } else {
      return {message:'error'}
    }
  }

  @Get()
  findAll() {
    return this.historyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(+id, updateHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyService.remove(+id);
  }
}
