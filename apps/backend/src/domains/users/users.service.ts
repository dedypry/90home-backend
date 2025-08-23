import { Injectable } from '@nestjs/common';
import { UserModel } from 'models/User.model';

@Injectable()
export class UsersService {
  async list() {
    return await UserModel.query().modify('list').orderBy('name', 'ASC');
  }
}
