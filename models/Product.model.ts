import { HasMany, Table } from 'middleware/decorators/objections';
import { Model } from '.';
import { ProductVariantsModel } from './ProductVariants.model';

@Table('products')
export class ProductModel extends Model {
  images: string[]; // _text (text[])
  price: number; // numeric(18,2)

  cluster: string; // NOT NULL
  type?: string | null;
  blok?: string | null;
  description?: string | null;

  updated_by?: number | null; // FK -> users
  attachments: string[]; // _text (text[])
  listing_type?: string | null; // default 'JUAL'
  developer_id?: number | null; // FK -> developers

  commission_fee: number; // numeric(8,2)
  ppn: number;
  pph: number;

  type_ads?: string | null;
  bedroom: number; // default 0
  bathroom: number; // default 0
  number_of_floors: number; // default 0
  surface_area: number; // numeric(8,2)
  building_area: number; // numeric(8,2)

  certificate?: string | null;
  furniture?: string | null;
  listing_title?: string | null;

  public_facilities?: string | null;
  type_property?: string | null;

  pic_id?: number | null;

  @HasMany(() => ProductVariantsModel, {
    from: 'products.id',
    to: 'product_variants.product_id',
  })
  variants: ProductVariantsModel[];
}
