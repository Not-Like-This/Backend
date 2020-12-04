import { Injectable } from '@nestjs/common';
import { Report } from 'src/reports/report.entity';
import { CreateSpotsDto } from './dto/create-spots.dto';
import { Spots } from "./spots.entity";

@Injectable()
export class SpotsService {
    async create(dto: CreateSpotsDto) {
        const report = Spots.fromDto(dto);
        return await report.save();
    }
    async list(){
        return await Report.find();
    }
}
