import { PartialType } from '@nestjs/mapped-types';
import { CreateTakenDto } from './create-taken.dto';

export class UpdateTakenDto extends PartialType(CreateTakenDto) {}
