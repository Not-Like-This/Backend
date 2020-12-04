import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { Users } from "./users.entity";
import { LoginUserDto } from "./dto/login-user.dto";
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
	async register(dto: CreateUsersDto) {
		const report = await Users.fromDto(dto);
		return await report.save();
	}

	async login(dto: LoginUserDto) {
		const user = await Users.findByEmail(dto.email);

		if (!(await bcrypt.compare(dto.password, user.password)))
			throw new UnauthorizedException("Invalid email or password");

		return user;
	}
}
