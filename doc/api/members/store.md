# 会員情報情報一覧取得

- 会員テーブルから10件ずつ取得・またはログインID/氏名で検索する
- 論理削除済みデータは取得しない

## 要求

### 必要な権限

- 認証
- 認可

### エンドポイント

```
GET /api/members
```

### パラメーター

クエリー:

| パラメータ名   | 型        | 内容           | 必須 | 備考                                        | 
| -------------- | --------- | -------------- | ---- | ------------------------------------------- | 
| name           | string    | 会員名         |      | 部分一致で検索                              | 
| gender         | integer[] | 性別           |      | 複数選択可<br>0: 回答なし, 1: 女性, 2: 男性 | 
| email          | string    | メールアドレス |      | 部分一致で検索                              | 
| tel            | string    | 電話番号       |      | 部分一致で検索                              | 
| birthday_start | date      | 誕生日_開始    |      |                                             | 
| birthday_end   | date      | 誕生日_終了    |      |                                             | 
| page           | integer   | ページ番号     |      | 空の場合、1                                 | 


### 例

```js
const params = {
  name: "太郎",
  gender: [0, 1],
  email: "@gmail.com",
  tel: "080",
  birthday_start: "1994-01-01",
  birthday_end: "1994-12-31",
  page: 2
}

// http://sample.com/api/members?name=太郎&gender[]=0&gender[]=1&email=@gmail.com&tel=080&birthday_start=1994-01-01&birthday_end=1994-12-31&page=2
const data = api.get("/api/members",　params)
```

## 応答の本文

### 例

- 200(データが１件も存在しない場合)

```json
{
  "status_code": 200,
  "data": {
    "current_page": 1,
    "data": [],
    "from": null,
    "last_page": 1,
    "per_page": 10,
    "to": null,
    "total": 0
  }
}
```

- 200(データが１件以上存在する場合)

```json
{
  "status_code": 200,
  "data": {
    "current_page": 2,
    "data": [
      {
        "id": 11,
        "name": "田中太郎",
        "gender": 0,
        "birthday": "1994-04-01"
      },
      {
        "id": 2,
        "user": {
          "login_id": "a0002",
          "name": "銀行次郎"
        },
        "auth": 1,
        "lock_flg": 0
      }
    ],
    "from": 11,
    "last_page": 3,
    "per_page": 10,
    "to": 20,
    "total": 30
  }
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