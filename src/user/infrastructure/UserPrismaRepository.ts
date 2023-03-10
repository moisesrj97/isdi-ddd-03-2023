import { PrismaClient } from '@prisma/client';
import User from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export default class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(user: User): Promise<void> {
    await this.prisma.userP.create({
      data: user,
    });
  }

  async update(user: Partial<User>): Promise<void> {
    await this.prisma.userP.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.userP.delete({
      where: {
        id,
      },
    });
  }

  async find(id: string): Promise<User | null> {
    const response = await this.prisma.userP.findUnique({
      where: {
        id,
      },
    });

    return response as User;
  }

  async search(): Promise<User[]> {
    const response = await this.prisma.userP.findMany();

    return response as User[];
  }
}
