/**
 * データオブジェクトから空の文字列を除外し、指定されたキーを除外する。
 * @param フィルタリング対象のデータオブジェクト。
 * @param 出力から除外するキーの配列。
 * @returns 空でない文字列値を持つデータオブジェクト。
 */
export const filterEmptyStringValues = (data: Record<string, any>, keysToExclude: string[] = []): Record<string, string> => {
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
 * オブジェクトから指定されたキーのプロパティ値を取得する。
 */
export const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

/**
 * 金額を日本円の書式に変換する
 * @param {string} price
 * @returns 3桁ごとに区切り文字がある数字文字列(例：10000 → 10,000)
 */
export const formatJaPriceString = (price: number) => {
  return new Intl.NumberFormat('ja-JP').format(price);
}

/**
 * オブジェクトURLを解放する
 * @param {string[] | string} url: オブジェクトURL(URL.createObjectURL で作成した文字列または文字列配列)
 */
export const revokeObjectURL = (url: string[] | string) => {
  const target = Array.isArray(url) ? url : [url];
  target.forEach((file) => {
    URL.revokeObjectURL(file);
  });
}

/**
 * 配列の重複していない項目のみを返却する
 * @param array 
 * @returns {array}
 */
export const trimDuplicate = (array: string[]) => {
  return [...array].filter(x => x).filter((item, i, self) => self.indexOf(item) === self.lastIndexOf(item));
}