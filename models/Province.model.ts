import { Table } from 'middleware/decorators/objections';
import { Model } from '.';

@Table('provinces')
export class ProvinceModel extends Model {
  name!: string;
  code?: number;
}
