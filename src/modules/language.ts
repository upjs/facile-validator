import { LangObject } from '@/types';

export default class Language {
  private static lang?: LangObject = undefined;

  static set(lang: LangObject) {
    this.lang = lang;
  }

  static get(): LangObject {
    return this.lang ?? {};
  }
}
