# 環境構築手順（Next.js）

- DB作成

```shell
$ touch database/database.sqlite

// DBマイグレーション実行
$ bin/drizzle-kit migrate
```

- npmパッケージinstall

```shell
$ npm ci
```

- 開発サーバー起動

```shell
$ npm run dev
```

# 開発作業

- スキーマ変更

```shell
$ vim database/schema.ts // カラム追加などの変更作業

$ bin/drizzle-kit generate // shema.tsからマイグレーションファイル作成

$ bin/drizzle-kit migrate // DBマイグレーション実行
```

- デプロイ

```shell
$ npm run build

$ npm run start // SSRサーバー起動
```

# ディレクトリ構成
```
bin/ ................ サーバーサイドコマンド
database/ ........... データベースのスキーマやマイグレーション管理
public/ ............. WEB公開静的ファイル
src/ ................ ロジック
├─ app/
├─ _components/
├─ _configs/
├─ _plugins/
├─ _repositories/
├─ _types/
├─ _utils/
└─ _validator/
```

## `app/`
- NextJSのappルーター
- https://nextjs.org/docs/app/building-your-application/routing#the-app-router

## `_components/`
- 複数のページで使用する可能性があるUIビジネスロジックパーツや共通ビジネスロジックを格納する

## `_configs/`
- 固定値やビジネスロジックの設定情報を格納

## `_plugins/`
- 共通インスタンス情報や、拡張機能を管理

## `_repositories/`
- データの入力ソースとI/O管理または、データに対するビジネスロジックを格納

## `_types/`
- 型定義を情報管理

## `_utils/`
- 標準クラスのutilityクラス格納

## `_validator/`
- バリデーションビジネスロジックを格納