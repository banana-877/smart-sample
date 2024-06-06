import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string | string[] }) {
  // メッセージが配列の場合はそのまま使用し、そうでなければ配列に変換
  const messageArray = Array.isArray(message) ? message : [message || ''];

  // エスケープされた改行文字を実際の改行に置換し、改行で分割しフラットな配列にする
  const messages = messageArray.map(msg => msg.replace(/\\n/g, '\n').split('\n')).flat();

  // 配列の各要素を順に<p>タグに展開してレンダリングする
  return (
    <>
      {messages.map((message, index) => (
        <p key={index} {...props} className={`text-sm text-red1 ${className}`}>
          {message}
        </p>
      ))}
    </>
  );
}