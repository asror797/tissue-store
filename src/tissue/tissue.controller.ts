import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TissueService } from './tissue.service';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';
import { ColorService } from 'src/color/color.service';
import { ModelService } from 'src/model/model.service';

@Controller('tissue')
export class TissueController {
  constructor(
    private readonly tissueService: TissueService,
    private readonly colorService: ColorService,
    private readonly modelService: ModelService
  ) {}

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
    return this.tissueService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTissueDto: UpdateTissueDto) {
    return this.tissueService.update(+id, updateTissueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tissueService.remove(id);
  }
}
