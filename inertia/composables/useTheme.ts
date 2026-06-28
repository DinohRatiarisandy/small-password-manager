import { ref, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  const setTheme = (value: string) => {
    theme.value = value

    document.documentElement.setAttribute('data-theme', value)

    localStorage.setItem('theme', value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')

    if (saved) {
      setTheme(saved)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setTheme(prefersDark ? 'dark' : 'light')
  })

  return {
    theme,
    setTheme,
  }
}
