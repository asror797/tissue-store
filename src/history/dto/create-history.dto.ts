import { IsNumber, IsString } from "class-validator"

export class CreateHistoryDto {
   @IsNumber()
   amount:number

   @IsString()
   comment:string

}
