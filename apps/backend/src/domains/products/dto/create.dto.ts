import { IsArray, IsString } from 'class-validator';

export class IProductVariant {
  type: string;
  commission_fee: number;
  price: number;
}

export class CreateProductDto {
  @IsArray()
  images: string[];

  @IsString()
  listing_title: string;

  developer_id: number | string;

  @IsString()
  cluster: string;

  @IsString()
  description: string;
  variants: IProductVariant[];
}
