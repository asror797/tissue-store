import { IsNumber, IsString ,  } from "class-validator";

export class CreateTakenDto {
   @IsNumber()
   amount:number

   @IsString()
   tissue:string

   @IsString()
   comment:string
}
