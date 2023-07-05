import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'transactionType'})

export class TransactionType{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
   

}
