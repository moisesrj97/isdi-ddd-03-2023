import express, { Express } from 'express';
import ServerRouter from './ServerRouter';

export default class ExpressServer {
  app: Express;

  constructor(private routers: ServerRouter[]) {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.use(express.json());
  }

  routes(): void {
    // Health check

    this.routers.forEach((router) => {
      this.app.use(router.path, router.router);
    });

    // Error managemente
  }

  start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
