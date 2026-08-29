/**
 * ChatGPT Command Library - App Logic
 * Pure vanilla JavaScript (ES6). No frameworks, no build step.
 */

(function () {
  "use strict";

  /* ============================================================
     State
     ============================================================ */
  const STORAGE_FAVES = "ccl_favorites";
  const STORAGE_THEME = "ccl_theme";
  const PAGE_SIZE = 24; // lazy render batch size

  const state = {
    commands: [],          // working copy (with favorites merged)
    filtered: [],          // current filtered + sorted list
    category: "All",
    sort: "alphabetical",
    query: "",
    visibleCount: PAGE_SIZE,
  };

  /* ============================================================
     DOM references
     ============================================================ */
  const $ = (sel) => document.querySelector(sel);
  const els = {
    navbar:        $("#navbar"),
    searchInput:   $("#searchInput"),
    themeToggle:   $("#themeToggle"),
    themeIcon:      $("#themeIcon"),
    mobileToggle:  $("#mobileMenuToggle"),
    sidebar:        $("#sidebar"),
    categoryList:  $("#categoryList"),
    sortOptions:   $("#sortOptions"),
    cardGrid:      $("#cardGrid"),
    resultCount:   $("#resultCount"),
    emptyState:    $("#emptyState"),
    loadMoreWrap:  $("#loadMoreWrap"),
    loadMoreBtn:   $("#loadMoreBtn"),
    clearFilters:  $("#clearFilters"),
    statTotal:     $("#statTotal"),
    statCategories:$("#statCategories"),
    statFavorites: $("#statFavorites"),
    toast:         $("#toast"),
    toastText:     $("#toastText"),
    year:          $("#year"),
  };

  /* ============================================================
     Category metadata (icon + color per category)
     ============================================================ */
  const CATEGORY_META = {
    "Writing":            { icon: "fa-pen-nib" },
    "Coding":             { icon: "fa-code" },
    "Business":           { icon: "fa-briefcase" },
    "Learning":           { icon: "fa-graduation-cap" },
    "Marketing":          { icon: "fa-bullhorn" },
    "Productivity":        { icon: "fa-gears" },
    "Analysis":            { icon: "fa-chart-line" },
    "Prompt Engineering": { icon: "fa-wand-magic-sparkles" },
    "Career":             { icon: "fa-user-tie" },
    "Social Media":       { icon: "fa-hashtag" },
    "General":            { icon: "fa-compass" },
  };

  /* ============================================================
     Utilities
     ============================================================ */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /** Highlight occurrences of `term` inside `text` with <mark>. */
  function highlight(text, term) {
    const safe = escapeHtml(text);
    if (!term) return safe;
    const escTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("(" + escTerm + ")", "gi");
    return safe.replace(re, '<mark class="search-highlight">$1</mark>');
  }

  /** Debounce helper for search input. */
  function debounce(fn, wait) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  /* ============================================================
     Favorites (LocalStorage)
     ============================================================ */
  function loadFavorites() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_FAVES) || "[]"));
    } catch {
      return new Set();
    }
  }
  function saveFavorites(set) {
    localStorage.setItem(STORAGE_FAVES, JSON.stringify([...set]));
  }
  function toggleFavorite(id) {
    const faves = loadFavorites();
    if (faves.has(id)) faves.delete(id);
    else faves.add(id);
    saveFavorites(faves);
    // sync working copy
    const cmd = state.commands.find((c) => c.id === id);
    if (cmd) cmd.favorite = faves.has(id);
    updateStats();
    // re-render only the affected card's button to avoid full re-render
    const btn = document.querySelector(`.card-action--fav[data-id="${id}"]`);
    if (btn) {
      btn.classList.toggle("is-favorite", cmd && cmd.favorite);
      const icon = btn.querySelector("i");
      if (icon) icon.className = cmd && cmd.favorite ? "fa-solid fa-star" : "fa-regular fa-star";
      btn.setAttribute("aria-pressed", String(!!(cmd && cmd.favorite)));
    }
    // if sorted by favorites, re-sort
    if (state.sort === "favorites") applyFilters();
  }

  /* ============================================================
     Theme
     ============================================================ */
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_THEME) || "dark";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    els.themeIcon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0B0F19" : "#f1f5f9");
    localStorage.setItem(STORAGE_THEME, theme);
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  }

  /* ============================================================
     Stats
     ============================================================ */
  function updateStats() {
    els.statTotal.textContent = state.commands.length;
    const cats = new Set(state.commands.map((c) => c.category));
    els.statCategories.textContent = cats.size;
    const faves = loadFavorites();
    els.statFavorites.textContent = [...faves].filter((id) =>
      state.commands.some((c) => c.id === id)
    ).length;
  }

  /* ============================================================
     Sidebar: categories
     ============================================================ */
  function buildCategories() {
    const counts = {};
    state.commands.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    const categories = ["All", ...Object.keys(counts).sort()];

    els.categoryList.innerHTML = categories
      .map((cat) => {
        const isActive = cat === state.category;
        const meta = CATEGORY_META[cat] || { icon: "fa-folder" };
        const count = cat === "All" ? state.commands.length : counts[cat];
        return `
          <button class="category-item ${isActive ? "is-active" : ""}"
                  data-category="${escapeHtml(cat)}"
                  aria-pressed="${isActive}">
            <span class="category-item__label">
              <i class="fa-solid ${meta.icon}"></i> ${escapeHtml(cat)}
            </span>
            <span class="category-item__count">${count}</span>
          </button>`;
      })
      .join("");

    els.categoryList.querySelectorAll(".category-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.category;
        state.visibleCount = PAGE_SIZE;
        buildCategories(); // update active state
        applyFilters();
        // close mobile sidebar after selection
        els.sidebar.classList.remove("is-open");
        els.mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ============================================================
     Sort
     ============================================================ */
  function sortCommands(list) {
    const arr = [...list];
    switch (state.sort) {
      case "alphabetical":
        arr.sort((a, b) => a.command.localeCompare(b.command));
        break;
      case "newest":
        arr.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        // "popular" = a curated weight based on id proximity + favorites
        arr.sort((a, b) => {
          const faves = loadFavorites();
          const fa = faves.has(a.id) ? 1 : 0;
          const fb = faves.has(b.id) ? 1 : 0;
          if (fb !== fa) return fb - fa;
          return b.id - a.id;
        });
        break;
      case "favorites":
        const faves = loadFavorites();
        arr.sort((a, b) => {
          const fa = faves.has(a.id) ? 0 : 1;
          const fb = faves.has(b.id) ? 0 : 1;
          if (fa !== fb) return fa - fb;
          return a.command.localeCompare(b.command);
        });
        break;
    }
    return arr;
  }

  function bindSort() {
    els.sortOptions.querySelectorAll(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        els.sortOptions.querySelectorAll(".sort-btn").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        state.sort = btn.dataset.sort;
        state.visibleCount = PAGE_SIZE;
        applyFilters();
      });
    });
  }

  /* ============================================================
     Filter + Search
     ============================================================ */
  function applyFilters() {
    const q = state.query.trim().toLowerCase();
    let list = state.commands;

    if (state.category !== "All") {
      list = list.filter((c) => c.category === state.category);
    }

    if (q) {
      list = list.filter((c) => {
        return (
          c.command.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.example.toLowerCase().includes(q) ||
          (c.title && c.title.toLowerCase().includes(q))
        );
      });
    }

    state.filtered = sortCommands(list);
    renderCards();
  }

  /* ============================================================
     Render
     ============================================================ */
  function renderCards() {
    const q = state.query.trim();
    const total = state.filtered.length;
    const visible = state.filtered.slice(0, state.visibleCount);

    els.resultCount.innerHTML = `Showing <strong>${visible.length}</strong> of <strong>${total}</strong> commands`;

    if (total === 0) {
      els.cardGrid.innerHTML = "";
      els.emptyState.hidden = false;
      els.loadMoreWrap.hidden = true;
      return;
    }
    els.emptyState.hidden = true;

    els.cardGrid.innerHTML = visible
      .map((cmd) => buildCardHtml(cmd, q))
      .join("");

    bindCardEvents();
    if (window.hljs) {
      els.cardGrid.querySelectorAll("pre code").forEach((block) => {
        try { window.hljs.highlightElement(block); } catch {}
      });
    }

    // load more button
    els.loadMoreWrap.hidden = state.visibleCount >= total;
  }

  function buildCardHtml(cmd, term) {
    const meta = CATEGORY_META[cmd.category] || { icon: "fa-folder" };
    const isFav = cmd.favorite ? "is-favorite" : "";
    const favIcon = cmd.favorite ? "fa-solid fa-star" : "fa-regular fa-star";
    return `
      <article class="command-card" data-id="${cmd.id}" data-aos="fade-up">
        <div class="command-card__header">
          <code class="command-card__command">${highlight(cmd.command, term)}</code>
          <button class="card-action card-action--fav ${isFav}"
                  data-id="${cmd.id}"
                  aria-pressed="${cmd.favorite}"
                  aria-label="Toggle favorite for ${escapeHtml(cmd.title)}"
                  title="Favorite">
            <i class="${favIcon}"></i>
          </button>
        </div>

        <h3 class="command-card__title">${highlight(cmd.title, term)}</h3>
        <span class="command-card__category">
          <i class="fa-solid ${meta.icon}"></i> ${highlight(cmd.category, term)}
        </span>

        <p class="command-card__description">${highlight(cmd.description, term)}</p>

        <div class="command-card__example" title="${escapeHtml(cmd.example)}">
          <code>${highlight(cmd.example, term)}</code>
        </div>

        <div class="command-card__actions">
          <button class="card-action card-action--copy" data-command="${escapeHtml(cmd.command)}" aria-label="Copy command ${escapeHtml(cmd.command)}">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
          <button class="card-action card-action--expand" data-id="${cmd.id}" aria-expanded="false" aria-label="Expand details">
            <i class="fa-solid fa-chevron-down"></i> Expand
          </button>
        </div>

        <div class="command-card__expand">
          <div class="expand-section">
            <div class="expand-section__title"><i class="fa-solid fa-circle-info"></i> Detailed Explanation</div>
            <p class="expand-section__text">${escapeHtml(cmd.details || "No additional details available.")}</p>
          </div>
          ${cmd.tips && cmd.tips.length ? `
          <div class="expand-section">
            <div class="expand-section__title"><i class="fa-solid fa-lightbulb"></i> Usage Tips</div>
            <ul class="expand-section__list">
              ${cmd.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
            </ul>
          </div>` : ""}
          <div class="expand-section">
            <div class="expand-section__title"><i class="fa-solid fa-terminal"></i> Example Prompt</div>
            <div class="expand-prompt">${escapeHtml(cmd.example)}</div>
          </div>
          <div class="expand-section">
            <div class="expand-section__title"><i class="fa-solid fa-bullseye"></i> Best Use Case</div>
            <p class="expand-section__text">${escapeHtml(bestUseCase(cmd))}</p>
          </div>
        </div>
      </article>`;
  }

  function bestUseCase(cmd) {
    return `Use ${cmd.command} when you need to ${cmd.description.toLowerCase()} It shines in the ${cmd.category.toLowerCase()} domain.`;
  }

  /* ============================================================
     Card events (delegated)
     ============================================================ */
  function bindCardEvents() {
    els.cardGrid.querySelectorAll(".card-action--copy").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        ripple(e);
        const command = btn.dataset.command;
        copyToClipboard(command);
        showToast(`Copied ${command}`);
      });
    });
    els.cardGrid.querySelectorAll(".card-action--fav").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        ripple(e);
        toggleFavorite(Number(btn.dataset.id));
      });
    });
    els.cardGrid.querySelectorAll(".card-action--expand").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        ripple(e);
        const card = btn.closest(".command-card");
        const expanded = card.classList.toggle("is-expanded");
        btn.classList.toggle("is-expanded", expanded);
        btn.setAttribute("aria-expanded", String(expanded));
        btn.querySelector("i").className = expanded
          ? "fa-solid fa-chevron-up"
          : "fa-solid fa-chevron-down";
      });
    });
  }

  /* ============================================================
     Copy to clipboard
     ============================================================ */
  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback for file:// protocol
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch {
      // silently ignore
    }
  }

  /* ============================================================
     Toast
     ============================================================ */
  let toastTimer;
  function showToast(message) {
    els.toastText.textContent = message;
    els.toast.hidden = false;
    requestAnimationFrame(() => els.toast.classList.add("is-visible"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove("is-visible");
      setTimeout(() => (els.toast.hidden = true), 300);
    }, 2000);
  }

  /* ============================================================
     Ripple effect
     ============================================================ */
  function ripple(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`);
  }

  /* ============================================================
     Keyboard shortcuts
     ============================================================ */
  function bindKeyboard() {
    document.addEventListener("keydown", (e) => {
      // Ctrl/Cmd + K -> focus search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        els.searchInput.focus();
        els.searchInput.select();
      }
      // Ctrl/Cmd + D -> toggle theme
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        toggleTheme();
      }
      // Esc -> close expanded cards + blur search
      if (e.key === "Escape") {
        const expanded = document.querySelectorAll(".command-card.is-expanded");
        expanded.forEach((card) => {
          card.classList.remove("is-expanded");
          const btn = card.querySelector(".card-action--expand");
          if (btn) {
            btn.classList.remove("is-expanded");
            btn.setAttribute("aria-expanded", "false");
            const i = btn.querySelector("i");
            if (i) i.className = "fa-solid fa-chevron-down";
          }
        });
        if (document.activeElement === els.searchInput) els.searchInput.blur();
        els.sidebar.classList.remove("is-open");
        els.mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ============================================================
     Search input (debounced)
     ============================================================ */
  function bindSearch() {
    const handler = debounce((value) => {
      state.query = value;
      state.visibleCount = PAGE_SIZE;
      applyFilters();
    }, 180);
    els.searchInput.addEventListener("input", (e) => handler(e.target.value));
  }

  /* ============================================================
     Clear filters
     ============================================================ */
  function bindClearFilters() {
    els.clearFilters.addEventListener("click", () => {
      state.query = "";
      state.category = "All";
      state.sort = "alphabetical";
      state.visibleCount = PAGE_SIZE;
      els.searchInput.value = "";
      els.sortOptions.querySelectorAll(".sort-btn").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      const alpha = els.sortOptions.querySelector('[data-sort="alphabetical"]');
      if (alpha) { alpha.classList.add("is-active"); alpha.setAttribute("aria-pressed", "true"); }
      buildCategories();
      applyFilters();
    });
  }

  /* ============================================================
     Load more (lazy render)
     ============================================================ */
  function bindLoadMore() {
    els.loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += PAGE_SIZE;
      renderCards();
    });
  }

  /* ============================================================
     Mobile sidebar
     ============================================================ */
  function bindMobile() {
    els.mobileToggle.addEventListener("click", () => {
      const open = els.sidebar.classList.toggle("is-open");
      els.mobileToggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ============================================================
     Navbar shadow on scroll
     ============================================================ */
  function bindScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 8) els.navbar.classList.add("scrolled");
      else els.navbar.classList.remove("scrolled");
    }, { passive: true });
  }

  /* ============================================================
     Init
     ============================================================ */
  function init() {
    // theme
    applyTheme(getStoredTheme());

    // merge favorites into command data
    const faves = loadFavorites();
    state.commands = (window.commands || []).map((c) => ({
      ...c,
      favorite: faves.has(c.id),
    }));

    // year
    els.year.textContent = new Date().getFullYear();

    // build UI
    updateStats();
    buildCategories();
    bindSort();
    bindSearch();
    bindClearFilters();
    bindLoadMore();
    bindMobile();
    bindScroll();
    bindKeyboard();
    applyFilters();

    // AOS animations
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, offset: 40 });
    }

    // theme toggle button
    els.themeToggle.addEventListener("click", toggleTheme);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
