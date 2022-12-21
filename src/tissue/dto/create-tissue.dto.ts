import { IsString , IsNumber } from "class-validator";

export class CreateTissueDto {

   @IsNumber()
   amount:number

   @IsString()
   color:string

   @IsString()
   model:string
}
