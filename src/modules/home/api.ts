import { http } from 'services'

import { Types } from '.'

export const Board = {
  List: () => http.get<Types.IApi.Board.List.Response>('/board/list'),
  Single: ({ boardID }: Types.IApi.Board.Single.Request) => http.get<Types.IApi.Board.Single.Response>(`/board/${boardID}`)
}
export const Column = {
  List: () => http.get<Types.IApi.Column.List.Response>('/board/list'),
  Single: ({ boardID }: Types.IApi.Column.Single.Request) => http.get<Types.IApi.Column.Single.Response>(`/board/${boardID}`)
}