import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface ThemeDefinition {
  id: string
  name: string
  primaryHex: string
}

const STYLIZED_THEMES: ThemeDefinition[] = [
  { id: "matrix", name: "Matrix", primaryHex: "#4dff9e" },
  { id: "ocean", name: "Ocean", primaryHex: "#00f0ff" },
  { id: "dracula", name: "Dracula", primaryHex: "#bd93f9" },
  { id: "nord", name: "Nord", primaryHex: "#88c0d0" },
  { id: "amber", name: "Amber", primaryHex: "#ffb000" },
  { id: "tokyo-night", name: "Tokyo Night", primaryHex: "#7aa2f7" },
  { id: "gruvbox", name: "Gruvbox", primaryHex: "#fabd2f" },
  { id: "catppuccin", name: "Catppuccin", primaryHex: "#cba6f7" },
  { id: "monokai", name: "Monokai", primaryHex: "#a6e22e" },
]

const ICONS = {
  auto: `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6.25"/><path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor"/></svg>`,
  dark: `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 9.5a6 6 0 1 1-7-7 5 5 0 0 0 7 7z" fill="currentColor" fill-opacity="0.2"/></svg>`,
  light: `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/><line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/><line x1="11.54" y1="11.54" x2="12.95" y2="12.95"/><line x1="3.05" y1="12.95" x2="4.46" y2="11.54"/><line x1="11.54" y1="4.46" x2="12.95" y2="3.05"/></svg>`,
  palette: `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6.5" r="1" fill="currentColor"/><circle cx="8" cy="4.5" r="1" fill="currentColor"/><circle cx="11" cy="6.5" r="1" fill="currentColor"/><circle cx="11.5" cy="9.5" r="1" fill="currentColor"/><path d="M8 14.5a6.5 6.5 0 1 0-6.5-6.5c0 1.5 1 2.5 2.5 2.5h1.25a1.25 1.25 0 0 1 1.25 1.25c0 .75.5 1.75 1.5 1.75z"/></svg>`,
}

const checkmarkSvg = `<svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 5.5 4.5 8 8 2.5"/></svg>`

function ThemePicker({ displayClass }: QuartzComponentProps) {
  return (
    <div class={classNames(displayClass, "theme-menu-wrap")} id="themeMenuWrap">
      <button
        id="themeMenuBtn"
        class="theme-btn"
        type="button"
        aria-expanded="false"
        aria-haspopup="true"
        aria-label="Select website theme"
        title="Select theme"
      >
        <span
          class="theme-btn-icon"
          id="themeBtnIcon"
          dangerouslySetInnerHTML={{ __html: ICONS.palette }}
        />
        <span class="theme-btn-label" id="themeBtnLabel">
          Theme
        </span>
        <svg class="theme-chevron-svg" viewBox="0 0 10 10" width="8" height="8" aria-hidden="true">
          <polyline
            points="2.5 3.5 5 6 7.5 3.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="theme-popover" id="themeMenuPopover" role="menu" aria-label="Theme options">
        <button
          class="menu-item"
          data-theme-id="system"
          type="button"
          role="menuitem"
          aria-label="Auto detect system theme"
        >
          <span class="menu-item-icon" dangerouslySetInnerHTML={{ __html: ICONS.auto }} />
          <span class="menu-item-label">Auto (System)</span>
          <span class="menu-check" dangerouslySetInnerHTML={{ __html: checkmarkSvg }} />
        </button>
        <button
          class="menu-item"
          data-theme-id="dark"
          type="button"
          role="menuitem"
          aria-label="Dark theme"
        >
          <span class="menu-item-icon" dangerouslySetInnerHTML={{ __html: ICONS.dark }} />
          <span class="menu-item-label">Dark</span>
          <span class="menu-check" dangerouslySetInnerHTML={{ __html: checkmarkSvg }} />
        </button>
        <button
          class="menu-item"
          data-theme-id="light"
          type="button"
          role="menuitem"
          aria-label="Light theme"
        >
          <span class="menu-item-icon" dangerouslySetInnerHTML={{ __html: ICONS.light }} />
          <span class="menu-item-label">Light</span>
          <span class="menu-check" dangerouslySetInnerHTML={{ __html: checkmarkSvg }} />
        </button>

        <div class="menu-divider" role="separator" />
        <div class="menu-section-header">Themes</div>

        {STYLIZED_THEMES.map((t) => (
          <button
            class="menu-item"
            data-theme-id={t.id}
            type="button"
            role="menuitem"
            aria-label={`${t.name} theme`}
          >
            <span class="menu-item-swatch" style={`background-color: ${t.primaryHex};`} />
            <span class="menu-item-label">{t.name}</span>
            <span class="menu-check" dangerouslySetInnerHTML={{ __html: checkmarkSvg }} />
          </button>
        ))}
      </div>
    </div>
  )
}

