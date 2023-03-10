import { PrismaClient } from '@prisma/client';
import ExpressServer from './server/infrastructure/ExpressServer';
import UserRouter from './server/infrastructure/Routers/UserRouter';
import UserCreator from './user/application/UserCreator';
import UserDeleter from './user/application/UserDeleter';
import UserFinder from './user/application/UserFinder';
import UserSearcher from './user/application/UserSeacher';
import UserUpdater from './user/application/UserUpdater';
import UserPrismaRepository from './user/infrastructure/UserPrismaRepository';

const bootstrap = async () => {
  const prisma = new PrismaClient();
  const repository = new UserPrismaRepository(prisma);

  const userSearcher = new UserSearcher(repository);
  const userFinder = new UserFinder(repository);
  const userCreator = new UserCreator(repository);
  const userUpdater = new UserUpdater(repository);
  const userDeleter = new UserDeleter(repository);

  const userRouter = new UserRouter(
    userSearcher,
    userFinder,
    userCreator,
    userUpdater,
    userDeleter
  );

  const server = new ExpressServer([userRouter]);

  server.start(3000);
};

bootstrap();
