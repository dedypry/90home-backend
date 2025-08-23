import { Table } from 'middleware/decorators/objections';
import { Model } from '.';

@Table('setting_apps')
export class SettingAppModel extends Model {
  key: string;
  value: any;
}
