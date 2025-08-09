import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const enLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'يرجى قبول هذا الحقل',
  [rules.ALPHA]: 'يرجى إدخال الأحرف الأبجدية فقط',
  [rules.ALPHA_NUM]: 'يرجى إدخال الأحرف الأبجدية والأرقام فقط',
  [rules.ALPHA_NUM_DASH]: 'يرجى إدخال الأحرف الأبجدية والأرقام، الواصلات، والشرطات السفلية فقط',
  [rules.BETWEEN_LENGTH]: 'يجب أن يكون القيمة بين $1 و $2 حرفًا',
  [rules.BETWEEN_NUMBER]: 'يرجى إدخال رقم بين $1 و $2',
  [rules.DIGITS]: 'يجب أن يكون القيمة عددًا مكونًا من $1 رقم',
  [rules.EMAIL]: 'يرجى إدخال عنوان بريد إلكتروني صالح',
  [rules.ENDS_WITH]: 'يجب أن تنتهي القيمة ب "$1"',
  [rules.EQUAL_LENGTH]: 'يجب أن يكون القيمة $1 حرفًا',
  [rules.EQUAL_NUMBER]: 'يجب أن يكون القيمة مساوية لـ $1',
  [rules.GREATER_EQUAL]: 'يرجى إدخال رقم أكبر من أو يساوي $1',
  [rules.INTEGER]: 'يجب أن يكون القيمة عدد صحيح صالح',
  [rules.LESS_EQUAL]: 'يرجى إدخال رقم أقل من أو يساوي $1',
  [rules.MAX_LENGTH]: 'الحد الأقصى للطول هو $1',
  [rules.MIN_LENGTH]: 'الحد الأدنى للطول هو $1',
  [rules.NUM_DASH]: 'يرجى إدخال أرقام بالواصلات والشرطات السفلية',
  [rules.NUMBER]: 'يرجى إدخال رقم صالح',
  [rules.REGEX]: 'القيمة لا تتوافق مع النمط',
  [rules.REQUIRED]: 'هذا الحقل مطلوب',
  [rules.STARTS_WITH]: 'يجب أن تبدأ القيمة بـ "$1"',
  [rules.WITHIN]: 'القيمة غير صحيحة',
};

export default enLang;
