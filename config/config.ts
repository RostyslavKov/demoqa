import dotenv from 'dotenv';

dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL,
    password: process.env.PASSWORD,
    userName: process.env.USERNAME,
}