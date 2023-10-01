import { useEffect, useState } from 'react'
import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { HiOutlineEye } from 'react-icons/hi'
import { Store } from 'utils'

import { Types } from 'modules/home'
import { useBoards } from 'modules/home/hooks'

import { Theme as ThemeContext } from 'containers'

import { Hero, Navbar, Sidebar } from './components'

import cls from '../../assets/styles/home.module.scss'

const Home = () => {
  const sidebar = Store.get('isSideBar')
  const [isSideBar, setIsSideBar] = useState<boolean>(!sidebar)
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const [board, setBoard] = useState<Types.IEntity.TBoardContext | null>(null)
  const { boards, isLoading } = useBoards()

  const handleSideBar = () => {
    setIsSideBar(!isSideBar)
    Store.set('isSideBar', `${!isSideBar}`)
  }

  const handleBoard = (name: string, id: number) => {
    const newBoard: Types.IEntity.TBoardContext = { name, id }

    setBoard(newBoard)
    Store.set('board', JSON.stringify(newBoard))
  }

  useEffect(() => {
    const storedBoard = Store.get('board')

    if (storedBoard !== null) {
      setBoard(JSON.parse(storedBoard) as Types.IEntity.TBoardContext)
    }
  })

  return (
    <ThemeContext.Provider
      value={{
        boards,
        isSideBar,
        board,
        methods: { handleSideBar, handleBoard }
      }}
    >
      <div className={`${cls.home} ${colorScheme ? cls.dark : cls.light}`}>
        <Sidebar />
        <div className={cls.flex}>
          <Navbar />
          <Hero />
        </div>
        <div
          className={`${cls.corner} ${isSideBar ? '' : cls.hide}`}
          onClick={() => {
            handleSideBar()
          }}
        >
          <HiOutlineEye />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Home
