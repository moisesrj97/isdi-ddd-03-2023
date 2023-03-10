import { Router } from 'express';
import UserCreator from '../../../user/application/UserCreator';
import UserDeleter from '../../../user/application/UserDeleter';
import UserFinder from '../../../user/application/UserFinder';
import UserSearcher from '../../../user/application/UserSeacher';
import UserUpdater from '../../../user/application/UserUpdater';
import ServerRouter from '../ServerRouter';

export default class UserRouter implements ServerRouter {
  path: string = '/users';
  router: Router = Router();

  constructor(
    private userSearcher: UserSearcher,
    private userFinder: UserFinder,
    private userCreator: UserCreator,
    private userUpdater: UserUpdater,
    private userDeleter: UserDeleter
  ) {
    this.registerControllers();
  }

  registerControllers(): void {
    this.router.get('/', async (req, res, next) => {
      const response = await this.userSearcher.execute();

      res.status(200).json(response);
    });

    this.router.get('/:id', async (req, res, next) => {
      const { id } = req.params;
      const response = await this.userFinder.execute(id);

      res.status(200).json(response);
    });

    this.router.post('/', async (req, res, next) => {
      const { body } = req;

      await this.userCreator.execute(body);

      res.sendStatus(201);
    });

    this.router.put('/:id', async (req, res, next) => {
      const { id } = req.params;
      const { body } = req;

      const newUser = {
        id,
        ...body,
      };

      await this.userUpdater.execute(newUser);

      res.sendStatus(200);
    });

    this.router.delete('/:id', async (req, res, next) => {
      const { id } = req.params;

      await this.userDeleter.execute(id);

      res.sendStatus(204);
    });
  }
}
