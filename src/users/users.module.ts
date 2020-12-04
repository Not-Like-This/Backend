import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			secret: "sghfeuifsdfijdshdjfghdjfgh",
			signOptions: { expiresIn: "24h" },
		}),
	],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
