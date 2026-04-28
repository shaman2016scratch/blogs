import { useEffect, useRef } from 'react'
import theme1 from './main.css?url'
import theme2 from './main2.css?url'

function ThemeManager() {
  const currentLink = useRef(null)

  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem('blogs8787-theme')
      let href

      if (theme === 'theme1') {
        href = theme1
      } else if (theme === 'theme2') {
        href = theme2
      }

      if (currentLink.current) {
        document.head.removeChild(currentLink.current)
      }

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)

      currentLink.current = link
    };

    updateTheme()

    window.addEventListener('storage', updateTheme)

    return () => {
      window.removeEventListener('storage', updateTheme)
      if (currentLink.current) {
        document.head.removeChild(currentLink.current)
      }
    }
  }, [])

  return null
}

export default ThemeManager;