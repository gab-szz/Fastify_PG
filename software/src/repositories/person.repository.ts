import { Person } from '@/entities/person.entity';
import { database } from '@/lib/pg/db';

export class PersonRepository {
  public async findById(id: number): Promise<Person | undefined> {
    const result = await database.clientInstance?.query<Person>(
      `SELECT * FROM person WHERE id = $1`,
      [id],
    );

    return result?.rows[0];
  }

  public async create({ cpf, name, birth, email, user_id }: Person): Promise<Person | undefined> {
    const result = await database.clientInstance?.query<Person>(
      `INSERT INTO person (cpf, name, birth, email, user_id)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [cpf, name, birth, email, user_id],
    );

    return result?.rows[0];
  }
}
