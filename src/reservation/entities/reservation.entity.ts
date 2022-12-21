import { Tissue } from "src/tissue/entities/tissue.entity";
import { Entity , Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"reservation"})
export class Reservation {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'bigint',
      nullable:false
   })
   amount:string

   @Column({
      type:'boolean',
      default:false
   })
   is_taken:boolean

   @ManyToOne(() => Tissue , tissue => tissue.reservation)
   tissue:Tissue

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
}
