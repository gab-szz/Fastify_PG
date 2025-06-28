import { Person } from '@/entities/person.entity';

export interface IPersonRepository {
  findById(id: number): Promise<Person | undefined>;
  create(person: Person): Promise<Person | undefined>;
}
