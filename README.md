# Trident AI Core 影片展示頁

無需安裝套件或建置的靜態測試頁，介面使用繁體中文。直接開啟 `index.html` 即可檢視六個影片佔位欄位。

## 設定影片

集中編輯 `videos.js` 中的 `window.TRIDENT_VIDEOS`：

- `title`：作品名稱。
- `description`：作品簡短介紹。
- `youtube`：貼上自己影片的完整 YouTube 連結或 11 碼影片識別值。留空時顯示「影片待設定」，無效格式會顯示「影片連結需要確認」。

可接受一般觀看連結、youtu.be 短連結、Shorts、直播與內嵌連結。複製或刪除資料項目即可增減卡片。頁面透過內嵌播放器播放影片，不會上傳大型影片檔案到 GitHub。

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
