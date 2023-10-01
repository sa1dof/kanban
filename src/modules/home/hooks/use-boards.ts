import { useEffect, useState } from 'react'
import { error } from 'utils/alert'

import { Api, Types } from '..'

export const useBoards = () => {
  const [state, setState] = useState<Types.IQuery.Board.List>({
    isLoading: true,
    boards: {
      paginator: {
        count: 0,
        next: 0,
        previous: 0
      },
      data: {
        board: []
      }
    }
  })

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Board.List();

        setState({ boards: data, isLoading: false })
      } catch (err: any) {
        error(err?.message)
        setState({
          isLoading: true,
          boards: {
            paginator: {
              count: 0,
              next: 0,
              previous: 0
            },
            data: {
              board: []
            }
          }
        })
      }
    }

    request()
  }, [])
  return state
}
