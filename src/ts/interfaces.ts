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
    content: any,
    strokeWidth: number,
    fontSize: number,
    type: string
}

interface IInfo {
    x: number,
    size: ISize,
    content: any,
    strokeWidth: number,
    fontSize: number
}

interface IText {
    x: number,
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
    IInfo,
}
