import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private events: { [eventName: string]: Subject<any> } = {};

  on(eventName: string, callback: (data: any) => void): void {
    if (!this.events[eventName]) {
      this.events[eventName] = new Subject<any>();
    }
    this.events[eventName].subscribe(callback);
  }

  emit(eventName: string, data: any): void {
    if (!this.events[eventName]) {
      this.events[eventName] = new Subject<any>();
    }
    this.events[eventName].next(data);
  }
}