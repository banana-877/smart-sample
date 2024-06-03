import axios, { AxiosRequestConfig } from "axios";

// 共通エラーハンドリング
async function fetch(method: string, url: string, config?: AxiosRequestConfig) {
  try {
    const response = await axios({ method, url, ...config });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 400エラーの場合、errorをそのまま返す
      if (error.response?.status === 400) {
        throw error;
      }
      // 400エラー以外の場合、アラートメッセージを表示
      alert(error.response?.data?.errors?.message || "通信エラーが発生しました。");
    } else {
      alert("通信エラーが発生しました。");
    }
    throw error;
  }
}

export default {
  async get(url: string, config?: AxiosRequestConfig) {
    return await fetch("get", url, config);
  },
  async post(url: string, data: any, config?: AxiosRequestConfig) {
    return await fetch("post", url, { ...config, data });
  },
  async put(url: string, data?: any, config?: AxiosRequestConfig) {
    return await fetch("put", url, { ...config, data });
  },
  async delete(url: string, config?: AxiosRequestConfig) {
    return await fetch("delete", url, config);
  },
};
