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
    boards: IEntity.Boards;
    isSideBar: boolean;
    board: IEntity.TBoardContext | null;
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
      export type Response = IEntity.Board
    }
  }
}

export namespace IQuery {
  export namespace Board {
    export interface List {
      isLoading: boolean
      boards: IEntity.Boards
    }
  }
}
