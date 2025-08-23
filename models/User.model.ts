import {
  HasOne,
  ManyToMany,
  Modifier,
  Table,
} from 'middleware/decorators/objections';
import { Model } from '.';
import { RoleModel } from './Role.model';
import { AnyQueryBuilder } from 'objection';
import { ProfileModel } from './Profile.model';
import { PersonalTokenModel } from './PersonalToken.model';

@Table()
export class UserModel extends Model {
  parent_id?: number;
  name?: string;
  email?: string;
  password?: string;
  email_verified_at?: string; // ISO timestamp format
  last_login?: string;
  status?: string;
  bio?: string;

  @Modifier
  list(query: AnyQueryBuilder) {
    query.select('users.id', 'name', 'email', 'status', 'users.created_at');
  }

  @Modifier
  listBlog(query: AnyQueryBuilder) {
    query
      .select('users.id', 'name', 'email', 'bio')
      .withGraphFetched('profile(listProfile)')
      .modifiers({
        listProfile: (query: AnyQueryBuilder) => query.select('photo'),
      });
  }

  @ManyToMany(() => RoleModel, {
    from: 'users.id',
    to: 'roles.id',
    through: {
      from: 'role_user.user_id',
      to: 'role_user.role_id',
    },
  })
  roles: RoleModel[];

  @HasOne(() => ProfileModel, {
    from: 'users.id',
    to: 'profiles.user_id',
  })
  profile!: ProfileModel;

  @HasOne(() => PersonalTokenModel, {
    from: 'users.id',
    to: 'personal_token.user_id',
  })
  personal_token!: PersonalTokenModel;
}
