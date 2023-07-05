import { IsInt, Min, Max, IsMongoId } from "class-validator";

export class AddCartItemDTO {
    @IsMongoId()
    id: string;

    @IsInt()
    @Min(1)
    @Max(10)
    quantity: number;
}

export class updateQuantityDTO{
    @IsInt()
    @Min(1)
    @Max(10)
    quantity: number;
}
