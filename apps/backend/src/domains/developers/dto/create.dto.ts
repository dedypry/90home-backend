import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateDeveloperDto {
  id?: number;

  @IsString()
  logo?: string;

  @IsString()
  company_name?: string;

  @IsString()
  company_brand?: string;

  @IsString()
  phone?: string;

  @IsArray()
  coordinator_ids: string[];

  @IsString()
  @IsEmail()
  email?: string;

  address?: string;
  address_title?: string;
}
