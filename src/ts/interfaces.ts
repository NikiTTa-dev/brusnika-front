interface IPos {
    key?: number,
    x: number,
    y: number
}

interface ISize {
    width: number,
    height: number
}

interface ICard {
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
    ICard,
    IText,
}
