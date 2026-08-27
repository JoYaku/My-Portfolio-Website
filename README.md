# JoYaku Portfolio

個人ポートフォリオウェブサイト
[https://github.com/JoYaku/My-Portfolio-Website](https://joyaku.github.io/My-Portfolio-Website/)

## 技術スタック

- **フロントエンド**：HTML5, CSS3, JavaScript (ES6+)
- **UIフレームワーク**：React 18
- **トランスパイラ**：Babel Standalone（ブラウザ内JSX変換、ビルド不要）
- **スタイル**：カスタムCSS（ダークテーマ、ネオンアクセント）
- **アニメーション**：CSS Transition / Intersection Observer
- **アイコン**：インラインSVG
- **外部リソース**：CDN経由（React, Babel, フォント）

## 機能

- インタラクティブな4年間学習タイムライン
- プロジェクト詳細モーダル（11項目構造）
- スキルカテゴリ別表示
- メールアドレスのクリックコピー機能
- レスポンシブデザイン（PC / タブレット / スマホ）
- スムーズスクロール、スクロール連動アニメーション
- アクセシビリティ対応（セマンティックHTML, キーボード操作）

## セットアップ

ビルドツール・依存関係のインストールは不要です。

```bash
# クローン
git clone https://github.com/JoYaku/portfolio.git
cd portfolio

# ローカルサーバー起動
python -m http.server 8080
