import { AddressRepository } from '@/repositories/pg/address.repository';
import { FindAddressByPersonUseCase } from '../find-address-by-person';

export function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository();

  const findAddressByPErsonUseCase = FindAddressByPersonUseCase(addressRepository);

  return findAddressByPErsonUseCase;
}
