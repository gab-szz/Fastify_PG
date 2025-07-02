import { IPerson } from '@/entities/models/person.interface';
import { IAddress } from '@/use-cases/create-adress';

export interface IAddressRepository {
  findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]>;

  create(address: IAddress): Promise<IAddress | undefined>;
}
