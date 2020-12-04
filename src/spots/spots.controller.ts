import { Body, Controller, Post } from "@nestjs/common";
import { CreateSpotsDto } from "./dto/create-spots.dto";
import { SpotsService } from "./spots.service";

@Controller("spots")
export class SpotsController {
	constructor(private service: SpotsService) {}

	@Post()
	create(@Body() dto: CreateSpotsDto) {
		return this.service.create(dto);
	}
}
