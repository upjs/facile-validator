import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const nlLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Accepteer dit veld a.u.b.',
  [rules.ALPHA]: 'Voer alleen alfabetische tekens in',
  [rules.ALPHA_NUM]: 'Alleen alfanumerieke tekens a.u.b',
  [rules.ALPHA_NUM_DASH]: 'Voer alleen alfanumerieke tekens, streepjes en underscores in',
  [rules.BETWEEN_LENGTH]: 'De waarde moet tussen $1 en $2 tekens liggen',
  [rules.BETWEEN_NUMBER]: 'Voer een getal tussen $1 en $2 in',
  [rules.DIGITS]: 'De waarde moet een getal van 1 cijfer zijn.',
  [rules.EMAIL]: 'Voer een geldig e-mailadres in',
  [rules.ENDS_WITH]: 'De waarde moet eindigen op "$1"',
  [rules.EQUAL_LENGTH]: 'De waarde moet uit $1 tekens bestaan',
  [rules.EQUAL_NUMBER]: 'De waarde moet gelijk zijn aan $1',
  [rules.GREATER_EQUAL]: 'Voer a.u.b. een getal in groter dan of gelijk aan $1',
  [rules.INTEGER]: 'De waarde moet een geldig geheel getal zijn',
  [rules.LESS_EQUAL]: 'Voer a.u.b. een getal in kleiner dan of gelijk aan $1',
  [rules.MAX_LENGTH]: 'Max. lengte is $1',
  [rules.MIN_LENGTH]: 'Min. lengte is $1',
  [rules.NUM_DASH]: 'Voer getallen met streepjes en underscores in.',
  [rules.NUMBER]: 'Voer een geldig getal in',
  [rules.REGEX]: 'De waarde komt niet overeen met het patroon',
  [rules.REQUIRED]: 'Dit veld is verplicht',
  [rules.STARTS_WITH]: 'De waarde moet beginnen met "$1"',
  [rules.WITHIN]: 'De waarde is onjuist',
};

export default nlLang;
