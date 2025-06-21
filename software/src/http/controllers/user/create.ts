import { UserRepository } from '@/repositories/user.repository';
import { CreateUserUseCase } from '@/use-cases/create-user';
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const { username, password } = registerBodySchema.parse(request.body);

  try {
    const userReposity = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userReposity);

    const user = await createUserUseCase.handler({ username, password });

    return reply.status(201).send(user);
  } catch (error) {
    console.error(`Error creating user: ${error}`);

    throw new Error(`Error creating user: ${error}`);
  }
}
