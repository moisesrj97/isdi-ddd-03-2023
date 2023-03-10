import User from './User';

export default interface UserRepository {
  create: (user: User) => Promise<void>;
  update: (user: Partial<User>) => Promise<void>;
  delete: (id: string) => Promise<void>;
  find: (id: string) => Promise<User | null>;
  search: () => Promise<User[]>;
}
