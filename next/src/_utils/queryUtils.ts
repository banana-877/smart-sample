"use client"
import { useSearchParams } from 'next/navigation'

/**
 * URLパラメータを取得する。
 * @param {string} key - 取得するパラメータのキー。
 * @return {string} パラメータの値。キーが存在しない場合はブランク。
 */
export const GetUrlParameter = function(key: string) {
  const params = useSearchParams();
  return params.get(key) ?? '';
}

/**
 * URLパラメータを取得する。
 * @param {string} key - 取得するパラメータのキー。
 * @return {string[]} パラメータの値。キーが存在しない場合はブランク。
 */
export const getUrlParameters = function(key: string) {
  const params = new URLSearchParams(window.location.search);
  return params.getAll(key) ?? [];
}

/**
 * URLパラメータを取得する（オブジェクト型用）。
 * @param {string} objectName - オブジェクト名（基本となるパラメータのキー）。
 * @param {string[]} propertyNames - オブジェクト内のプロパティ名のリスト。
 * @return {Record<string, string>} パラメータの値。キーが存在しない場合は各プロパティ名が空文字列のオブジェクト。
 */
export const getUrlParameterObject = function(objectName: string, propertyNames: string[]) {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};

  propertyNames.forEach(propertyName => {
    result[propertyName] = params.get(`${objectName}[${propertyName}]`) ?? "";
  });

  return result;
}
