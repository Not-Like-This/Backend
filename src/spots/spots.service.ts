import { Injectable } from '@nestjs/common';
import { CreateSpotsDto } from './dto/create-spots.dto';
import { Spots } from "./spots.entity";

@Injectable()
export class SpotsService {
    async create(dto: CreateSpotsDto) {
        const report = Spots.fromDto(dto);
        return await report.save();
    }
}
