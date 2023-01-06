import { Entity , PrimaryGeneratedColumn , Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Tissue } from "src/tissue/entities/tissue.entity";


@Entity({name:'history'})
export class History {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'decimal',
      nullable:false
   })
   amount:string

   @Column({
      type:'varchar',
      nullable:false
   })
   comment:string

   @ManyToOne(() => Tissue , tissue => tissue.added)
   tissue:Tissue

   @CreateDateColumn()
   created_at:string


   @UpdateDateColumn()
   updated_at:string

   // @ManyToOne()
}
