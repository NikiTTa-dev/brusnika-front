import {IRectSize} from "./interfaces.ts";

const getCardsGrid = (rows: number, columns: number, size: IRectSize, gap: number) => {
    const cards = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const x = col * (size.width + gap);
            const y = row * (size.height + gap);
            cards.push({key: row - col, x, y});
        }
    }
    return cards
};


const getRelativeSize = (parentSize: IRectSize, part: number): IRectSize =>
    ({
        width: parentSize.width * part,
        height: parentSize.height * part
    });


export {
    getCardsGrid,
    getRelativeSize
}

