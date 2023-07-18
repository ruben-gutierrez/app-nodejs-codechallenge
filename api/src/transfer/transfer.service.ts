import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transfer } from './entities/transfer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private transferRepository: Repository<Transfer>,
  ) {}


  create(createTransferDto: CreateTransferDto) {
    const transfer = {
      transactionExternalId:createTransferDto.accountExternalIdDebit ?? createTransferDto.accountExternalIdCredit,
      tranferTypeId: createTransferDto.tranferTypeId,
      value: createTransferDto.value,
      statusId: 1
    }
    const newuser = this.transferRepository.create(transfer);
    return this.transferRepository.save(newuser);
  }

  findAll() {
    return this.transferRepository.find();
  }

  findOne(id: number) {
    return this.transferRepository.findOne({ where: { id } });
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return `This action updates a #${id} transfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} transfer`;
  }
}
