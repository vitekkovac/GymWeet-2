export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'gymweet-theme'
const DEFAULT_THEME: Theme = 'light'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getStoredTheme(): Theme | null {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  return isTheme(storedTheme) ? storedTheme : null
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function initializeTheme(): Theme {
  const theme = getStoredTheme() ?? DEFAULT_THEME

  applyTheme(theme)

  return theme
}

export function setTheme(theme: Theme): void {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}