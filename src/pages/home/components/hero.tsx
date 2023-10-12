import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import * as Context from '../../../containers'

import Column from './column'

import cls from '../../../assets/styles/hero.module.scss'

const Hero = () => {
  const { isSideBar, columns } = Context.Theme.useTheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme' })

  return (
    <div className={`${cls.hero} ${isSideBar ? cls.hideSideBar : ''} ${colorScheme === 'dark' ? cls.dark : ''}`}>
      {!columns || columns.length === 0 ? (
        <div className={cls.notColumn}>
          <p className={cls.text}>This board is empty. Create a new column to get started.</p>
          <button className={cls.btn}>+ Add New Column</button>
        </div>
      ) : (
        <div className={cls.columns}>
          {columns?.map(column => (
            <Column key={column.id} name={column.name} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Hero