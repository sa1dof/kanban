import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import * as Context from '../../../containers'

import cls from '../../../assets/styles/hero.module.scss'

const Hero = () => {
  const { isSideBar } = Context.Theme.useTheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' });

  return (
    <div className={`${cls.hero} ${isSideBar ? cls.hideSideBar : ''} ${colorScheme === 'dark' ? cls.dark : ''}`} />
  )
}

export default Hero
