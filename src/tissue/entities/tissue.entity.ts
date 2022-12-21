import { Color } from "src/color/entities/color.entity";
import { Model } from "src/model/entities/model.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Entity , Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({name:'tissue'})
export class Tissue {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @ManyToOne(() => Model, model => model.tissue)
   model:Model

   @ManyToOne(() => Color , color => color.tissue )
   color:Color

   @OneToMany(() => Reservation , reservation => reservation.tissue)
   reservation:Reservation[]

   @Column({
      type:'bigint',
      nullable:false
   })
   amount:number

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
   
}
