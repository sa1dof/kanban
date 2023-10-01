import cx from 'classnames'
import { motion } from 'framer-motion'
import { TbLayoutBoardSplit } from 'react-icons/tb'

import * as Context from 'containers'

import cls from '../../../assets/styles/board.module.scss'

interface BoardProps {
  name: string
  id: number
}

const Board = ({ name, id }: BoardProps) => {
  const { board, methods } = Context.Theme.useTheme()
  const animationVariant = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', stiffness: 100 } }

  return (
    <motion.div className={cx(cls.board, board?.id === id ? cls.active : "")} onClick={() => methods.handleBoard(name, id)} {...animationVariant}>
      <TbLayoutBoardSplit size={24} />
      {name}
    </motion.div>
  )
}

export default Board
