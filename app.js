import { inject } from '@vercel/analytics';

inject();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.dataset.open = String(!isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.dataset.open = "false";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.dataset.open === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.dataset.open = "false";
      menuToggle.focus();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const youtubeButton = document.querySelector("[data-youtube]");
const youtubePlayer = document.querySelector("[data-youtube-player]");

youtubeButton?.addEventListener("click", () => {
  if (!youtubePlayer) return;
  const isLoaded = Boolean(youtubePlayer.querySelector("iframe"));
  if (!isLoaded) {
    const iframe = document.createElement("iframe");
    iframe.title = "Hey Brother — official YouTube player";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.src = "https://www.youtube-nocookie.com/embed/YxIiPLVR6NA?rel=0&modestbranding=1&playsinline=1";
    youtubePlayer.append(iframe);
  }
  const hidden = youtubePlayer.hidden;
  youtubePlayer.hidden = !hidden;
  youtubeButton.textContent = hidden ? "Nascondi player YouTube" : "▶ Hey Brother · YouTube";
});

document.querySelectorAll("[data-quote-video]").forEach((button) => {
  button.addEventListener("click", () => {
    const player = button.parentElement?.querySelector("[data-quote-player]");
    const videoId = button.dataset.quoteVideo;
    if (!player || !videoId) return;
    const isLoaded = Boolean(player.querySelector("iframe"));
    if (!isLoaded) {
      const iframe = document.createElement("iframe");
      iframe.title = "Scena italiana della citazione";
      iframe.loading = "lazy";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
      player.append(iframe);
    }
    const hidden = player.hidden;
    player.hidden = !hidden;
    button.setAttribute("aria-expanded", String(hidden));
    button.textContent = hidden ? "Nascondi la scena" : "▶ Guarda la scena italiana";
  });
});

document.querySelectorAll("[data-instagram-video]").forEach((button) => {
  button.addEventListener("click", () => {
    const player = button.parentElement?.querySelector("[data-instagram-player]");
    const reelId = button.dataset.instagramVideo;
    if (!player || !reelId) return;
    const isLoaded = Boolean(player.querySelector("iframe"));
    if (!isLoaded) {
      const iframe = document.createElement("iframe");
      iframe.title = "Frame Instagram dalla Caverna di Luca";
      iframe.loading = "lazy";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.src = `https://www.instagram.com/reel/${reelId}/embed/`;
      player.append(iframe);
    }
    const hidden = player.hidden;
    player.hidden = !hidden;
    button.setAttribute("aria-expanded", String(hidden));
    button.textContent = hidden ? "Nascondi il frame Instagram" : "▣ Apri il frame Instagram";
  });
});

const mottos = {
  default: "Un buon ricercatore porta sempre un seed di riserva.",
  data: "Il dataset è vasto. Il README è la tua mappa.",
  wizard: "Niente magia: solo un ambiente pulito.",
  training: "La suite di validazione è entrata nel suo training arc.",
  focus: "Carica l'analisi. Controlla due volte le ipotesi.",
  power: "Livello di potenza: riproducibile."
};
const motto = document.querySelector("[data-motto]");

function showMotto(key = "default") {
  if (motto) motto.textContent = mottos[key] || mottos.default;
}

document.querySelectorAll("[data-quest-card]").forEach((card) => {
  card.addEventListener("click", () => showMotto(card.dataset.questCard));
});
document.querySelector("[data-quest]")?.addEventListener("click", () => {
  showMotto();
  document.querySelector(".quest-section")?.scrollIntoView({ behavior: "smooth" });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.warn("Registrazione del service worker non riuscita.", error);
    });
  });
}
