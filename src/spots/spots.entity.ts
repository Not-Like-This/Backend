import { Entity, PrimaryGeneratedColumn, BaseEntity, Column} from "typeorm";
import { CreateSpotsDto } from "./dto/create-spots.dto";

@Entity()
export class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // General infos

    @Column()
    city: string;

    @Column()
    spotName: string;

    // Rating

    @Column()
    rating: number;

    //TODO: Others

    static fromDto(dto: CreateSpotsDto) {
        const e = new Report();

        e.city = dto.city;
        e.spotName = dto.spotname;

        return e;
    }

}