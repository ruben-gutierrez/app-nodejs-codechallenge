import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'transactionStatus'})

export class TransactionStatus{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    

}
