import { Replace } from "src/replace/entities/replace.entity";
import { Tissue } from "src/tissue/entities/tissue.entity";
import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({name:'taken'})
export class Taken {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'bigint',
      nullable:false
   }) 
   amount:number

   @ManyToOne(() => Tissue , tissue => tissue.taken)
   tissue:Tissue

   @OneToMany(() => Replace , replace => replace.taken)
   replace:Replace[]

   @Column({
      type:'varchar',
      length:128
   })
   comment:string

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string

}
