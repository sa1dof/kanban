import { Link } from 'react-router-dom'
import { ColorScheme, ScrollArea } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { BiHide, BiSolidSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'

import * as Context from 'containers'

import Board from './board'

import darkLogo from '../../../assets/images/logo-dark.png'
import lightLogo from '../../../assets/images/logo-light.png'

import cls from '../../../assets/styles/sidebar.module.scss'

// const boards = [
//   { id: 1, title: 'Platform Launch' },
//   { id: 2, title: 'Marketing Plan' },
//   { id: 3, title: 'Roadmap' }
// ]

const Sidebar = () => {
  const { isSideBar, methods, boards } = Context.Theme.useTheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const animationVariant = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { type: 'spring', stiffness: 100 } }

  return (
    <div className={`${cls.sidebar} ${colorScheme === 'dark' ? cls.dark : ''} ${isSideBar ? cls.hideSideBar : ''}`}>
      <motion.div className={cls.top} {...animationVariant}>
        <Link to="/" className={cls.logo}>
          {colorScheme === 'dark' ? <img src={lightLogo} alt="" /> : <img src={darkLogo} alt="kanban-logo" />}
        </Link>
      </motion.div>
      <motion.div className={cls.boards}>
        <div className={cls.boardsCount}>ALL BOARDS ({boards.data.board.length})</div>
        <ScrollArea h="100%" offsetScrollbars type="never">
          {boards?.data.board?.map(board => (
            <Board key={board.id} name={board.name} id={board.id} />
          ))}
          <Board name="+ Create New Board" id={0} />
        </ScrollArea>
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
