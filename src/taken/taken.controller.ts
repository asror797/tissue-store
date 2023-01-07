import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TakenService } from './taken.service';
import { CreateTakenDto } from './dto/create-taken.dto';
import { UpdateTakenDto } from './dto/update-taken.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TissueService } from 'src/tissue/tissue.service';

@Controller('taken')
@UseGuards(new JwtAuthGuard())
export class TakenController {
  constructor(
    private readonly takenService: TakenService,
    private readonly tissueService: TissueService
  ) {}

  @Post(':id')
  async create(@Param('id') id:string , @Body() createTakenDto: CreateTakenDto) {

    const takenTissue =  await this.tissueService.takeTissue(id,{amount:createTakenDto.amount})

    if(takenTissue) {
      return this.takenService.create(createTakenDto);
    } else {
      return { message:"error"}
    }

  }

  @Get()
  findAll() {
    return this.takenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakenDto: UpdateTakenDto) {
    return this.takenService.update(+id, updateTakenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takenService.remove(+id);
  }
}
