import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindWithPersonUseCase } from '@/use-cases/factory/make-find-with-person';

export async function findUser(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const findPersonUseCase = makeFindWithPersonUseCase();
  const user = await findPersonUseCase.handler(id);
  return reply.status(200).send(user);
}
