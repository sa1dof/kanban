import { get } from 'lodash'

export const Column = (item: any)=> ({
  id: get(item, 'id') || 0,
  name: get(item, 'name') || '',
  tasks: get(item, 'tasks') || []
})

export const boardDetail = (item: any) => ({
  id: get(item, 'id') || 0,
  name: get(item, 'name') || '',
  columns: (get(item, 'columns') || []).map(Column)
})
