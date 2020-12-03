import { MinLength, Max } from "class-validator";

export class CreateSpotsDto {
    // General infos

    @MinLength(2)
    @MinLength(256)
    city: string;

    @MinLength(2)
    @MinLength(256)
    spotname: string;

    @Max(5)
    rating: number;

}