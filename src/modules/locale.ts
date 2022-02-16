import { LangObject } from '@/types';
import { en } from '@/locales';

export default class Language {
  private static lang: LangObject;

  static set(lang?: LangObject) {
    this.lang = lang ?? en;
  }

  static get() {
    return this.lang;
  }
}
