import 'dotenv/config';
const production = process.env.NODE_ENV === 'production';

export const cors = !production
  ? '*'
  : ['https://90home.id/login', 'https://admin.90home.id'];
