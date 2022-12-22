import { IsNumber, IsString } from "class-validator";


export class CreateReplaceDto {
   @IsString()
   taken:string

   @IsNumber()
   amount:number
}
