/**
 * In this file we can put our environment variables.
 * We can define them in a.env file or in the environment variables of our system.
 * import { config } from 'dotenv';
 * config({ path: '.env.development' });
 */

export const server = {
  host: process.env.SERVER_HOST || 'localhost',
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
}