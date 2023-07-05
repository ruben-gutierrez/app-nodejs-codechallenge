import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA')
    private readonly kafka: ClientProxy) {}

  @MessagePattern('create-transfer')
  transactionCreate(@Payload() payload:any){
    Logger.log(payload, AppController.name)
  }

  @Post('/transaction')
  createTransaction(
    @Body() transaction:object
    ){
      const resp = this.kafka.emit('create-transfer', {transaction} )    
      return {transaction,response:resp};
    }
    

  @Get('/transaction')
  getTransaction(): string {
    return this.appService.getTransaction();

  }

  @Post('/transactionUpdate')
  public transactionUpdate (
    @Body('message') message:string,
    @Body('transaction') transaction:object
  ){
    return this.kafka.emit('transaction.update', {
      message,
      transaction
    })
  }
}
