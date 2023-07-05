import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
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
  } as MicroserviceOptions)
  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
