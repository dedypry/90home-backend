import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  id: number;

  @IsOptional()
  photo?: string;

  @IsOptional()
  profileId?: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsArray()
  roleIds: string;
}
