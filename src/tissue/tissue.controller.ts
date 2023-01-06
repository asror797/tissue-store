import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TissueService } from './tissue.service';
import { CreateTissueDto } from './dto/create-tissue.dto';
import { UpdateTissueDto } from './dto/update-tissue.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AddTissueDto } from './dto/add-tissue.dto';
import { HistoryService } from 'src/history/history.service';
import { TakenService } from 'src/taken/taken.service';

@Controller('tissue')
@UseGuards( new JwtAuthGuard())
export class TissueController {
  constructor(
    private readonly tissueService: TissueService,
    private readonly historyService: HistoryService,
    private readonly takenService: TakenService
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

  @Patch('/add/:id')
  addTissue(@Param('id') id:string , @Body() addTissueDto:AddTissueDto) {

    const added = this.historyService.create({amount:45,comment:'ass'})
    return this.tissueService.addTissue(id,addTissueDto)
  }

  @Patch('/take/:id')
  takeTissue(@Param('id') id:string , @Body() addTissueDto:AddTissueDto) {
    return this.tissueService.takeTissue(id,addTissueDto)
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTissueDto: UpdateTissueDto) {
    return this.tissueService.update(id, updateTissueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tissueService.remove(id);
  }
}
