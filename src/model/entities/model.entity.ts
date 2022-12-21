import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity({name:'model'})
export class Model {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   name:string

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
}
