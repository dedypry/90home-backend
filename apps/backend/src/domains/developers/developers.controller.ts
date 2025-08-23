import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create.dto';
import { AuthGuard } from 'middleware/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Get()
  list() {
    return this.developersService.list();
  }

  @Post()
  create(@Body() body: CreateDeveloperDto) {
    return this.developersService.create(body);
  }
}
