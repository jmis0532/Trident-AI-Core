# Trident AI Core 影片展示頁

Trident AI Core 公司的影像與 3D 建模成果展示網站，介面使用繁體中文，無需安裝套件或建置。目前第一格已設定使用者提供的影片 `https://youtu.be/R29Tzj-w0WE`，第二格為 `https://youtu.be/HNnMuboZh1A`，其餘四格保留待設定。

原始公司標誌 `Trident AI Core LOGO/Logo.jpg` 保留不變。頁首使用其去背版本 `Trident AI Core LOGO/Logo-transparent.png`，具備實際 alpha 透明度，保留藍綠色三叉戟圖案與比例。

透明版本透過內建 imagegen 編輯，設定透明背景。編輯提示要求：僅移除白底，保留原圖的藍綠色三叉戟輪廓、顏色、角度、比例與方向；輸出實際透明 PNG，邊緣平順、無白框，不重新設計、不加文字、陰影或其他元素。

## 設定影片

集中編輯 `videos.js` 中的 `window.TRIDENT_VIDEOS`：

- `title`：影片名稱。
- `description`：影片內容。
- `notes`：備註；留空時顯示「—」。
- `youtube`：貼上自己影片的完整 YouTube 連結或 11 碼影片識別值。留空時顯示「影片待設定」，無效格式會顯示「影片連結需要確認」。

可接受一般觀看連結、youtu.be 短連結、Shorts、直播與內嵌連結。複製或刪除資料項目即可增減卡片。頁面透過內嵌播放器播放影片，不會上傳大型影片檔案到 GitHub。

每張卡片下方依序直接顯示「影片名稱」、「影片內容」、「備註」，使用語意化名稱／值結構，長文字會換行。這些是展示資訊，不是訪客提交表單。版面依螢幕寬度切換三欄、兩欄與單欄，播放器維持 16:9，適用現代手機 Safari 與 Chrome；實際裝置相容性仍依瀏覽器與系統版本而定。

請將成果影片上傳至自己的 YouTube 帳號，設為「不公開」，並允許嵌入。這裡的「不公開」不是網站存取限制；取得影片連結的人仍可觀看與分享。影片是否能播放取決於 YouTube 的影片設定；4K 以上畫質也取決於來源影片與播放環境。

## 本機預覽

可以直接開啟 `index.html` 檢視排版。實際驗證 YouTube 播放請透過 HTTP 預覽或已發布的網站，避免本機檔案來源造成播放器限制。

若已安裝 Python，可在專案目錄執行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

瀏覽 `http://127.0.0.1:4173`。按 `Ctrl+C` 停止預覽。

## GitHub Pages

將本專案推送至使用者指定的 GitHub 儲存庫後，在該儲存庫的 Settings → Pages，選擇從分支部署，設定實際使用的分支及根目錄 `/ (root)`，再儲存。根目錄已包含 `index.html` 與 `.nojekyll`，不需要建置步驟。

儲存庫：https://github.com/jmis0532/Trident-AI-Core

網站：https://jmis0532.github.io/Trident-AI-Core/

此專案使用 `main` 分支的根目錄發布。後續修改推送至 `main` 後，GitHub Pages 會重新部署。
