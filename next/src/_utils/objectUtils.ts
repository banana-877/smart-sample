/**
 * データオブジェクトから空の文字列を除外し、指定されたキーを除外する。
 * @returns 空でない文字列値を持つデータオブジェクト。
 * @param data
 * @param keysToExclude
 */
export const excludeEmptyStringValues = (data: Record<string, any>, keysToExclude: string[] = []): Record<string, string> => {
  const filteredData: { [key: string]: string } = {};

  for (const key of Object.keys(data)) {
    const value = data[key];
    if(typeof value === "string" && value === "") {
      continue;
    }
    if(keysToExclude.includes(key)) {
      continue;
    }
    // オブジェクトの場合、空のプロパティを削除
    if (typeof value === "object" && value !== null) {
      Object.keys(value).forEach((propKey) => {
        if (value[propKey] === "") {
          delete value[propKey];
        }
      });
    }
    filteredData[key] = value;
  }

  return filteredData;
};

/**
 * Objectからクエリーパラメータ文字列を生成する
 * @param params
 */
export const queryParamsString = (params: object): string => {
  const strParam = (new URLSearchParams(excludeEmptyStringValues(params))).toString()
  if (strParam === '') {
    return ''
  }

  return '?' + strParam
}
