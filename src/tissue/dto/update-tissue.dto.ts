import { PartialType } from '@nestjs/mapped-types';
import { CreateTissueDto } from './create-tissue.dto';

export class UpdateTissueDto extends PartialType(CreateTissueDto) {}
