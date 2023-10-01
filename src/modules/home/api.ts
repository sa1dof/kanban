import { http } from 'services'

import { Types } from '.'

export const Board = {
  List: () => http.get<Types.IApi.Board.List.Response>('/board/list'),
  Single: ({ boardID }: Types.IApi.Board.Single.Request) => http.get<Types.IApi.Board.Single.Response>(`/board/${boardID}`)
}
