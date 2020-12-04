import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "../users.service";
import { Inject, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "../dto/login-user.dto";

export class UsersStrategy extends PassportStrategy(Strategy) {
	constructor(@Inject() private users: UsersService) {
		super({ usernameField: "email" });
	}

	async validate(email: string, password: string): Promise<any> {
		const dto = new LoginUserDto();
		dto.email = email;
		dto.password = password;

		const user = await this.users.login(dto);
		if (!user) throw new UnauthorizedException();
		return user;
	}
}
