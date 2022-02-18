class Language {
  private lang?: Record<string, string>;

  public set(lang?: Record<string, string>) {
    this.lang = lang;
  }

  public get() {
    return this.lang ?? {};
  }
}

export default new Language();
