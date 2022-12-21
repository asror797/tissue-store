import { IsString, isString  } from "class-validator";


export class CreateColorDto {
   @IsString()
   name:string

   @IsString()
   number:string
}
