"use strict";

function getYouTubeId(value) {
  const input = String(value || "").trim();
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase();
    let id;
    if (host === "youtu.be") id = url.pathname.split("/")[1];
    else if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(host)) {
      const parts = url.pathname.split("/");
      id = url.pathname === "/watch" ? url.searchParams.get("v") : ["embed", "shorts", "live"].includes(parts[1]) ? parts[2] : null;
    }
    return /^[\w-]{11}$/.test(id || "") ? id : null;
  } catch {
    return null;
  }
}

function createVideoCard(video, index) {
  const card = document.createElement("article");
  card.className = "video-card";
  const media = document.createElement("div");
  media.className = "video-media";
  const title = String(video.title || `建模成果 ${index + 1}`);
  card.setAttribute("aria-label", title);
  const id = getYouTubeId(video.youtube);
  if (id) {
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
    frame.title = title;
    frame.loading = "lazy";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    media.append(frame);
  } else {
    media.classList.add("placeholder", `variation-${index % 3}`);
    const number = document.createElement("span");
    number.className = "slot-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const shape = document.createElement("div");
    shape.className = "wire-cube";
    shape.setAttribute("aria-hidden", "true");
    shape.innerHTML = "<span></span><span></span><span></span>";
    const status = document.createElement("span");
    status.className = "slot-status";
    status.textContent = video.youtube ? "影片連結需要確認" : "影片待設定";
    media.append(number, shape, status);
  }
  const info = document.createElement("dl");
  info.className = "card-info";
  for (const [label, value] of [["影片名稱", title], ["影片內容", video.description], ["備註", video.notes]]) {
    const row = document.createElement("div");
    row.className = "info-row";
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = String(value || "—");
    row.append(term, detail);
    info.append(row);
  }
  card.append(media, info);
  return card;
}

const grid = document.getElementById("video-grid");
if (grid) (window.TRIDENT_VIDEOS || []).forEach((video, index) => grid.append(createVideoCard(video, index)));
