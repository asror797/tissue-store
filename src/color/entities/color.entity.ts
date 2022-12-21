import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'color'})
export class Color {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'varchar',
      length:64
   })
   name:string

   @Column({
      type:'varchar',
      length:64
   })
   number:string

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
}
