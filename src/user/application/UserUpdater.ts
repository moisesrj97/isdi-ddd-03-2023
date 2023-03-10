import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export default class UserUpdater {
  constructor(private repository: UserRepository) {}

  async execute(user: Partial<User>): Promise<void> {
    await this.repository.update(user);
  }
}
