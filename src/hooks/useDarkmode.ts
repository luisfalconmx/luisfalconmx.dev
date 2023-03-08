import { useState } from 'react'

const useDarkmode = () => {
  const actualPreference = window.localStorage.getItem('theme')
  const isDark = actualPreference === 'dark'
  const [darkmode, setDarkmode] = useState(isDark ?? false)
  const root = document.documentElement

  const toggleDarkmode = () => {
    if (darkmode) {
      window.localStorage.setItem('theme', 'light')
      root.classList.remove('dark')
      setDarkmode(false)
    } else {
      window.localStorage.setItem('theme', 'dark')
      root.classList.add('dark')
      setDarkmode(true)
    }
  }

  return { darkmode, toggleDarkmode }
}

export default useDarkmode
