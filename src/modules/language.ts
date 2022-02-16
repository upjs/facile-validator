import { LangObject } from '@/types';

export default class Language {
  private static lang?: LangObject;

  static set(lang: LangObject) {
    this.lang = lang;
  }

  static get() {
    return this.lang ?? {};
  }
}
