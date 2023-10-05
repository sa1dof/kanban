import { useEffect, useState } from 'react'
import { error } from 'utils/alert'

import { Api, Mappers, Types } from '..'

export const useBoard = (boardID: number) => {
  const [state, setState] = useState<Types.IQuery.Board.Single>({
    boardDetail: {
      id: 0,
      name: '',
      columns: []
    }
  })

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Board.Single({ boardID })
        const boardDetail = Mappers.boardDetail(data);
        
        setState({ boardDetail });
      } catch (err: any) {
        error(err?.message)
        setState({
          boardDetail: {
            id: 0,
            name: '',
            columns: []
          }
        })
      }
    }

    request()
  }, [])
  return state
}
