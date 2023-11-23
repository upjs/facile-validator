import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const deLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Bitte akzeptieren Sie dieses Feld',
  [rules.ALPHA]: 'Bitte geben Sie nur alphabetische Zeichen ein',
  [rules.ALPHA_NUM]: 'Bitte geben Sie nur alphanumerische Zeichen ein',
  [rules.ALPHA_NUM_DASH]: 'Bitte geben Sie nur alphanumerische Zeichen, Bindestriche und Unterstriche ein',
  [rules.BETWEEN_LENGTH]: 'Der Wert muss zwischen $1 und $2 Zeichen haben',
  [rules.BETWEEN_NUMBER]: 'Bitte geben Sie eine Zahl zwischen $1 und $2 ein',
  [rules.DIGITS]: 'Der Wert muss eine $1-stellige Zahl sein',
  [rules.EMAIL]: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  [rules.ENDS_WITH]: 'Der Wert muss mit "$1" enden',
  [rules.EQUAL_LENGTH]: 'Der Wert muss $1 Zeichen haben',
  [rules.EQUAL_NUMBER]: 'Der Wert muss gleich $1 sein',
  [rules.GREATER_EQUAL]: 'Bitte geben Sie eine Zahl ein, die größer oder gleich $1 ist',
  [rules.INTEGER]: 'Der Wert muss eine gültige Ganzzahl sein',
  [rules.LESS_EQUAL]: 'Bitte geben Sie eine Zahl ein, die kleiner oder gleich $1 ist',
  [rules.MAX_LENGTH]: 'Maximale Länge ist $1',
  [rules.MIN_LENGTH]: 'Die Mindestlänge ist $1',
  [rules.NUM_DASH]: 'Bitte geben Sie Zahlen mit Bindestrichen und Unterstrichen ein',
  [rules.NUMBER]: 'Bitte geben Sie eine gültige Zahl ein',
  [rules.REGEX]: 'Der Wert stimmt nicht mit dem Muster überein',
  [rules.REQUIRED]: 'Dieses Feld ist erforderlich',
  [rules.STARTS_WITH]: 'Der Wert muss mit "$1" beginnen',
  [rules.WITHIN]: 'Der Wert ist falsch',
  [rules.NOTIN]: 'Der Wert ist falsch',
};

export default deLang;
