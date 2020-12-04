import { Body, Controller, Post } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto"
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private service: UsersService) {}

    @Post()
    create(@Body() dto: CreateUsersDto) {
        return this.service.create(dto);
    }
}