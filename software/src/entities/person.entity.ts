export class Person {
  id: number;
  cpf: string;
  name: string;
  birth: Date;
  email: string;
  user_id: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(cpf: string, name: string, birth: Date, email: string) {
    this.cpf = cpf;
    this.name = name;
    this.birth = birth;
    this.email = email;
  }
}
