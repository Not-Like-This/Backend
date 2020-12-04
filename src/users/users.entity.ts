import { Entity, PrimaryGeneratedColumn, BaseEntity, Column} from "typeorm";
import { CreateUsersDto } from "./dto/create-users.dto";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    //Info compte
    @Column()
    mail: string;

    @Column()
    password: string;

    //Info User
    @Column()
    name: string;

    @Column()
    city: string;


    //TODO: Others

    static fromDto(dto: CreateUsersDto) {
        const e = new Users();

        e.mail = dto.mail;
        e.password = dto.password;
        e.name = dto.name;
        e.city = dto.city;

        return e;
    }

}