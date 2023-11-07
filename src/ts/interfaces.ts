interface IRectSize {
    width: number,
    height: number
}

interface ICard {
    x: number,
    y: number,
    size: IRectSize,
    title?: string,
    scale: number,
}

export {
    IRectSize,
    ICard
}
