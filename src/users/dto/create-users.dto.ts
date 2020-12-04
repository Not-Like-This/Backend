import { MinLength, Max, IsEmail, MaxLength } from "class-validator";

export class CreateUsersDto {
	// General infos

	@IsEmail()
	email: string;

	@MinLength(8)
	@MaxLength(150)
	password: string;

	@MinLength(2)
	@MaxLength(256)
	firstName: string;

	@MinLength(2)
	@MaxLength(256)
	lastName: string;

}
