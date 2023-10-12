import { Box, createStyles } from '@mantine/core'
import cx from 'classnames'

import cls from '../../../assets/styles/task.module.scss'

interface TaskProps {
  title: string
}

const useStyles = createStyles(theme => ({
  main: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2B2C37' : '#FFFFFF'
  },
  title: {
    color: theme.colorScheme === 'dark' ? '#FFFFFF' : '#000112'
  }
}))

const Task = ({ title }: TaskProps) => {
  const { classes } = useStyles()

  return (
    <Box className={cx(cls.task, classes.main)}>
      <h3 className={cx(cls.title, classes.title)}>{title}</h3>
      <p className={cls.subtasks}>0 of 6 subtasks</p>
    </Box>
  )
}

export default Task