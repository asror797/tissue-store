import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'users'})
export class User {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'varchar',
      unique:true,
      nullable:false
   })
   username:string

   @Column({
      type:'varchar',
      length:128,
      nullable:false
   })
   password:string
}
