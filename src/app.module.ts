import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DB_URL,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
