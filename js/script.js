const STORAGE_KEY = "minilink_urls";
const BASE_URL = "https://rasyaandrean.github.io/MiniLink/";

// --- Storage helpers (localStorage) ---
function getLinks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveLink(alias, longUrl) {
  const links = getLinks();
  links[alias] = longUrl;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function aliasExists(alias) {
  return !!getLinks()[alias];
}

// --- Redirect logic (runs immediately) ---
(function handleRedirect() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  const longUrl = getLinks()[hash];
  if (longUrl) {
    window.location.href = longUrl;
  }
})();

// --- Utilities ---
function generateRandomString(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateUniqueAlias() {
  let alias;
  do {
    alias = generateRandomString();
  } while (aliasExists(alias));
  return alias;
}

function isValidUrl(url) {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function isValidAlias(alias) {
  return /^[a-zA-Z0-9_-]+$/.test(alias);
}

// --- Main shortener ---
function shortenUrl(longUrl, customAlias = "") {
  return new Promise((resolve, reject) => {
    if (!isValidUrl(longUrl)) {
      reject("URL tidak valid. Pastikan diawali http:// atau https://");
      return;
    }

    let alias;
    if (customAlias) {
      if (!isValidAlias(customAlias)) {
        reject("Alias hanya boleh berisi huruf, angka, - dan _");
        return;
      }
      if (aliasExists(customAlias)) {
        reject("Alias sudah digunakan. Silakan pilih yang lain.");
        return;
      }
      alias = customAlias;
    } else {
      alias = generateUniqueAlias();
    }

    saveLink(alias, longUrl);
    resolve(BASE_URL + "#" + alias);
  });
}

// --- UI ---
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("shortenerForm");
  const longUrlInput = document.getElementById("longUrl");
  const customAliasInput = document.getElementById("customAlias");
  const submitBtn = document.getElementById("submitBtn");
  const resultContainer = document.getElementById("resultContainer");
  const shortUrlElement = document.getElementById("shortUrl");
  const copyBtn = document.getElementById("copyBtn");
  const notification = document.getElementById("notification");
  const errorMessage = document.getElementById("errorMessage");
  let notificationTimer = null;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMessage.classList.remove("visible");

    const longUrl = longUrlInput.value.trim();
    const customAlias = customAliasInput.value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = "Memproses...";

    try {
      const shortUrl = await shortenUrl(longUrl, customAlias);
      shortUrlElement.textContent = shortUrl;
      resultContainer.classList.add("visible");
      errorMessage.classList.remove("visible");
    } catch (error) {
      errorMessage.textContent = error;
      errorMessage.classList.add("visible");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Singkatkan URL";
    }
  });

  copyBtn.addEventListener("click", () => {
    const shortUrl = shortUrlElement.textContent;
    navigator.clipboard.writeText(shortUrl).then(() => {
      if (notificationTimer) clearTimeout(notificationTimer);
      notification.classList.add("visible");
      notificationTimer = setTimeout(() => {
        notification.classList.remove("visible");
      }, 2000);
    }).catch(() => {
      alert("Gagal menyalin. Silakan salin secara manual.");
    });
  });

  longUrlInput.addEventListener("input", () => {
    errorMessage.classList.remove("visible");
  });
});
