import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const csLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Přijměte toto pole',
  [rules.ALPHA]: 'Zadejte pouze abecední znaky',
  [rules.ALPHA_NUM]: 'Zadejte pouze alfanumerické znaky',
  [rules.ALPHA_NUM_DASH]: 'Zadejte pouze alfanumerické znaky, pomlčky a podtržítka',
  [rules.BETWEEN_LENGTH]: 'Hodnota musí mít $1 až $2 znaků',
  [rules.BETWEEN_NUMBER]: 'Zadejte číslo od $1 do $2',
  [rules.DIGITS]: 'Hodnota musí být číslo s $1 číslicemi',
  [rules.EMAIL]: 'Zadejte platnou emailovou adresu',
  [rules.ENDS_WITH]: 'Hodnota musí končit znaky „$1“',
  [rules.EQUAL_LENGTH]: 'Hodnota musí mít $1 znaků',
  [rules.EQUAL_NUMBER]: 'Hodnota musí být rovna $1',
  [rules.GREATER_EQUAL]: 'Zadejte číslo větší nebo rovné $1',
  [rules.INTEGER]: 'Hodnota musí být platné celé číslo',
  [rules.LESS_EQUAL]: 'Zadejte číslo menší nebo rovné $1',
  [rules.MAX_LENGTH]: 'Maximální délka je $1',
  [rules.MIN_LENGTH]: 'Minimální délka je $1',
  [rules.NUM_DASH]: 'Zadejte čísla s pomlčkami a podtržítky',
  [rules.NUMBER]: 'Zadejte platné číslo',
  [rules.REGEX]: 'Hodnota neodpovídá vzoru',
  [rules.REQUIRED]: 'Toto pole je povinné',
  [rules.STARTS_WITH]: 'Hodnota musí začínat znaky „$1“',
  [rules.WITHIN]: 'Hodnota je nesprávná',
};

export default csLang;
