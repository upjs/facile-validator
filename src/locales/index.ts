import { Lang } from '@/types';

export { default as en } from './en';
export { default as fa } from './fa';
export { default as fr } from './fr';
export { default as de } from './de';
export { default as it } from './it';
export { default as zh } from './zh';

export const createLang = (lang: Lang): Lang => lang;
