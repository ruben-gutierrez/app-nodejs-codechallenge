import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    transactionExternalId: string;

    @Column()
    transactionType: string;

    @Column()
    transactionStatus: string;

    @Column()
    value: number;
}


