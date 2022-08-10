import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const frLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Veuillez accepter ce champ',
  [rules.ALPHA]: 'Veuillez saisir uniquement des caractères alphabétiques',
  [rules.ALPHA_NUM]: 'Veuillez saisir uniquement des caractères alphanumériques',
  [rules.ALPHA_NUM_DASH]:
    'Veuillez saisir uniquement des caractères alphanumériques, des tirets et des caractères de soulignement',
  [rules.BETWEEN_LENGTH]: 'La valeur doit comporter entre $1 et $2 caractères',
  [rules.BETWEEN_NUMBER]: 'Veuillez saisir un nombre entre $1 et $2 caractères',
  [rules.DIGITS]: 'La valeur doit être un nombre à $1 chiffre',
  [rules.EMAIL]: 'Veuillez saisir une adresse électronique valide',
  [rules.ENDS_WITH]: 'La valeur doit se terminer par "$1"',
  [rules.EQUAL_LENGTH]: 'La valeur doit avoir des caractères de $1',
  [rules.EQUAL_NUMBER]: 'La valeur doit être égale à $1',
  [rules.GREATER_EQUAL]: 'Veuillez saisir un nombre supérieur ou égal à $1',
  [rules.INTEGER]: 'La valeur doit être un nombre entier valide',
  [rules.LESS_EQUAL]: 'Veuillez entrer un nombre inférieur ou égal à $1',
  [rules.MAX_LENGTH]: 'La longueur maximale est de $1',
  [rules.MIN_LENGTH]: 'La longueur minimale est de $1',
  [rules.NUM_DASH]: 'Veuillez saisir les chiffres avec des tirets et des caractères de soulignement',
  [rules.NUMBER]: 'Veuillez entrer un nombre valide',
  [rules.REGEX]: 'La valeur ne correspond pas au modèle',
  [rules.REQUIRED]: 'Ce champ est obligatoire',
  [rules.STARTS_WITH]: 'La valeur doit commencer par "$1"',
  [rules.WITHIN]: 'La valeur est incorrecte',
};

export default frLang;
