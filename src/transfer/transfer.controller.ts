import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTransferDto } from "./create-transfer.dto";
import { TransferService } from "./transfer.service";

@Controller('transfer')
export class TransferController {
    constructor(private readonly transferService: TransferService){}

    @Post()
    create(@Body() dto: CreateTransferDto){
        return this.transferService.create(dto);
    }

    @Get()
    findAll(){
        return this.transferService.findAll();
    }

    @Patch('/:id')
    updateStatus(@Param('id') id:number, @Body('status') status:number){
        return this.transferService.updateStatus(id,status);
    }
}