import { Tissue } from "src/tissue/entities/tissue.entity";
import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";


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

   @OneToMany(() => Tissue , tissue => tissue.model)
   tissue:Tissue[]

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
}
