import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Transfer } from "./transfer.entity";
import { CreateTransferDto } from "./create-transfer.dto";

@Injectable()
export class TransferService {
    constructor(
        @InjectRepository(Transfer) private readonly transferRepository: Repository<Transfer>) {}

    async create( dto: CreateTransferDto){
        dto.status = 0;
        const transfer = this.transferRepository.create(dto);
        return await this.transferRepository.save(transfer);
    }

    findAll(){
        return this.transferRepository.find({
            relations:['transactionType']
        })
    }
    findOne(){
        return this.transferRepository.find({where:{id:1}})
    }

    async updateStatus(id: number, status:number){
        const transferItem = await this.transferRepository.findOne({where:{id}});
        transferItem.status = status;
        return await this.transferRepository.save(transferItem);
    }
}
