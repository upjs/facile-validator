import { LangKeys } from '@/types';

export { default as en } from './en';
export { default as fa } from './fa';

type Lang = Partial<Record<LangKeys, string>>;
export const createLang = (lang: Lang): Lang => lang;
