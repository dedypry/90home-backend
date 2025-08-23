import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  nik: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  place_birth: string;

  @IsString()
  date_birth: string; // Bisa diganti Date kalau mau parsing ke objek Date

  @IsString()
  gender: 'male' | 'female';

  @IsString()
  address: string;

  @IsNotEmpty()
  province_id: number;

  @IsNotEmpty()
  city_id: number;

  @IsNotEmpty()
  district_id: number;

  @IsString()
  phone: string;
}

export class UpdatePhotoProfileDto {
  @IsString()
  photo: string;
}

export class UpdatePasswordeDto {
  @IsString()
  password: string;

  @IsString()
  new_password: string;

  @IsString()
  confirm_password: string;
}
export class UpdateBioDto {
  @IsString()
  bio: string;
}
