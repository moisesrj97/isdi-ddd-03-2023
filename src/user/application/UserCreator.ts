import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export default class UserCreator {
  constructor(private repository: UserRepository) {}

  async execute(user: User): Promise<void> {
    await this.repository.create(user);
  }
}
