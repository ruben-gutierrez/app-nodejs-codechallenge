import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  } from "typeorm";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    transactionExternalId: string;

    @Column()
    tranferTypeId: number;

    @Column()
    statusId: number;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}


