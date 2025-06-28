import { FastifyReply, FastifyRequest } from 'fastify';
import { ResourceNotFoundError } from './use-cases/errors/resourse-not-found-error';
import { ZodError } from 'zod';
import { env } from '@/env';

interface errorHandlerMap {
  [key: string]: (
    error: Error | ZodError | ResourceNotFoundError,
    request: FastifyRequest,
    reply: FastifyReply,
  ) => void;
}

export const errorHandlerMap: errorHandlerMap = {
  ZodError: (error, _, reply) => {
    return reply.status(400).send({ message: 'Validation error', errors: error });
  },
  ResourceNotFoundError: (error, _, reply) => {
    return reply.status(404).send({ message: 'Resource not found' });
  },
};

export const globalErrorHandler = (error: Error, _: FastifyRequest, reply: FastifyReply) => {
  if (env.NODE_ENV === 'development') {
    console.error(error);
  }

  const handler = errorHandlerMap[error.constructor.name];

  if (handler) return handler(error, _, reply);

  return reply.status(500).send({ message: 'Internal server errror' });
};
