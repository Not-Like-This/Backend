import { Body, Controller, Post } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("users")
export class UsersController {
	constructor(private service: UsersService) {}

	@Post()
	register(@Body() dto: CreateUsersDto) {
		return this.service.register(dto);
	}

	@Post()
	login(@Body() dto: LoginUserDto) {}
}
