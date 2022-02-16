import { LangObject } from '@/types';
import { en } from '@/locales';

export default class Locale {
  private static locale: LangObject;

  static registerLanguage(locale?: LangObject) {
    this.locale = locale ?? en;
  }

  static getLanguage() {
    return this.locale;
  }
}
