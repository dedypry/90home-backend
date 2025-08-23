import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.dto';
import { AuthGuard } from 'middleware/guard/auth.guard';
import { PaginationDto } from 'utils/dto/pagination.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  list(@Query() query: PaginationDto) {
    query.page = query.page ? query.page - 1 : 0;
    return this.productsService.list(query);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }
}
