import { MinLength, Max, IsEmail, MaxLength } from "class-validator";

export class CreateUsersDto {
    // General infos
    
    @IsEmail()
    mail: string;

    @MinLength(8)
    @MaxLength(150)
    password: string;

    @MinLength(2)
    @MaxLength(256)
    name: string;

    @MinLength(2)
    @MinLength(256)
    city: string;
}