import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export default class UserFinder {
  constructor(private repository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    return await this.repository.find(id);
  }
}
