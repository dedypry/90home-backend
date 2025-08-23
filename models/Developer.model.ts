import { ManyToMany, Table } from 'middleware/decorators/objections';
import { Model } from '.';
import { UserModel } from './User.model';

@Table('developers')
export class DeveloperModel extends Model {
  logo?: string;
  company_name?: string;
  company_brand?: string;
  phone?: string;
  email?: string;
  address?: string;
  address_title?: string;

  @ManyToMany(() => UserModel, {
    from: 'developers.id',
    to: 'users.id',
    through: {
      from: 'coordinators.developer_id',
      to: 'coordinators.user_id',
    },
  })
  coordinators: UserModel[];
}
