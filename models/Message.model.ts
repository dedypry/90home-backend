import { Table } from 'middleware/decorators/objections';
import { Model } from '.';

@Table('messages')
export class MessageModel extends Model {
  name: string;
  email: string;
  subject: string;
  content: string;
}
