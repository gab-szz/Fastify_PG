import { Person } from '@/entities/person.entity';
import { User } from '@/entities/user.entity';
import { UserRepository } from '@/repositories/pg/user.repository';
import { ResourceNotFoundError } from './errors/resourse-not-found-error';

export class FindWithPersonUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(userId: number): Promise<User & Person> | undefined {
    const user = await this.userRepository.findWithPerson(userId);

    if (!user) throw new ResourceNotFoundError();
    return user;
  }
}
