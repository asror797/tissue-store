import { IsString , IsNumber, IsNotEmpty } from "class-validator";

export class CreateTissueDto {

   @IsNumber()
   @IsNotEmpty()
   amount:number

   @IsString()
   @IsNotEmpty()
   color:string

   @IsString()
   @IsNotEmpty()
   model:string
}
