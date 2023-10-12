import { Flex, ScrollArea } from '@mantine/core'

import Task from './task'

import cls from '../../../assets/styles/column.module.scss'

interface ColumnProps {
  name: string
}

const Column = ({ name }: ColumnProps) => {
  const hello = 'hello'

  return (
    <ScrollArea h="100%" offsetScrollbars type="never" className={cls.column}>
      <p className={cls.title}>{name} (3)</p>
      <Flex display="flex" direction="column" gap={20}>
        <Task title="Add account management endpoints" />
        <Task title="Build UI for search" />
        <Task title="Create paper prototypes and conduct 10 usability tests with potential customers" />
        <Task title="Research pricing points of various competitors and trial different business models" />
        <Task title="Add account management endpoints" />
        <Task title="Add account management" />
        <Task title="Add account management management management" />
      </Flex>
    </ScrollArea>
  )
}

export default Column