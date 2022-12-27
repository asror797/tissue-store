import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TakenService } from './taken.service';
import { CreateTakenDto } from './dto/create-taken.dto';
import { UpdateTakenDto } from './dto/update-taken.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('taken')
@UseGuards(new JwtAuthGuard())
export class TakenController {
  constructor(private readonly takenService: TakenService) {}

  @Post()
  create(@Body() createTakenDto: CreateTakenDto) {
    return this.takenService.create(createTakenDto);
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
