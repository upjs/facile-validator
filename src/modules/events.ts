import { Event, EventList, EventName } from '@/types';

export default class EventBus {
  private events: EventList;

  constructor(events?: Event) {
    this.events = {};

    if (typeof events !== 'undefined' && Object.keys(events).length) {
      Object.keys(events).forEach(<K extends EventName>(key: string) => {
        this.events[key as K] = [];
        this.events[key as K].push(events[key as K]);
      });
    }
  }

  public on(event: EventName, callback: unknown): void {
    if (typeof this.events[event] === 'undefined') {
      this.events[event] = [];
    }

    const events = this.events[event] as unknown[];
    events.push(callback);
  }

  public off(event: EventName, callback: unknown): void {
    if (typeof this.events[event] === 'undefined') {
      return;
    }

    const events = this.events[event] as unknown[];
    const index = events.indexOf(callback);

    if (index !== -1) {
      events.splice(index, 1);
    }
  }

  public call(event: EventName, ...args: unknown[]): void {
    if (typeof this.events[event] !== 'undefined') {
      const events = this.events[event] as unknown[];
      events.forEach((callback: unknown) => {
        (callback as (...args: unknown[]) => void)(...args);
      });
    }
  }

  public clear(): void {
    this.events = {};
  }
}
