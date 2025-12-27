# Pj-AWAJI 2025: 淡路島日帰り旅行ガイド

2025年1月6日の淡路島日帰り旅行のためのデジタルしおり（モックアップ）です。
運転者だけでなく、同乗者も楽しめる「トータル・パーフェクト栞」を目指しました。

## プロジェクト概要

*   **目的地**: 兵庫県 淡路島
*   **日程**: 2025年1月6日 (月)
*   **スタイル**: 日帰りドライブ旅行
*   **車両**: Nissan Serena C28 e-power (レンタカーではなく自家用車想定)

## ファイル構成

*   `index.html`: **トップページ**。旅のハブとなる画面。天気予報、スケジュール概要、スポット一覧、同乗者ガイドへのリンクを集約。
*   `day1.html`: **詳細スケジュール表**。分刻みの行程表。
*   `car-manual.html`: **同乗者ガイド & 安全のしおり**。飛行機の安全のしおり風デザインで、同乗者の役割（ナビ、DJ等）をユーモラスに解説。
*   `spot-england.html`: **イングランドの丘**の観光パンフレット風ページ。
*   `spot-cruise.html`: **渦潮クルーズ**の観光パンフレット風ページ。
*   `spot-uzunoka.html`: **うずの丘大鳴門橋記念館**の観光パンフレット風ページ。
*   `weather.js`: 淡路島の天気予報を取得するスクリプト（WeatherAPI.com使用）。
*   `favicon.png`: ドライブするコアラのアイコン。
*   `*.png`: 各ページで使用しているイラスト画像。

## 見どころ

1.  **Safety Instructions (同乗者ガイド)**: 飛行機の安全のしおりを模したデザインで、ドライブ中のマナーや役割分担を楽しく共有できます。
2.  **Brochure Style Pages (スポット詳細)**: 検索の手間を省くため、必要な情報（見どころ、料金、グルメ）を1枚のパンフレット風ページに凝縮しました。
3.  **Responsive Design**: スマートフォンでの閲覧に最適化されたモダンなUI（Tailwind CSS使用）。

## 開発メモ

*   **API**: WeatherAPI.com (Free tier key included in js)
*   **Icons**: Lucide Icons
*   **Fonts**: Inter, JetBrains Mono, Zen Maru Gothic (Google Fonts)

Enjoy the trip!