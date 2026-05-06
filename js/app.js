const translations = {
  cs: {
    tagline: "Aplikace pro sledování kuřáckých návyků, statistik a postupného odvykání kouření.",
    description: `Puff Tracker je aplikace pro všechny, kteří chtějí sledovat své návyky v kouření nebo vapování a postupně s tím přestat. Umožňuje zaznamenávat vaši spotřebu (cigaret, doutníků, IQOS, vodní dýmky a elektronické cigarety). Ke každému záznamu můžete přidat čas, typ a poznámku a snadno upravovat nebo mazat svou historii.
<br><br>
Sleduje váš pokrok, včetně počtu dní bez kouření a ušetřených peněz. Na úvodní obrazovce se zobrazují všechny klíčové statistiky a přehledný kalendář.
<br><br>
Aplikace vám také umožňuje zaznamenávat situace spojené s touhou po nikotinu nebo nepříjemnými pocity a přidávat aktivity, které vám pomohly je zvládnout (například procházky, dechová cvičení nebo relaxace), zatímco statistiky ukazují, co pro vás funguje nejlépe.
<br><br>
Nabízí denní tipy zaměřené na zvládání touhy po nikotinu, zlepšení zdraví a podporu duševní pohody.
<br><br>
Aplikace je k dispozici v češtině, slovenštině a angličtině.`,
    btn: "Získejte na Google Play",
    featuresTitle: "Funkce",
    screenshotsTitle: "Aplikace v akci",
    features: [
      { title: "Sledujte vše", desc: "Záznamy pro cigarety, doutníky, IQOS, vodní dýmku a e-cigarety s časem a poznámkami." },
      { title: "Váš pokrok", desc: "Počet dní bez kouření, ušetřené peníze a přehledný kalendář na první obrazovce." },
      { title: "Touhy a aktivity", desc: "Zaznamenávejte spouštěče a aktivity, které pomohly – statistiky ukáží, co funguje." },
      { title: "Denní tipy", desc: "Rady pro zvládání touhy po nikotinu, zlepšení zdraví a duševní pohodu." },
    ],
    footerCopy: "© 2025 Puff Tracker · Dostupné na Google Play",
    showMore: "Zobrazit více",
    showLess: "Zobrazit méně",
  },
  sk: {
    tagline: "Aplikácia na sledovanie fajčiarskych návykov, štatistík a postupného odvykania od fajčenia.",
    description: `Puff Tracker je aplikácia pre všetkých, ktorí chcú sledovať svoje návyky pri fajčení alebo vapovaní a postupne s tým prestať. Umožňuje zaznamenávať vašu spotrebu (cigariet, cigár, IQOS, vodnej fajky a elektronické cigarety). Ku každému záznamu môžete pridať čas, typ a poznámku a jednoducho upravovať alebo mazať svoju históriu.
<br><br>
Sleduje váš pokrok, vrátane počtu dní bez fajčenia a ušetrených peňazí. Na úvodnej obrazovke sa zobrazujú všetky kľúčové štatistiky a prehľadný kalendár.
<br><br>
Aplikácia vám tiež umožňuje zaznamenávať situácie spojené s túžbou po nikotíne alebo nepríjemnými pocitmi a pridávať aktivity, ktoré vám pomohli ich zvládnuť (napríklad prechádzky, dychové cvičenia alebo relaxácia), pričom štatistiky ukazujú, čo pre vás funguje najlepšie.
<br><br>
Ponúka denné tipy zamerané na zvládanie túžby po nikotíne, zlepšenie zdravia a podporu duševnej pohody.
<br><br>
Aplikácia je dostupná v češtine, slovenčine a angličtine.`,
    btn: "Získajte na Google Play",
    featuresTitle: "Funkcie",
    screenshotsTitle: "Aplikácia v akcii",
    features: [
      { title: "Sledujte všetko", desc: "Záznamy pre cigarety, cigary, IQOS, vodnú fajku a e-cigarety s časom a poznámkami." },
      { title: "Váš pokrok", desc: "Počet dní bez fajčenia, ušetrené peniaze a prehľadný kalendár na prvej obrazovke." },
      { title: "Túžby a aktivity", desc: "Zaznamenávajte spúšťače a aktivity, ktoré pomohli – štatistiky ukážu, čo funguje." },
      { title: "Denné tipy", desc: "Rady na zvládanie túžby po nikotíne, zlepšenie zdravia a duševnú pohodu." },
    ],
    footerCopy: "© 2025 Puff Tracker · Dostupné na Google Play",
    showMore: "Zobraziť viac",
    showLess: "Zobraziť menej",
  },
  en: {
    tagline: "An app for tracking smoking habits, statistics, and gradual smoking cessation.",
    description: `Puff Tracker is an app for anyone who wants to keep track of their smoking or vaping habits and gradually quit. It allows you to record your consumption (cigarettes, cigars, IQOS, hookah, and e-cigarettes). For each entry, you can add the time, type, and a note, and easily edit or delete your history.
<br><br>
It tracks your progress, including the number of smoke-free days and money saved. The home screen shows all key statistics and a clear calendar view.
<br><br>
The app also lets you log situations related to nicotine cravings or discomfort and add an activity that helped you manage them (such as walking, breathing exercises, or relaxation), while statistics show what works best for you.
<br><br>
It offers daily tips focused on managing cravings, improving health, and supporting mental well-being.
<br><br>
The app is available in Czech, Slovak, and English.`,
    btn: "Get it on Google Play",
    featuresTitle: "Features",
    screenshotsTitle: "See it in action",
    features: [
      { title: "Track everything", desc: "Log cigarettes, cigars, IQOS, hookah, and e-cigarettes with time, type, and notes." },
      { title: "Your progress", desc: "Smoke-free days, money saved, and a clear calendar — all on the home screen." },
      { title: "Cravings & triggers", desc: "Log situations and activities that helped — statistics show what works best for you." },
      { title: "Daily tips", desc: "Guidance on managing cravings, improving health, and supporting mental well-being." },
    ],
    footerCopy: "© 2025 Puff Tracker · Available on Google Play",
    showMore: "Show more",
    showLess: "Show less",
  },
};

