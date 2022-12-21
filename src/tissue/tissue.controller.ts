import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TissueService } from './tissue.service';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';

@Controller('tissue')
export class TissueController {
  constructor(private readonly tissueService: TissueService) {}

  @Post()
  create(@Body() createTissueDto: CreateTissueDto) {
    return this.tissueService.create(createTissueDto);
  }

  @Get()
  findAll() {
    return this.tissueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tissueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTissueDto: UpdateTissueDto) {
    return this.tissueService.update(+id, updateTissueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tissueService.remove(+id);
  }
}