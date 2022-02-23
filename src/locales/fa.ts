import { LangKeys } from '@/types';
import * as causes from '@/types/error-cause';

const faLang: Record<LangKeys, string> = {
  [causes.ACCEPTED]: 'لطفا این فیلد را تیک بزنید',
  [causes.ALPHA]: 'لطفاً فقط حروف الفبا وارد کنید',
  [causes.BETWEEN]: 'لطفا یک عدد بین $1 و $2 وارد کنید',
  [causes.BETWEEN_LENGTH]: 'مقدار باید بین $1 و $2 کاراکتر باشد',
  [causes.DIGITS]: 'مقدار این فیلد باید $1 رقم باشد',
  [causes.EMAIL]: 'لطفا یک آدرس ایمیل معتبر وارد کنید',
  [causes.ENDS_WITH]: 'مقدار این فیلد باید با "$1" پایان داده شود',
  [causes.EQUAL]: 'مقدار این فیلد باید $1 باشد',
  [causes.GREATER]: 'لطفا یک عدد بزرگتر از $1 وارد کنید',
  [causes.GREATER_EQUAL]: 'لطفا یک عدد بزرگتر یا مساوی $1 وارد کنید',
  [causes.INTEGER]: 'مقدار این فیلد باید یک عدد صحیح باشد',
  [causes.LENGTH]: 'مقدار این فیلد باید $1 حرف باشد',
  [causes.LESS]: 'لطفا یک عدد کوچکتر از $1 وارد کنید',
  [causes.LESS_EQUAL]: 'لطفا یک عدد کوچکتر یا مساوی $1 وارد کنید',
  [causes.MAX_LENGTH]: 'حداکثر طول مجاز این فیلد $1 است',
  [causes.MIN_LENGTH]: 'حداقل طول مجاز این فیلد $1 است',
  [causes.REQUIRED]: 'این فیلد الزامی است',
  [causes.NUMBER]: 'لطفا یک عدد معتبر وارد کنید',
  [causes.STARTS_WITH]: 'مقدار این فیلد باید با "$1" شروع شود',
  [causes.WITHIN]: 'مقدار این فیلد نادرست است',
};

export default faLang;
