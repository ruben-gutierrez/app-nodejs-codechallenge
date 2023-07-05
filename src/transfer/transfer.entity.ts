import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TransactionType } from "./type-transfer.entity";
import { TransactionStatus } from "./status-transfer.entity";

@Entity({name: 'transfer'})

export class Transfer{
    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    accountExternalIdDebit: string;
    @Column()
    status: number;
    @Column()
    accountExternalIdCredit: string;
    @Column()
    value: number;

    @OneToOne(()=>TransactionType)
    @JoinColumn({name:'tranferTypeId'})
    transactionType: TransactionType


    @OneToOne(()=>TransactionStatus)
    @JoinColumn({name:'status'})
    transactionStatus: TransactionStatus

}
