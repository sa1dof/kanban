import { Avatar, ColorScheme, Menu } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react'

import { useAuth } from 'modules/auth/context'

import * as Context from '../../../containers'

import cls from '../../../assets/styles/navbar.module.scss'

const Navbar = () => {
  const { user } = useAuth()
  const { isSideBar } = Context.Theme.useTheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })
  const animationVariant = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', stiffness: 100 } }

  return (
    <div className={`${cls.navbar} ${isSideBar ? cls.hideSideBar : ''} ${colorScheme === 'dark' ? cls.dark : ''}`}>
      <div className={cls.title}>No Selected Board</div>
      <nav className={cls.nav}>
        <Menu shadow="md" width="max-content" position="bottom-end">
          <Menu.Target>
            <Avatar sx={{ cursor: 'pointer' }} radius="lg" alt="it's me" size="md" children="H" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label sx={{ fontSize: 15 }} color="lime">
              Hi 👋🏻 {user?.email}
            </Menu.Label>
            <Menu.Divider />
            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
            <Menu.Item icon={<IconUser size={14} />}>Profile</Menu.Item>
            <Menu.Item color="red" icon={<IconLogout size={14} />}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </nav>
    </div>
  )
}

export default Navbar
