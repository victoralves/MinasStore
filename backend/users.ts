

export class User {
  constructor(
    public email: string,
    public name: string,
    public password: string
  ){}

  matches(another: User): boolean {
    return another !== undefined &&
    another.email === this.email &&
    another.password === this.password
  }
}

export const users: {[Key: string]: User} = {
  "teste@gmail.com": new User('teste@gmail.com', 'Teste', 'teste123'),
  "teste2@gmail.com": new User('teste2@gmail.com', 'Teste2', 'teste1232')
}
