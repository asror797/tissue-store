import { IsString , IsNumber, IsNotEmpty } from "class-validator";

export class AddTissueDto {

   @IsNumber()
   @IsNotEmpty()
   amount:number
}