// Executed in <head> before DOM parsing to apply theme immediately & register click handlers
ThemePicker.beforeDOMLoaded = `
(function() {
  var STORAGE_KEY = 'bunkernet_theme_v2';
  var QUARTZ_STORAGE_KEY = 'theme';
  var THEME_NAMES = {
    system: 'Auto',
    dark: 'Dark',
    light: 'Light',
    matrix: 'Matrix',
    ocean: 'Ocean',
    dracula: 'Dracula',
    nord: 'Nord',
    amber: 'Amber',
    'tokyo-night': 'Tokyo Night',
    gruvbox: 'Gruvbox',
    catppuccin: 'Catppuccin',
    monokai: 'Monokai'
  };

  var ICONS = {
    auto: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6.25"/><path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor"/></svg>',
    dark: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 9.5a6 6 0 1 1-7-7 5 5 0 0 0 7 7z" fill="currentColor" fill-opacity="0.2"/></svg>',
    light: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/><line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/><line x1="11.54" y1="11.54" x2="12.95" y2="12.95"/><line x1="3.05" y1="12.95" x2="4.46" y2="11.54"/><line x1="11.54" y1="4.46" x2="12.95" y2="3.05"/></svg>',
    palette: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6.5" r="1" fill="currentColor"/><circle cx="8" cy="4.5" r="1" fill="currentColor"/><circle cx="11" cy="6.5" r="1" fill="currentColor"/><circle cx="11.5" cy="9.5" r="1" fill="currentColor"/><path d="M8 14.5a6.5 6.5 0 1 0-6.5-6.5c0 1.5 1 2.5 2.5 2.5h1.25a1.25 1.25 0 0 1 1.25 1.25c0 .75.5 1.75 1.5 1.75z"/></svg>'
  };

  function getSystemThemeId() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function getPreference() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(QUARTZ_STORAGE_KEY);
    } catch (e) {}
    var urlTheme = new URLSearchParams(window.location.search).get('theme');
    if (urlTheme && THEME_NAMES[urlTheme]) return urlTheme;
    if (!saved || saved === 'system' || saved === 'auto') return 'system';
    return THEME_NAMES[saved] ? saved : 'system';
  }

  function applyTheme(targetId) {
    var pref = (targetId || 'system').toLowerCase().trim();
    var effectiveTheme = pref;
    if (pref === 'system' || pref === 'auto') {
      effectiveTheme = getSystemThemeId();
      try {
        localStorage.setItem(STORAGE_KEY, 'system');
        localStorage.setItem(QUARTZ_STORAGE_KEY, 'system');
      } catch (e) {}
    } else {
      try {
        localStorage.setItem(STORAGE_KEY, pref);
        localStorage.setItem(QUARTZ_STORAGE_KEY, pref);
      } catch (e) {}
    }

    document.documentElement.setAttribute('data-theme', effectiveTheme);
    document.documentElement.setAttribute('saved-theme', effectiveTheme);

    try {
      document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: effectiveTheme, preference: pref } }));
    } catch (e) {}

    updateUI(effectiveTheme, pref);
  }

  function updateUI(activeTheme, pref) {
    var isAuto = pref === 'system';
    var label = document.getElementById('themeBtnLabel');
    var iconWrap = document.getElementById('themeBtnIcon');
    var btn = document.getElementById('themeMenuBtn');

    if (label) {
      label.textContent = isAuto ? 'Auto' : (THEME_NAMES[activeTheme] || activeTheme);
    }
    if (iconWrap) {
      if (isAuto) iconWrap.innerHTML = ICONS.auto;
      else if (activeTheme === 'dark') iconWrap.innerHTML = ICONS.dark;
      else if (activeTheme === 'light') iconWrap.innerHTML = ICONS.light;
      else iconWrap.innerHTML = ICONS.palette;
    }
    if (btn) {
      btn.setAttribute('title', isAuto ? 'Theme: Auto (' + (THEME_NAMES[activeTheme] || activeTheme) + ')' : 'Theme: ' + (THEME_NAMES[activeTheme] || activeTheme));
    }

    var popover = document.getElementById('themeMenuPopover');
    if (popover) {
      var items = popover.querySelectorAll('.menu-item');
      items.forEach(function(item) {
        var id = item.getAttribute('data-theme-id');
        var selected = isAuto ? id === 'system' : id === activeTheme;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-selected', selected ? 'true' : 'false');
      });
    }
  }

  window.__positionThemePopover = function() {
    var wrap = document.getElementById('themeMenuWrap');
    var btn = document.getElementById('themeMenuBtn');
    var popover = document.getElementById('themeMenuPopover');
    if (!wrap || !btn || !popover) return;

    var btnRect = btn.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight || 800;
    var vw = window.innerWidth || document.documentElement.clientWidth || 1200;

    var spaceBelow = vh - btnRect.bottom - 16;
    var spaceAbove = btnRect.top - 16;
    var openUp = spaceBelow < 260 && spaceAbove > spaceBelow;

    if (openUp) {
      popover.classList.add('open-up');
      popover.classList.remove('open-down');
      var maxH = Math.max(160, Math.min(360, spaceAbove));
      popover.style.maxHeight = maxH + 'px';
      popover.style.top = 'auto';
      popover.style.bottom = 'calc(100% + 6px)';
    } else {
      popover.classList.add('open-down');
      popover.classList.remove('open-up');
      var maxH = Math.max(160, Math.min(360, spaceBelow));
      popover.style.maxHeight = maxH + 'px';
      popover.style.top = 'calc(100% + 6px)';
      popover.style.bottom = 'auto';
    }

    var popoverWidth = 200;
    if (btnRect.left + popoverWidth > vw - 12) {
      popover.style.left = 'auto';
      popover.style.right = '0';
      popover.style.transformOrigin = openUp ? 'bottom right' : 'top right';
    } else {
      popover.style.left = '0';
      popover.style.right = 'auto';
      popover.style.transformOrigin = openUp ? 'bottom left' : 'top left';
    }

    popover.style.maxWidth = Math.min(260, vw - 24) + 'px';
  };

  window.__toggleThemeMenu = function(e) {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    var wrap = document.getElementById('themeMenuWrap');
    var btn = document.getElementById('themeMenuBtn');
    var popover = document.getElementById('themeMenuPopover');
    if (wrap && btn && popover) {
      var willOpen = !wrap.classList.contains('is-open');
      if (willOpen) {
        if (window.__positionThemePopover) {
          window.__positionThemePopover();
        }
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        var selected = popover.querySelector('.menu-item.is-selected');
        if (selected) {
          setTimeout(function() {
            try {
              selected.scrollIntoView({ block: 'nearest' });
            } catch (err) {}
          }, 30);
        }
      } else {
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    }
  };

  window.__closeThemeMenu = function() {
    var wrap = document.getElementById('themeMenuWrap');
    var btn = document.getElementById('themeMenuBtn');
    if (wrap && wrap.classList.contains('is-open')) {
      wrap.classList.remove('is-open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  };

  window.__selectTheme = function(themeId, e) {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    applyTheme(themeId);
    window.__closeThemeMenu();
  };

  window.__refreshThemeUI = function() {
    var pref = getPreference();
    var activeTheme = pref === 'system' ? getSystemThemeId() : pref;
    updateUI(activeTheme, pref);
  };

  // Delegated click handling registered once at document level
  if (!window.__themePickerInitialized) {
    window.__themePickerInitialized = true;

    document.addEventListener('click', function(e) {
      var target = e.target;
      if (!target || !target.closest) return;

      var btn = target.closest('#themeMenuBtn, .theme-btn');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        window.__toggleThemeMenu();
        return;
      }

      var menuItem = target.closest('.theme-popover .menu-item');
      if (menuItem) {
        e.preventDefault();
        e.stopPropagation();
        var themeId = menuItem.getAttribute('data-theme-id');
        if (themeId) {
          window.__selectTheme(themeId);
        }
        return;
      }

      var wrapEl = document.getElementById('themeMenuWrap');
      if (wrapEl && wrapEl.classList.contains('is-open')) {
        if (!wrapEl.contains(target)) {
          window.__closeThemeMenu();
        }
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        window.__closeThemeMenu();
      }
    });

    window.addEventListener('resize', function() {
      if (window.__closeThemeMenu) window.__closeThemeMenu();
    });

    if (window.matchMedia) {
      var media = window.matchMedia('(prefers-color-scheme: dark)');
      var onSysChange = function() {
        var saved = null;
        try {
          saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(QUARTZ_STORAGE_KEY);
        } catch (e) {}
        if (!saved || saved === 'system' || saved === 'auto') {
          window.__selectTheme('system');
        }
      };
      if (media.addEventListener) media.addEventListener('change', onSysChange);
      else if (media.addListener) media.addListener(onSysChange);
    }
  }

  // Immediate theme initialization on page load before DOM render
  var initialPref = getPreference();
  var initialEffective = initialPref === 'system' ? getSystemThemeId() : initialPref;
  document.documentElement.setAttribute('data-theme', initialEffective);
  document.documentElement.setAttribute('saved-theme', initialEffective);
})();
`

