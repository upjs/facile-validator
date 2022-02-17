import { LangObject } from '@/types';

class Language {
  private lang?: LangObject;

  public set(lang?: LangObject) {
    this.lang = lang;
  }

  public get() {
    return this.lang ?? {};
  }
}

export default new Language();
