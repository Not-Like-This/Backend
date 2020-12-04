import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ReportsModule } from "./reports/reports.module";
import { SpotsModule } from './spots/spots.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DB_URL,
			synchronize: true,
		}),
		UsersModule,
		ReportsModule,
		SpotsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
