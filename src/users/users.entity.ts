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
@Unique(["email"])
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
	firstName: string;

	@Column()
	lastName: string;

	//TODO: Others

	static async fromDto(dto: CreateUsersDto) {
		const e = new Users();

		e.email = dto.email;
		e.password = await bcrypt.hash(dto.password, ROUNDS);
		e.firstName = dto.firstName;
		e.lastName = dto.lastName;

		return e;
	}

	static async findByEmail(email: string) {
		const user = await Users.findOne({ email });
		if (!user) throw new NotFoundException("Email not found");

		return user;
	}
}
