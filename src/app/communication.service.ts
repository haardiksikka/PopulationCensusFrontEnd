import { Injectable } from '@angular/core';
import { share, filter, map } from 'rxjs/operators';
import { Observable, Observer, Subscription } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CommunicationService {

  private observable: Observable<any>;

  private observer: Observer<any>;

  constructor() {
    this.observable = Observable.create((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
    this.observable.subscribe();
  }


  postMessage(commandName: string, payload?: any, sender?: any): void {
    this.observer.next({commandName, payload, sender});
  }

  public subscribe(commandName: string, callback: (value: any) => void, excludeSenders: Array<any> = []): Subscription {
    const subscription: Subscription = this.observable.pipe(
      filter((event: {commandName: string, payload?: any, sender?: any}) => {
        return event.commandName === commandName && (!event.sender || excludeSenders.indexOf(event.sender) < 0);
    }), map(command => {
      return {commandName: command.commandName, payload: command.payload};
    })).subscribe(callback);

    return subscription;
  }
}
