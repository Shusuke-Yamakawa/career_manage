---
title: '集金アプリ開発'
term: '2021/1～2022/4'
summary: '内製化プロジェクトをPLとして牽引'
description: '現場にReactNativeやAngular経験者がいない中で自ら先導を切り実装し/n開発者を育てながら内製化を推進した。/n品質改善/開発効率化の取り組みを数多く行った。'
skills: ['React Native', 'Spring Boot', 'Angular', 'GCP', 'Firebase', 'Docker']
---

## プロダクト概要

（主に）教育事業をターゲットとした集金アプリ

## システム概要

アプリ及び管理画面を提供

### 集金スマホアプリ

- 技術
  - ReactNative/JavaScript(Expoは使用していない)
- 機能
  - コミュニティ機能
    - スレッド（集金の単位）
      - 集金
    - チャット
  - マイページ
    - 本人確認
    - 出金
    - 口座利用履歴
    - その他パスワード変更など
  - お知らせ(プッシュ通知とお知らせを表示する画面)

### 管理画面

自社用及び事業者(例えば学校)用の2種類の管理画面を提供

- 技術
  - Angular/TypeScript
- 機能
  - 本人確認
  - 利用者管理
  - 出金管理
  - コミュニティ管理
  - 集金状況確認

### API及び入出金

アプリ、管理画面のバックエンド及び銀行との入出金はJava/Spring Bootの構成  
また、通知機能やバッチ処理にCloud Functions(JavaScript)を活用

### インフラ

GCP を活用。バックエンドはCloud Runで稼働  
データベースはCloud SQL(MySQL)とFirestoreを併用

## プロジェクト概要

業務委託で作成されたシステムを内製化  
数多くのバグの改善、財務局からの指摘対応、システム改善(リファクタリング含む)

## プロジェクト詳細

対応した内容の一部を記載(下部のシステム改善箇所も参照)

- 入出金先の銀行を変更(IF変更の大改修)
- 限度額など取引モニタリングの実装
- チャットに未読管理を導入
- 取引パスワードの導入
- 出金エラー時のリカバリー機能

## チーム構成

5 ～ 7 人程度の開発チーム
※全員モバイル未経験

## 役割

PL

## 担当作業

- 要件調整、整理、設計
- コーディング(フロントからバックまで全て)
- GCP 構築、整備
- 開発効率化、ナレッジの蓄積
- 進捗管理/メンバー管理/教育/採用

## 苦労した点

- ReactNativeやAngular経験者がいなかったこと(モバイル、フロント自体の経験がほとんどない)
- 現システムの情報がナレッジとしてほとんど残っていなかったこと
- 現システムの品質が非常に悪かったこと(バグの多さ、ソースの汚さなど)

## 上記に対して、解決/改善/工夫したこと

- 技術のキャッチアップ
  - 自らが先導して学び、メンバーの成長に寄与した
    - ReactやJavaScriptの教材を連携
    - 勉強会の開催
    - 難易度が高かったり、初見の分野は積極的に自身で解決した
- 開発効率化の施策  
  以下の取り組みは自ら提案し、多くは実装まで手掛けた
  - 導入したツール／仕組み
    - eslint/prettier
    - react native debugger
    - sentry
    - GitHub Actions(デプロイ、アプリ配布の自動化)
  - システム改善の例
    - re-duck パターンでディレクトリ構成見直し
    - GCEで稼働していたバックエンドをCloud Runに移行
    - spring batchで稼働していたバッチをCloud Functionsに移行
    - Firestoreの構成を変更(サブコレクションの活用)
    - react-native-firebaseのv5⇒v6(13)へのアップデート
    - ナレッジをConfluenceに記載
    - その他、コードレベルのリファクタリング多数
