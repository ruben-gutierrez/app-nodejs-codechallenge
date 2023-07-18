import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, Max } from 'class-validator';

export class CreateTransferDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    accountExternalIdDebit: string;
  
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    accountExternalIdCredit: string;

    @IsNumber()
    @Min(1)
    @Max(10)
    tranferTypeId: number;

    @IsNumber()
    @Min(1)
    @Max(10)
    statusId: number;

    @IsNumber()
    @Min(1)
    @Max(1000)
    value: number;
  
}
