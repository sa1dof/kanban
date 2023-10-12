export namespace IEntity {
  export interface Boards {
    data: {
      board: Board[]
    }
    paginator: {
      count: number
      next: null | number
      previous: null | number
    }
  }
  export interface Column {
    id: number
    name: string
    tasks: []
  }
  export interface Board {
    id: number
    name: string
    columns: Column[]
  }
  export interface TBoardContext {
    name: string
    id: number
  }
}

export namespace IContext {
  export interface Context {
    boards: IEntity.Boards
    isSideBar: boolean
    board: IEntity.TBoardContext | null
    columns: IEntity.Column[] | null
    methods: {
      handleSideBar: () => void
      handleBoard: (name: string, id: number) => void
    }
  }
}

export namespace IApi {
  export namespace Board {
    export namespace List {
      export interface Request {}
      export type Response = IEntity.Boards
    }
    export namespace Single {
      export interface Request {
        boardID: number | null
      }
      export interface Response {
        message: string | null
        status: string
        data: {
          boardDetail: {
            id: number
            name: string
            columns: IEntity.Column[]
          }
        }
      }
    }
    export namespace createBoard {
      export interface Request {
        name: string,
        columns: string[]
      }
      export interface Response {
        id: number
        name: string
      }
    }
  }
  export namespace Column {
    export namespace List {
      export interface Request {}
      export type Response = IEntity.Column[]
    }
    export namespace Single {
      export interface Request {
        boardID: number | null
      }
      export type Response = IEntity.Column
    }
  }
}

export namespace IQuery {
  export namespace Board {
    export interface List {
      isLoading: boolean
      boards: IEntity.Boards
    }
    export interface Single {
      id: number
      name: string
      columns: IEntity.Column[]
    }
  }
  export namespace Column {
    export interface List {
      isLoading: boolean
      columns: IEntity.Column[]
    }
  }
}