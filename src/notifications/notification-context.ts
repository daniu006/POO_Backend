import { NotificationStrategy } from "./strategy.interface";

export class NotificationContexto{
  private strategy: NotificationStrategy;

  setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(message: string) {
    this.strategy.send(message);
  }
}


