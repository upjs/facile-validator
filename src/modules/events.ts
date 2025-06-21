import { Events, EventsList, EventsName, EventsOption } from '@/types';

export default class EventBus {
  private events: EventsList;

  constructor(events: EventsOption = {}) {
    this.events = {};

    const keys = Object.keys(events) as EventsName[];
    keys.forEach(<K extends EventsName>(key: K) => {
      if (typeof events[key] === 'function') {
        this.events[key] = [];
        (this.events[key] as Events[K][]).push(events[key] as Events[K]);
      }
    });
  }

  public on<K extends EventsName>(event: K, callback: Events[K]): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    const events = this.events[event] as Events[K][];
    events.push(callback);
  }

  public off<K extends EventsName>(event: K, callback: Events[K] | null = null): void {
    if (typeof this.events[event] === 'undefined') {
      return;
    }

    const events = this.events[event] as Events[K][];

    // If callback is null, remove all listeners for the event
    if (callback === null) {
      this.events[event] = [];
      return;
    }

    const index = events.indexOf(callback);

    if (index !== -1) {
      events.splice(index, 1);
    }
  }

  public call<K extends EventsName>(event: K, ...args: Parameters<Events[K]>): void {
    if (typeof this.events[event] !== 'undefined') {
      const events = this.events[event] as ((...args: Parameters<Events[K]>) => void)[];

      events.forEach((callback) => {
        callback(...args);
      });
    }
  }

  public clear(): void {
    this.events = {};
  }
}
