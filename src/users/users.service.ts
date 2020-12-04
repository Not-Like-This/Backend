import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
	async create(dto: CreateUsersDto) {
		const report = Users.fromDto(dto);
		return await report.save();
	}
}
