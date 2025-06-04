import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from "./app.service";


@Module({
    imports:[ ConfigModule.forRoot({
        isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            port: 5432,
            username: 'postgres', 
            password: 'pYnsrbxCQfVpQmXzbbIzKrqGOiYyfruc', 
            database: 'railway',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: true,
        }),

        NotificationsModule],
    controllers: [],
    providers: [AppService],
})
 export class AppModule{}
