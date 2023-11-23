import { LangKeys } from '@/types';
import * as rules from '@/types/rules';

const faLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'لطفا این فیلد را تیک بزنید',
  [rules.ALPHA]: 'لطفاً فقط حروف الفبا وارد کنید',
  [rules.ALPHA_NUM]: 'لطفاً فقط اعداد، زیر خط و خط فاصله وارد کنید',
  [rules.ALPHA_NUM_DASH]: 'لطفاً فقط حروف الفبا، اعداد، زیر خط و خط فاصله وارد کنید',
  [rules.BETWEEN_LENGTH]: 'مقدار باید بین $1 و $2 کاراکتر باشد',
  [rules.BETWEEN_NUMBER]: 'لطفا یک عدد بین $1 و $2 وارد کنید',
  [rules.DIGITS]: 'مقدار این فیلد باید $1 رقم باشد',
  [rules.EMAIL]: 'لطفا یک آدرس ایمیل معتبر وارد کنید',
  [rules.ENDS_WITH]: 'مقدار این فیلد باید با "$1" پایان داده شود',
  [rules.EQUAL_LENGTH]: 'مقدار این فیلد باید $1 حرف باشد',
  [rules.EQUAL_NUMBER]: 'مقدار این فیلد باید $1 باشد',
  [rules.GREATER_EQUAL]: 'لطفا یک عدد بزرگتر یا مساوی $1 وارد کنید',
  [rules.INTEGER]: 'مقدار این فیلد باید یک عدد صحیح باشد',
  [rules.LESS_EQUAL]: 'لطفا یک عدد کوچکتر یا مساوی $1 وارد کنید',
  [rules.MAX_LENGTH]: 'حداکثر طول مجاز این فیلد $1 است',
  [rules.MIN_LENGTH]: 'حداقل طول مجاز این فیلد $1 است',
  [rules.REGEX]: 'مقدار وارد شده با الگوی مشخص شده همخوانی ندارد',
  [rules.REQUIRED]: 'این فیلد الزامی است',
  [rules.NUM_DASH]: 'لطفاً فقط اعداد با زیرخط و خط فاصله وارد کنید',
  [rules.NUMBER]: 'لطفا یک عدد معتبر وارد کنید',
  [rules.STARTS_WITH]: 'مقدار این فیلد باید با "$1" شروع شود',
  [rules.WITHIN]: 'مقدار این فیلد نادرست است',
  [rules.NOTIN]: 'مقدار این فیلد نادرست است',
};

export default faLang;
