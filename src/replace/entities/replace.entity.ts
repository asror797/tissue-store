import { Taken } from "src/taken/entities/taken.entity";
import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity({name:'replace'})
export class Replace {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
      type:'bigint',
      nullable:false
   })
   amount:number

   @ManyToOne(() => Taken , taken => taken.replace)
   taken:Taken

   @CreateDateColumn()
   created_at:string

   @UpdateDateColumn()
   updated_at:string

}
