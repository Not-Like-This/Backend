import { NotFoundException } from "@nestjs/common";
import {
	Entity,
	PrimaryGeneratedColumn,
	BaseEntity,
	Column,
	Unique,
} from "typeorm";
import { CreateUsersDto } from "./dto/create-users.dto";
import * as bcrypt from "bcrypt";

const ROUNDS = 12;

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	//Info compte
	@Column()
	email: string;

	@Column()
	password: string;

	//Info User
	@Column()
	name: string;

	@Column()
	city: string;

	//TODO: Others

	static async fromDto(dto: CreateUsersDto) {
		const e = new Users();

		e.email = dto.email;
		e.password = await bcrypt.hash(dto.password, ROUNDS);
		e.name = dto.name;
		e.city = dto.city;

		return e;
	}

	static async findByEmail(email: string) {
		const user = await Users.findOne({ email });
		if (!user) throw new NotFoundException("Email not found");

		return user;
	}
}
