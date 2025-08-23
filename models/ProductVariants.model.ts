import { Table } from 'middleware/decorators/objections';
import { Model } from '.';

@Table('product_variants')
export class ProductVariantsModel extends Model {
  type: string;
  blok?: string;
  price?: number;
  description?: string;
  product_id?: number;
  images: string[];
  commission_fee: number;
  ppn: number;
  pph: number;
}
