import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export default class UserSearcher {
  constructor(private repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.search();
  }
}
