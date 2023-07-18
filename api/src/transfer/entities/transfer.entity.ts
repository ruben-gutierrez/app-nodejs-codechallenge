import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountExternalIdDebit: string;

    @Column()
    accountExternalIdCredit: string;

    @Column()
    tranferTypeId: number;

    @Column()
    statusId: number;

    @Column()
    value: number;
}