const flags = { cs: "🇨🇿", sk: "🇸🇰", en: "🇬🇧" };

let activeLang;
let currentToggleText;

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
}

function getCookie(name) {
  const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return v ? decodeURIComponent(v.pop()) : null;
}

function getFlag(lang) {
  return flags[lang] || "🇬🇧";
}

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  setCookie("lang", lang, 365);
  document.getElementById("tagline").textContent = t.tagline;
  document.getElementById("description").innerHTML = t.description;
  document.getElementById("btn-text").textContent = t.btn;
  document.getElementById("btn-play").setAttribute("aria-label", t.btn);
  document.getElementById("features-title").textContent = t.featuresTitle;
  document.getElementById("screenshots-title").textContent = t.screenshotsTitle;
  t.features.forEach((f, i) => {
    document.getElementById(`f${i + 1}-title`).textContent = f.title;
    document.getElementById(`f${i + 1}-desc`).textContent = f.desc;
  });
  document.getElementById("footer-copy").textContent = t.footerCopy;
  document.getElementById("lang-current").textContent = getFlag(lang);
  document.querySelectorAll("#lang-options li").forEach(li => {
    li.setAttribute("aria-selected", li.dataset.lang === lang ? "true" : "false");
  });
  currentToggleText = t;
}

function init() {
  const savedLang = getCookie("lang");
  if (savedLang && translations[savedLang]) {
    activeLang = savedLang;
  } else {
    const lang = navigator.language?.slice(0, 2).toLowerCase();
    activeLang = lang in translations ? lang : "en";
  }

  applyLanguage(activeLang);

  const t = translations[activeLang];
  const btn = document.getElementById("toggle-btn");
  btn.textContent = t.showMore;
  btn.setAttribute("aria-label", t.showMore);

  const langBtn = document.getElementById("lang-select-btn");
  const langOptions = document.getElementById("lang-options");
  const langItems = document.querySelectorAll("#lang-options li");

  langBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    const isHidden = langOptions.hasAttribute("hidden");
    if (isHidden) {
      langOptions.removeAttribute("hidden");
      langBtn.setAttribute("aria-expanded", "true");
    } else {
      langOptions.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", "false");
    }
  });

  langItems.forEach(item => {
    item.addEventListener("click", function() {
      activeLang = this.dataset.lang;
      applyLanguage(activeLang);
      langOptions.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function(e) {
    if (!document.querySelector(".lang-switcher").contains(e.target)) {
      langOptions.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", "false");
    }
  });

  window.toggleDesc = function() {
    const desc = document.getElementById("description");
    const expanded = desc.classList.toggle("expanded");
    btn.textContent = expanded ? currentToggleText.showLess : currentToggleText.showMore;
    btn.setAttribute("aria-expanded", expanded ? "true" : "false");
  };
}

document.addEventListener("DOMContentLoaded", init);
