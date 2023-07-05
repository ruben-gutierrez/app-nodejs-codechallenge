import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TransferModule } from './transfer/transfer.module';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'src/**/*')],
        synchronize: true,
      }),
      inject:[ConfigService]
    }),
    ClientsModule.register([
      {
        name: 'KAFKA',
        transport: Transport.KAFKA,
        options:{
          subscribe:{
            fromBeginning:true
          },
          consumer:{
            groupId: 'consumer'
    
          },
          client:{
            brokers:['pkc-lzvrd.us-west4.gcp.confluent.cloud:9092'],
            ssl: true,
            sasl:{
              mechanism: 'plain',
              username: 'KZAETXA7JN3AV2HE',
              password: 't4gAFKVGliWrEmAykL7ebuVbzI4e/RfknQZ7wJb1H4Jw+RoP5OejoOEaJcGd/adX'
            }
          }
        }
      }
    ]),
    TransferModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
