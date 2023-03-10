import User from './User';
import UserRepository from './UserRepository';

export default class UserInMemoryRepository implements UserRepository {
  private users: Array<User> = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async update(user: Partial<User>): Promise<void> {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = { ...this.users[index], ...user };
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((u) => u.id !== id);
  }

  async find(id: string): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async search(): Promise<User[]> {
    return this.users;
  }
}
