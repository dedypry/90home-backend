import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create.dto';
import { ProductModel } from 'models/Product.model';
import { ProductVariantsModel } from 'models/ProductVariants.model';
import { PaginationDto } from 'utils/dto/pagination.dto';

@Injectable()
export class ProductsService {
  async list(query: PaginationDto) {
    const product = await ProductModel.query()
      .orderBy('created_at', 'desc')
      .withGraphFetched('variants')
      .page(query.page, query.pageSize);

    return product;
  }
  async create(body: CreateProductDto) {
    const product = await ProductModel.query().insert({
      images: body.images,
      cluster: body.cluster,
      description: body.description,
      listing_title: body.listing_title,
      developer_id: body.developer_id,
    } as any);

    await ProductVariantsModel.query().insertGraph(
      body.variants.map((item) => ({
        type: item.type,
        price: item.price,
        commission_fee: item.commission_fee,
        product_id: product.id,
      })),
    );

    return 'Product Berhasil di tambahkan';
  }
}
