import { EventsOption, ArrayOfValues } from '@/types';
export type EventsName = keyof Events;

type Events = ArrayOfValues<EventsOption>;

export default class EventBus {
  private events: Events;

  constructor(events?: EventsOption) {
    this.events = {};

    if (typeof events !== 'undefined' && Object.keys(events).length) {
      Object.keys(events).forEach(<K extends EventsName>(key: string) => {
        this.events[key as K] = [];
        this.events[key as K].push(events[key as K]);
      });
    }
  }

  public on(event: EventsName, callback: unknown): void {
    if (typeof this.events[event] === 'undefined') {
      this.events[event] = [];
    }

    const events = this.events[event] as unknown[];
    events.push(callback);
  }

  public off(event: EventsName, callback: unknown): void {
    if (typeof this.events[event] === 'undefined') {
      return;
    }

    const events = this.events[event] as unknown[];
    const index = events.indexOf(callback);

    if (index !== -1) {
      events.splice(index, 1);
    }
  }

  public call(event: EventsName, ...args: unknown[]): void {
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
