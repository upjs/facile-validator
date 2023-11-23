import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const itLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Si prega di accettare questo campo',
  [rules.ALPHA]: 'Inserire solo caratteri alfabetici',
  [rules.ALPHA_NUM]: 'Inserire solo caratteri alfanumerici',
  [rules.ALPHA_NUM_DASH]: 'Inserire solo caratteri alfanumerici, trattini e trattini bassi',
  [rules.BETWEEN_LENGTH]: 'Il valore deve essere compreso tra $1 e $2 caratteri',
  [rules.BETWEEN_NUMBER]: 'Inserire un numero compreso tra $1 e $2',
  [rules.DIGITS]: 'Il valore deve essere un numero di $1 cifra',
  [rules.EMAIL]: 'Inserire un indirizzo e-mail valido',
  [rules.ENDS_WITH]: 'Il valore deve terminare con "$1"',
  [rules.EQUAL_LENGTH]: 'Il valore deve avere caratteri da $1',
  [rules.EQUAL_NUMBER]: 'Il valore deve essere uguale a $1',
  [rules.GREATER_EQUAL]: 'Inserisci un numero maggiore o uguale a $1',
  [rules.INTEGER]: 'Il valore deve essere un numero intero valido',
  [rules.LESS_EQUAL]: 'Inserire un numero minore o uguale a $1',
  [rules.MAX_LENGTH]: 'La lunghezza massima è $1',
  [rules.MIN_LENGTH]: 'La lunghezza minima è $1',
  [rules.NUM_DASH]: 'Inserisci numeri con trattini e trattini bassi',
  [rules.NUMBER]: 'Inserire un numero valido',
  [rules.REGEX]: 'Il valore non corrisponde al modello',
  [rules.REQUIRED]: 'Questo campo è obbligatorio',
  [rules.STARTS_WITH]: 'Il valore deve iniziare con "$1"',
  [rules.WITHIN]: 'Il valore non è corretto',
  [rules.NOTIN]: 'Il valore non è corretto',
};

export default itLang;
