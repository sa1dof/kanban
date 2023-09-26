import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { BiHide, BiSolidSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'

import * as Context from 'containers'

import darkLogo from '../../../assets/images/logo-dark.png'
import lightLogo from '../../../assets/images/logo-light.png'

import cls from '../../../assets/styles/sidebar.module.scss'

const Sidebar = () => {
  const { isSideBar, methods } = Context.Theme.useTheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })

  const animationVariant = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { type: 'spring', stiffness: 100 } }

  return (
    <div className={`${cls.sidebar} ${colorScheme === 'dark' ? cls.dark : ''} ${isSideBar ? cls.hideSideBar : ''}`}>
      <motion.div className={cls.top} {...animationVariant}>
        <a href="/" className={cls.logo}>
          {colorScheme === 'dark' ? <img src={lightLogo} alt="" /> : <img src={darkLogo} alt="" />}
        </a>
        <div className={cls.boardsCount}>ALL BOARDS (0)</div>
      </motion.div>
      <motion.div className={cls.footer} {...animationVariant}>
        <div className={cls.panel}>
          <BiSolidSun className={cls.icon} />
          <div
            className={`${cls.checkbox} ${colorScheme === 'dark' ? cls.active : ''}`}
            onClick={() => {
              setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
            }}
          >
            <div> </div>
          </div>
          <HiMoon className={cls.icon} />
        </div>
        <div className={cls.hideSideBar} onClick={methods.handleSideBar}>
          <BiHide className={cls.icon} />
          <span>Hide Sidebar</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar
