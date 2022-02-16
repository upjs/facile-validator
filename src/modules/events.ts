import { ErrorDetail } from '@/types';
export type EventsName = keyof Events;

interface Events {
  'validate:start'?: (() => void)[];
  'validate:end'?: (() => void)[];
  'error:field'?: ((element: HTMLElement, errors: ErrorDetail[]) => void)[];
}

export default class EventBus {
  private events: Events;

  constructor() {
    this.events = {};
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
