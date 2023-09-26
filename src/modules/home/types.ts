export namespace IEntity {
  export interface Column {
    id: number
    name: string
    board: number
  }
  export interface Board {
    id: number
    name: string
    columns: Column[]
  }
  export interface TBoardContext {
    title: string
    id: number
  }
}

export namespace IContext {
  export interface SideBar {
    isSideBar: boolean
    methods: {
      handleSideBar: () => void
    }
  }
}
