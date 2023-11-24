interface IRectSize {
    width: number,
    height: number
}

interface ICard {
    x?: number,
    y?: number,
    size: IRectSize,
    text: string,
    strokeWidth: number,
    fontSize: number,
    scale: number,
}

interface IText {
    text: string,
    fontSize: number,
    width: number,
    strokeWidth: number,
}


export type {
    IRectSize,
    ICard,
    IText,
}