ThemePicker.afterDOMLoaded = `
(function() {
  if (window.__refreshThemeUI) {
    window.__refreshThemeUI();
  }

  // Hook into Quartz lifecycle events for SPA navigation
  document.addEventListener('nav', function() {
    if (window.__refreshThemeUI) window.__refreshThemeUI();
    if (window.__closeThemeMenu) window.__closeThemeMenu();
  });
  document.addEventListener('render', function() {
    if (window.__refreshThemeUI) window.__refreshThemeUI();
  });
})();
`

ThemePicker.css = `
.theme-menu-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  z-index: 1000;
  margin: 0;
}

.theme-menu-wrap.is-open {
  z-index: 99999;
}

.theme-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 8px 0 7px;
  background: var(--lightgray);
  border: 1px solid var(--gray);
  border-radius: 6px;
  font-family: var(--bodyFont, inherit);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1px;
  color: var(--darkgray);
  cursor: pointer;
  outline: none;
  transition: all 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.theme-btn:hover {
  background: var(--light);
  border-color: var(--secondary);
  color: var(--dark);
}

.theme-btn:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 2px;
}

.theme-btn:active {
  transform: scale(0.96);
}

.theme-menu-wrap.is-open .theme-btn {
  background: var(--light);
  border-color: var(--secondary);
  color: var(--secondary);
}

.theme-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: currentColor;
}

.theme-btn-label {
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1;
}

.theme-chevron-svg {
  display: inline-block;
  margin-left: 1px;
  color: currentColor;
  opacity: 0.7;
  transition: transform 0.15s ease;
}

.theme-menu-wrap.is-open .theme-chevron-svg {
  transform: rotate(180deg);
}

.theme-popover {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 185px;
  max-width: min(260px, calc(100vw - 24px));
  max-height: min(340px, calc(100vh - 140px));
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  background: var(--light);
  border: 1px solid var(--gray);
  border-radius: 8px;
  box-shadow: 0 14px 34px -4px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--lightgray);
  padding: 5px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
  pointer-events: none;
  transform-origin: top left;
  transition: opacity 0.16s ease, transform 0.16s ease;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  scrollbar-width: thin;
  scrollbar-color: var(--gray) transparent;
}

.theme-popover.open-up {
  top: auto;
  bottom: calc(100% + 6px);
  transform-origin: bottom left;
  transform: translateY(4px) scale(0.97);
}

.theme-popover::-webkit-scrollbar {
  width: 5px;
}

.theme-popover::-webkit-scrollbar-track {
  background: transparent;
}

.theme-popover::-webkit-scrollbar-thumb {
  background: var(--gray);
  border-radius: 4px;
}

.theme-popover::-webkit-scrollbar-thumb:hover {
  background: var(--secondary);
}

.theme-menu-wrap.is-open .theme-popover {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
  pointer-events: auto !important;
}

.menu-divider {
  height: 1px;
  background: var(--lightgray);
  margin: 4px 2px;
  flex-shrink: 0;
}

.menu-section-header {
  font-family: var(--headerFont, inherit);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--gray);
  padding: 4px 8px 2px;
  flex-shrink: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  min-height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  font-family: var(--bodyFont, inherit);
  font-size: 12px;
  font-weight: 500;
  color: var(--darkgray);
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}

.menu-item:hover {
  background: var(--lightgray);
  color: var(--dark);
}

.menu-item:focus-visible {
  background: var(--lightgray);
  outline: 2px solid var(--secondary);
}

.menu-item.is-selected {
  background: var(--highlight);
  color: var(--secondary);
  font-weight: 600;
}

.menu-item-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: currentColor;
}

.menu-item-swatch {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-item-label {
  flex-grow: 1;
  white-space: nowrap;
}

.menu-check {
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: var(--secondary);
  flex-shrink: 0;
}

.menu-item.is-selected .menu-check {
  opacity: 1;
}

@media (max-width: 800px) {
  .theme-popover {
    left: auto;
    right: 0;
    transform-origin: top right;
    max-height: min(300px, calc(100vh - 120px));
  }
  .theme-popover.open-up {
    transform-origin: bottom right;
  }
}
`

export default (() => ThemePicker) satisfies QuartzComponentConstructor
