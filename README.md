# YouTube 自定義播放速度擴展

## 簡介

這是一個用於 YouTube 的自定義播放速度擴展工具。通過此工具，你可以自由調整 YouTube 視頻的播放速度，提供比 YouTube 官方設置更多的選擇。該擴展特別適合那些需要靈活控制播放速度以滿足不同觀看需求的用戶。

## 功能
- 在 YouTube 視頻播放器的控制欄中添加自定義播放速度按鈕。
- 點擊按鈕後可以選擇播放速度，範圍從 **0.1x** 到 **16x**，並可精確到 **0.1x**。
- 使用直觀的滑桿來快速調整播放速度，方便快捷。
- 提供用戶友好的界面，模仿 YouTube 原生設置面板的風格。

## 安裝

1. 下載項目源代碼，並解壓縮到本地。
2. 打開你的瀏覽器，進入擴展程序管理頁面，例如在 Chrome 瀏覽器中，輸入 `chrome://extensions`。
3. 開啟 "開發者模式"。
4. 點擊 "加載已解壓的擴展程序"，選擇你剛剛解壓的項目文件夾。

## 使用說明

1. 安裝擴展後，打開任何 YouTube 視頻。
2. 在右下角的播放控制欄中，你會看到一個新的速度圖標按鈕。
3. 點擊該按鈕，將打開一個自定義速度設置面板。
4. 使用滑桿調整視頻的播放速度，調整範圍為 **0.1x** 到 **16x**。
5. 調整完成後，即可享受自定義播放速度的視頻體驗。

## 文件結構
- `content.js`：包含主要的 JavaScript 代碼，用於添加按鈕和調整播放速度的功能。
- `manifest.json`：描述擴展程序的基本信息，包括名稱、版本和所需權限。
- `icons/`：包含使用的圖標資源。

## 注意事項
- 由於此擴展程序需要訪問 YouTube 的 DOM 結構，請確保在安裝時允許相關權限。
- 如果遇到速度調整無效的情況，請刷新頁面或檢查擴展是否正常加載。

## 貢獻
歡迎大家為這個項目做出貢獻。你可以 fork 本倉庫並提交 pull request，或者直接提出 issue 來報告問題或提出改進建議。

## 聯繫方式
如有任何疑問，請通過Discord:fishbaby1011聯繫我。

## 授權
本項目基於 MIT 許可證進行分發和使用，詳情請參閱 LICENSE 文件。