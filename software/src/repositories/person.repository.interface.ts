import { IPerson } from '@/entities/models/person.interface';

export interface IPersonRepository {
  findById(id: number): Promise<IPerson | undefined>;
  create(person: IPerson): Promise<IPerson | undefined>;
}
