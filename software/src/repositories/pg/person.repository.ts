import { database } from '@/lib/pg/db';
import { IPersonRepository } from '../person.repository.interface';
import { IPerson } from '@/entities/models/person.interface';

export class PersonRepository implements IPersonRepository {
  public async findById(id: number): Promise<IPerson | undefined> {
    const result = await database.clientInstance?.query<Person>(
      `SELECT * FROM person WHERE id = $1`,
      [id],
    );

    return result?.rows[0];
  }

  public async create({ cpf, name, birth, email, user_id }: IPerson): Promise<IPerson | undefined> {
    const result = await database.clientInstance?.query<IPerson>(
      `INSERT INTO person (cpf, name, birth, email, user_id)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [cpf, name, birth, email, user_id],
    );

    return result?.rows[0];
  }
}
