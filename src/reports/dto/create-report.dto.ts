import { IsBoolean, MaxLength, Min, MinLength } from "class-validator";

export class CreateReportDto {
	// General infos

	@MinLength(2)
	@MaxLength(256)
	city: string;

	@MinLength(2)
	@MaxLength(256)
	spotName: string;

	startDate: Date;
	endDate: Date;

	// Activities quantity
	@Min(0)
	bathersAmount: number;

	@Min(0)
	practicingSportsAmount: number;

	@Min(0)
	boatAmount: number;

	// Water quality

	@IsBoolean()
	solarCream: boolean;

	@IsBoolean()
	perfume: boolean;

	@IsBoolean()
	hydratingCream: boolean;

	@IsBoolean()
	makeup: boolean;

	@IsBoolean()
	gasoline: boolean;

	@IsBoolean()
	cigarettes: boolean;

	@IsBoolean()
	fertilizer: boolean;

	@IsBoolean()
	paint: boolean;
}
