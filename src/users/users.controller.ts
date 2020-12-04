import { Body, Controller, Post, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { CreateUsersDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { UsersAuthGuard } from "./users.guard";

@Controller("users")
export class UsersController {
	constructor(private service: UsersService) {}

	@Post()
	register(@Body() dto: CreateUsersDto) {
		return this.service.register(dto);
	}

	@Post("/login")
	async login(@Body() dto: LoginUserDto) {
		const user = await this.service.login(dto);
		if (!user) throw new UnauthorizedException();
		return user;
	}
}
