import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationsModule } from './notifications/notifications.module';


@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: 'postgres://postgres:12345@localhost:5432/notification_db',
            port: 5432,
            username: 'postgres', 
            password: 'pYnsrbxCQfVpQmXzbbIzKrqGOiYyfruc',    
            database: 'railway',
            autoLoadEntities: true,
            synchronize: true,
        }),

        NotificationsModule,
    ],
})
 export class AppModule{}