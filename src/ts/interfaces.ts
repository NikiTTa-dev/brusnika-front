interface IPos {
    key?: number,
    x: number,
    y: number
}

interface ISize {
    width: number,
    height: number
}

interface IGrid {
    parentSize: ISize,
    scale: number,
    pointerPos: IPos
}

interface IItem {
    size: ISize,
    text: string,
    strokeWidth: number,
    fontSize: number,
}

interface IText {
    text: string,
    fontSize: number,
    width: number,
    strokeWidth: number,
}


export type {
    IPos,
    ISize,
    IGrid,
    IItem,
    IText,
}
