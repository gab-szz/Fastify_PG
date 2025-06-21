import { create } from './create';
import { FastifyInstance } from 'fastify';

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', create);
}
