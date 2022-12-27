import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReplaceService } from './replace.service';
import { CreateReplaceDto } from './dto/create-replace.dto';
import { UpdateReplaceDto } from './dto/update-replace.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('replace')
@UseGuards(new JwtAuthGuard())
export class ReplaceController {
  constructor(private readonly replaceService: ReplaceService) {}

  @Post()
  create(@Body() createReplaceDto: CreateReplaceDto) {
    return this.replaceService.create(createReplaceDto);
  }

  @Get()
  findAll() {
    return this.replaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.replaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReplaceDto: UpdateReplaceDto) {
    return this.replaceService.update(+id, updateReplaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.replaceService.remove(+id);
  }
}
