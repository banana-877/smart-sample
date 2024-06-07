/**
 * 文字列が空かチェックする。空文字列の場合も空と判定
 * @returns boolean
 * @param str
 */
export const isEmpty = (str: string): boolean => {
  return !str || str === '';
}

/**
 * str1がstr2を含んでいる（部分一致）している場合True
 * @returns boolean
 * @param str1
 * @param str2
 */
export const isPartialMatch = (str1: string, str2: string): boolean => {
  return str1.indexOf(str2) > -1;
}

/**
 * str1がstr2を含んでいない場合True
 * @returns boolean
 * @param str1
 * @param str2
 */
export const notPartialMatch = (str1: string, str2: string): boolean => {
  return !isPartialMatch(str1, str2)
}