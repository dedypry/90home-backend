import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationDto } from 'utils/dto/pagination.dto';
import { CreateUserDto } from './dto/create.dto';
import { AuthGuard } from 'middleware/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  list(@Query() query: PaginationDto) {
    return this.usersService.list(query);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    return this.usersService.destroy(id);
  }
}
