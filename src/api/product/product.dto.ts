import { Type } from "class-transformer";
import { Min, IsString, IsOptional, IsNumber  } from "class-validator";
import { IsGreaterThan } from "../../utils/greater-than.decorator";

export class QueryProductDTO{
    
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    minPrice: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @IsGreaterThan('minPrice', { 
        message: 'MaxPrice must be greater than MinPrice',
    })
    @Type(() => Number)
    maxPrice: number;
}