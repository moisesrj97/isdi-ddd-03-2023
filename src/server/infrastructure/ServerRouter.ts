import { Router } from 'express';

export default interface ServerRouter {
  router: Router;
  path: string;
  registerControllers(): void;
}
