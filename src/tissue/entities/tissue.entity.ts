import { Color } from "src/color/entities/color.entity";
import { History } from "src/history/entities/history.entity";
import { Model } from "src/model/entities/model.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Taken } from "src/taken/entities/taken.entity";
import { Entity , Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";

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

   @ManyToMany(() => Taken ,taken => taken.tissue)
   taken:Taken[]

   @OneToMany(() => History , history => history.tissue)
   added:History[]

   @Column({
      type:'decimal',
      nullable:false
   })
   amount:number

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string
   
}
