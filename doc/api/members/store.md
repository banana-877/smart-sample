# 会員情報登録

- 会員テーブルにデータを登録する

## 要求

### 必要な権限

- 認証
- 認可

### エンドポイント

```
POST /api/members
```

### リクエスト
ヘッダー: Content-Type:application/json


ボディ:
| パラメータ名         | 型     | 内容           | 必須 | 備考                               |
| -------------------- | ------ | -------------- | ---- | ---------------------------------- |
| name                 | string  | 会員名         | ⚪︎    | 255文字以内                         |
| gender               | integer | 性別           | ⚪︎    | 0: 回答なし, 1: 女性, 2: 男性        |
| birthday             | date    | 誕生日         | ⚪︎    | YYYY-MM-DD                         |
| email                | string  | メールアドレス  | ⚪︎    | 有効なメールアドレス                   |
| tel                  | string  | 電話番号       | ⚪︎    | 24文字以内                           |
| note                 | string  | 備考           | -    |                                    |


### 例

```js
const data = {
  name: "田中太郎",
  gender: 0,
  birthday: "1994-04-01",
  email: "xxxxx@sample.com",
  tel: "080-xxxx-xxxx",
  note: "メモ"
}

axios.post("/api/members", data)
```

## 応答の本文

### 例

- 201（Created）

```json
{
  "status_code": 201,
  "data": {
    "id": 11,
    "name": "田中太郎",
    "gender": 0,
    "birthday": "1994-04-01",
    "email": "xxxxx@sample.com",
    "tel": "080-xxxx-xxxx",
    "note": "メモ",
    "created_at": "2023-12-31 12:00:00",
    "updated_at": "2023-12-31 12:00:00"
  }
}
```

- 400（バリデーションエラー）

```json
{
  "status_code": 400,
  "errors": [
    {
      "name": [
        "会員名は必ず指定してください。"
      ]
    },
    {
      "email": [
        "メールアドレスには、有効なメールアドレスを指定してください。"
      ]
    }
  ]
}
```

- 500（サーバーエラー）

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "message": "サーバー内エラー"
    }
  ]
}
```

## 補足事項
