import { Table } from 'middleware/decorators/objections';
import { Model } from '.';

@Table('orders')
export class OrderModel extends Model {}
