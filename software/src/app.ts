import fastify from 'fastify';
import { personRoutes } from '@/http/controllers/person/routes';
import { userRoutes } from './http/controllers/user/routes';
import { ResourceNotFoundError } from './use-cases/errors/resourse-not-found-error';
import { ZodError } from 'zod';

export const app = fastify();

app.register(personRoutes);
app.register(userRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({ message: 'Validation error', errors: error });
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: 'Resource not found' });
  }

  if (env.NODE_ENV === 'development') {
    console.error(error);
  }

  return reply.status(500).send({ message: 'Internal server errror' });
});
