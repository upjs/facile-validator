import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const zhLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: '请接受此字段',
  [rules.ALPHA]: '请仅输入字母字符',
  [rules.ALPHA_NUM]: '请仅输入字母数字字符',
  [rules.ALPHA_NUM_DASH]: '请仅输入字母数字字符、破折号和下划线',
  [rules.BETWEEN_LENGTH]: '值必须介于 $1 和 $2 之间',
  [rules.BETWEEN_NUMBER]: '请输入一个介于 $1 和 $2 之间的数字',
  [rules.DIGITS]: '该值必须是 $1 位数',
  [rules.EMAIL]: '请输入有效的电子邮件地址',
  [rules.ENDS_WITH]: '值必须以“$1”结尾',
  [rules.EQUAL_LENGTH]: '值必须有 $1 个字符',
  [rules.EQUAL_NUMBER]: '值必须等于 $1',
  [rules.GREATER_EQUAL]: '请输入一个大于或等于 $1 的数字',
  [rules.INTEGER]: '该值必须是一个有效的整数',
  [rules.LESS_EQUAL]: '请输入一个小于或等于 $1 的数字',
  [rules.MAX_LENGTH]: '最大长度为 $1',
  [rules.MIN_LENGTH]: '最小长度为 $1',
  [rules.NUM_DASH]: '请输入带破折号和下划线的数字',
  [rules.NUMBER]: '请输入一个有效的数字',
  [rules.REGEX]: '该值与模式不匹配',
  [rules.REQUIRED]: '此字段是必需的',
  [rules.STARTS_WITH]: '值必须以“$1”开头',
  [rules.WITHIN]: '值不正确',
  [rules.NOTIN]: '值不正确',
};

export default zhLang;
