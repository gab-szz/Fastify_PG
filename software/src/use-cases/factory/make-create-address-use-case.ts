import { AddressRepository } from '@/repositories/pg/address.repository';
import { CreateAddressUseCase } from '../create-adress';

export function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository();

  const createAddressUseCase = CreateAddressUseCase(addressRepository);

  return createAddressUseCase;
}
