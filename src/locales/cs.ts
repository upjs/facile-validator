import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const csLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Pøijmìte toto pole',
  [rules.ALPHA]: 'Zadejte pouze abecední znaky',
  [rules.ALPHA_NUM]: 'Zadejte pouze alfanumerické znaky',
  [rules.ALPHA_NUM_DASH]: 'Zadejte pouze alfanumerické znaky, pomlèky a podtržítka',
  [rules.BETWEEN_LENGTH]: 'Hodnota musí mít $1 až $2 znakù',
  [rules.BETWEEN_NUMBER]: 'Zadejte èíslo od $1 do $2',
  [rules.DIGITS]: 'Hodnota musí být èíslo s $1 èíslicemi',
  [rules.EMAIL]: 'Zadejte platnou emailovou adresu',
  [rules.ENDS_WITH]: 'Hodnota musí konèit znaky „$1“',
  [rules.EQUAL_LENGTH]: 'Hodnota musí mít $1 znakù',
  [rules.EQUAL_NUMBER]: 'Hodnota musí být rovna $1',
  [rules.GREATER_EQUAL]: 'Zadejte èíslo vìtší nebo rovné $1',
  [rules.INTEGER]: 'Hodnota musí být platné celé èíslo',
  [rules.LESS_EQUAL]: 'Zadejte èíslo menší nebo rovné $1',
  [rules.MAX_LENGTH]: 'Maximální délka je $1',
  [rules.MIN_LENGTH]: 'Minimální délka je $1',
  [rules.NUM_DASH]: 'Zadejte èísla s pomlèkami a podtržítky',
  [rules.NUMBER]: 'Zadejte platné èíslo',
  [rules.REGEX]: "Hodnota neodpovídá vzoru",
  [rules.REQUIRED]: 'Toto pole je povinné',
  [rules.STARTS_WITH]: 'Hodnota musí zaèínat znaky „$1“',
  [rules.WITHIN]: 'Hodnota je nesprávná',
};

export default csLang;