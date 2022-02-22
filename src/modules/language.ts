import { Lang } from '@/types';

class Language {
  private lang?: Lang;

  public set(lang?: Lang) {
    this.lang = lang;
  }

  public get() {
    return typeof this.lang === 'object' ? this.lang : {};
  }
}

export default new Language();
