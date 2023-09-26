import { useEffect, useState } from 'react'
import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { HiOutlineEye } from 'react-icons/hi'
import { Store } from 'utils'

import { Theme as ThemeContext } from 'containers'

import { Hero,Navbar, Sidebar } from './components'

import cls from '../../assets/styles/home.module.scss'

const Home = () => {
  const [isSideBar, setIsSideBar] = useState<boolean>(window.innerWidth < 500)
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const handleSideBar = () => {
    setIsSideBar(!isSideBar)
    Store.set('isSideBar', `${!isSideBar}`)
  }

  useEffect(() => {
    document.body.classList.add(`${colorScheme === 'dark' ? 'dark' : 'light'}`)

    const handleResize = () => {
      setIsSideBar(window.innerWidth < 500)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [colorScheme])

  useEffect(() => {
    setIsSideBar(window.innerWidth < 500)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        isSideBar,
        methods: { handleSideBar }
      }}
    >
      <div className={`${cls.home} ${colorScheme ? cls.dark : cls.light}`}>
        <Sidebar />
        <div className={cls.flex}>
          <Navbar />
          <Hero />
        </div>
        <div className={`${cls.corner} ${isSideBar ? '' : cls.hide}`} onClick={handleSideBar}>
          <HiOutlineEye />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Home
