# Skill-Exchange

## 開発手順
チーム開発でのルールを定めてあるのでコードをpull,clone（ローカルに取り込む）前にWikiを見てほしいです。

## ブランチ戦略
Github Flowです。なのでブランチのマージ後は必ず削除をするようにしてください。

## フローの流れ（コンフリクト回避のため）
 - あらかじめmainリポジトリへのpushは禁止をしております。なのでフォルダを中心に役割りを分けてなるべくコンフリクトを起こさない。
 - 各役割ごとにブランチを作りPRを行う。
 - プルリクエストの承認を自分で行わないこと

## リポジトリ
フロントエンド・バックエンドのプロジェクトを同じリポジトリで使用をします。（モノリポ）

## ホスティング先
フロントエンド（React）：Vercel or Heroku or CloudFront
バックエンド（Laravel）：Heroku or AWS


## データベース設計（ER図）
このカラムなどを参考にしてDOA（データ指向アーキテクチャ）に沿ってUIなどを作ってください。

**テーブル名**  
 - users
 - skills
 - user_skills
 - desired_skills
 - matches（マッチング）
 
 **リレーションシップ**
 - Users ↔ UserSkills（1:N）
 - Users ↔ DesiredSkills（1:N）
 - Skills ↔ UserSkills（1:N）
 - Skills ↔ DesiredSkills（1:N）
 - Users ↔ Matches（1:N ×2）
 - Skills ↔ Matches（1:N ×2）
 
[ER図](diagrams/image.png)


## UI/UXの図
norman6464のチャットにFigmaなどで完成させた図などを下さい。そしたらこちらでREADMEの編集をします。

