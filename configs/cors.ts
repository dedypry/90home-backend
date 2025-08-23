import 'dotenv/config';
const production = process.env.NODE_ENV === 'production';

export const cors = !production
  ? '*'
  : ['https://90home.id', 'https://admin.90home.id'];
