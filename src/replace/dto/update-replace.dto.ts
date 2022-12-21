import { PartialType } from '@nestjs/mapped-types';
import { CreateReplaceDto } from './create-replace.dto';

export class UpdateReplaceDto extends PartialType(CreateReplaceDto) {}
