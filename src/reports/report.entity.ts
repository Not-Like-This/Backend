import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";
import { CreateReportDto } from "./dto/create-report.dto";

@Entity()
export class Report extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	// General infos

	@Column()
	city: string;

	@Column()
	spotName: string;

	@Column()
	startDate: Date;

	@Column()
	endDate: Date;

	// Activities quantity

	@Column()
	bathersAmount: number;

	@Column()
	practicingSportsAmount: number;

	@Column()
	boatAmount: number;

	// Water quality

	@Column()
	solarCream: boolean;

	@Column()
	perfume: boolean;

	@Column()
	hydratingCream: boolean;

	@Column()
	makeup: boolean;

	@Column()
	gasoline: boolean;

	@Column()
	cigarettes: boolean;

	@Column()
	fertilizer: boolean;

	@Column()
	paint: boolean;

	// TODO: Others

	static fromDto(dto: CreateReportDto) {
		const e = new Report();

		e.city = dto.city;
		e.spotName = dto.spotName;
		e.startDate = dto.startDate;
		e.endDate = dto.endDate;
		e.bathersAmount = dto.bathersAmount;
		e.practicingSportsAmount = dto.practicingSportsAmount;
		e.boatAmount = dto.boatAmount;
		e.solarCream = dto.solarCream;
		e.perfume = dto.perfume;
		e.hydratingCream = dto.hydratingCream;
		e.makeup = dto.makeup;
		e.gasoline = dto.gasoline;
		e.cigarettes = dto.cigarettes;
		e.fertilizer = dto.fertilizer;
		e.paint = e.paint;

		return e;
	}
}
