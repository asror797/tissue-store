import { IsNumber, IsString } from "class-validator";

export class CreateModelDto {
   
   @IsNumber()
   amount:number

   @IsString()
   name:string
}
