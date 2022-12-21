import { IsString } from "class-validator"


export class CreateReservationDto {

   @IsString()
   amount:string

   @IsString()
   tissue:string
}
