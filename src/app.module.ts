import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "bxzbaxoxwpjwwhby6y09-mysql.services.clever-cloud.com",
    "port": 3306,
    "username" : "ub24m8viqr9g5nfj",
    "password" : "7wiqCvaKND8txQcQQsKC",
    "database" : "bxzbaxoxwpjwwhby6y09",
    "entities" : ["dist/**/**.entity{.ts,.js}"],
    synchronize : true

  }),
  ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
