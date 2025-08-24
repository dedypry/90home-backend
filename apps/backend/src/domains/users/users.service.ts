import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from 'models/User.model';
import { PaginationDto } from 'utils/dto/pagination.dto';
import { CreateUserDto } from './dto/create.dto';
import { hashPassword } from 'utils/helpers/bcrypt';
import { ProfileModel } from 'models/Profile.model';

@Injectable()
export class UsersService {
  async list(query: PaginationDto) {
    let users = UserModel.query()
      .modify('list')
      .withGraphFetched('[profile, roles]')
      .where((builder) => {
        if (query.q) {
          builder
            .whereILike('name', `%${query.q}%`)
            .orWhereILike('email', `%${query.q}%`);
        }
      })
      .orderBy('name', 'ASC');

    if (query.role) {
      console.log('MASUK', query);
      users = users.whereExists(
        UserModel.relatedQuery('roles').where('title', query.role),
      );
    }

    if (query.page >= 0) {
      return await users.page(query.page - 1, query.pageSize || 10);
    }

    return await users;
  }

  async create(body: CreateUserDto) {
    const user: any = await UserModel.query().upsertGraphAndFetch({
      id: body.id,
      name: body.name,
      email: body.email,
      ...(body.password && {
        password: hashPassword(body.password),
      }),
      profile: {
        id: body.profileId,
        phone: body.phone,
        photo: body.photo,
      },
    } as any);

    const users = await UserModel.query().findById(user.id);

    await users?.$relatedQuery('roles').unrelate();
    for (const role of body.roleIds) {
      await users?.$relatedQuery('roles').relate(role);
    }
    return 'Data berhasil ditambahkan';
  }

  async destroy(id: number) {
    const user = await UserModel.query().findById(id);

    if (!user) throw new NotFoundException();

    await ProfileModel.query().where('user_id', user.id).delete();

    await user.$relatedQuery('roles').unrelate();

    await user.$query().delete();

    return 'Data Berhasil di hapus';
  }
}
