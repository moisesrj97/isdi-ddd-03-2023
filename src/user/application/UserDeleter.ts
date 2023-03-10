import UserRepository from '../domain/UserRepository';

export default class UserDeleter {
  constructor(private repository: UserRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
