import { get } from 'lodash'

export const Column = (item: any) => ({
  id: get(item, 'id') || 0,
  name: get(item, 'name') || '',
  tasks: get(item, 'tasks') || []
})

export const Columns = (item: any) => ({
  columns: get(item, 'board_detail.columns') || []
})