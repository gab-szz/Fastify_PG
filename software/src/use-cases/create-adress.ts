import { IAddressRepository } from '@/repositories/address.repository.interface';

export interface IAddress {
  id?: number;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  person_id: number;
}

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async errorHandlerMap(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address);
  }
}
