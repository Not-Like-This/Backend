import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateReportDto } from "./dto/create-report.dto";
import { ReportsService } from "./reports.service";

@Controller("reports")
export class ReportsController {
	constructor(private service: ReportsService) {}

	@Post()
	create(@Body() dto: CreateReportDto) {
		return this.service.create(dto);
	}

	@Get()
	async list(){
		return this.service.list();
	}
}
