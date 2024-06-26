# 株式会社ゆめみのサマーインターン試験

## ビルド手順

### クローン

```bash
git clone https://github.com/yasuto88/yumemi_frontend_test
```

## env ファイルのダウンロード

下記 URL からアクセスを要求し、ダウンロードしてください。

<https://drive.google.com/file/d/16Qj4Zzy5-WoP6NuK1i37ifL6cqA5P4Jg/view?usp=sharing>

ダウンロードできたら、ルートディレクトリに配置してください。

### node_modules のインストール

```bash
npm install
```

### 起動

```bash
npm start
```

## 仕様

以下の参考に作成

- [フロントエンドコーディング試験](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)

追加の仕様

- レスポンシブに対応するため、PC サイズはサイドバーを、それ以下のサイズはモーダルウィンドウを表示し、都道府県を選択する
- エラー時の UI を用意する

## 環境

- **@reduxjs/toolkit**: ^2.2.5
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0
- **@types/jest**: ^27.5.2
- **@types/react**: ^18.3.2
- **@types/react-dom**: ^18.3.0
- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **react-redux**: ^9.1.2
- **react-scripts**: 5.0.1
- **recharts**: ^2.12.7
- **typescript**: ^4.9.5
- **web-vitals**: ^2.1.4

## アーキテクチャ・デザインパターン

- Atomic Design
- MVC
- Reducks パターン

参考:[【中~大規模チーム向け】React+Redux の設計に困ったあなたへ送る設計案](https://zenn.dev/yuki_tu/articles/29e61e7634b272)

## CI/CD

プルリクエスト時に以下を実行

- eslint
- prettier

CD は行っていない

## テスト

1. **unit てすと**

   - container
   - hook
   - presenter

2. **レスポンシブに対応できているか**

   320px から 1122px までをテスト

   - UI が崩れていないか
   - 画面が見切れていないか
   - テキストが見やすい大きさか

3. **integration テスト**

   - 都道府県のチェックボックスを選択するとその人口データを取得
   - 人口データが取得されたら、そのデータをチャートに表示
   - `総人口`、`年少人口`、`生産年齢人口`、`老年人口`のチェックボックスを選択し、人口データをフィルタリング

## 感想・反省点

- git の運用に慣れておらず、もっと勉強と練習をする必要がある
- テストが意外と難しく、時間がかかってしまった。
- MUI を参考にスタイリングしたが、なぜか古臭い感じがする
- チャートを表示するために、Recharts を使用したが、`Warning: XAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.`という警告が表示され、まだ解決できていない
- ダークモードや、l10n、アクセシビリティに対応できると、もう少しレベルの高くかっこいいアプリが作れると思った。
