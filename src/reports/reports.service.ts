import { Injectable } from "@nestjs/common";
import { report } from "process";
import { CreateReportDto } from "./dto/create-report.dto";
import { Report } from "./report.entity";

@Injectable()
export class ReportsService {
	async create(dto: CreateReportDto) {
		const report = Report.fromDto(dto);
		return await report.save();
	}

	async list(){
		return await Report.find();
	}
}
