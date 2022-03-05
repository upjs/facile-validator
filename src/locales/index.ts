import { Lang } from '@/types';

export { default as en } from './en';
export { default as fa } from './fa';

export const createLang = (lang: Lang): Lang => lang;
