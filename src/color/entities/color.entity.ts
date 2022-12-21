import { Tissue } from "src/tissue/entities/tissue.entity";
import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

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

   @OneToMany(() => Tissue , tissue => tissue.color)
   tissue:Tissue[]

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
}
