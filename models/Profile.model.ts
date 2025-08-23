import { BelongsToOne, Table } from 'middleware/decorators/objections';
import { Model } from '.';
import { ProvinceModel } from './Province.model';
import { CityModel } from './Citie.model';
import { DistrictModel } from './District.model';

@Table('profiles')
export class ProfileModel extends Model {
  user_id?: number;
  nik?: string;
  place_birth?: string;
  date_birth?: string;
  gender?: string;
  citizenship?: string;
  address?: string;
  province_id?: number;
  city_id?: number;
  district_id?: number;
  phone?: string;
  photo?: string;

  @BelongsToOne(() => ProvinceModel, {
    from: 'profiles.province_id',
    to: 'provinces.id',
  })
  province: ProvinceModel;

  @BelongsToOne(() => CityModel, {
    from: 'profiles.city_id',
    to: 'cities.id',
  })
  city: CityModel;

  @BelongsToOne(() => DistrictModel, {
    from: 'profiles.district_id',
    to: 'districts.id',
  })
  district: DistrictModel;
}
