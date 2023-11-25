import {IPos, ISize} from "./interfaces.ts";

const getGrid = (rows: number, columns: number, size: ISize, gap: number): IPos[] => {
    const grid = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            grid.push({
                key: row - col,
                x: col * (size.width + gap),
                y: row * (size.height + gap)
            });
        }
    }
    return grid
};

const getCentredPos = (pos: IPos, parentSize: ISize, childSize: ISize, gap: number, columns: number, rows: number): IPos => ({
    x: (parentSize.width - ((columns - 1) * gap + columns * childSize.width)) / 2 + pos.x,
    y: (parentSize.height - ((rows - 1) * gap + rows * childSize.height)) / 2 + pos.y
});

const getColumns = (amount: number): number => Math.ceil(Math.sqrt(amount));
const getRows = (amount: number, columns: number): number => Math.ceil(amount / columns);
const getStrokeWidth = (width: number): number => Math.min(width / 60, 1);
const getFontSize = (width: number): number => width / 35;

const getGap = (parentSize: ISize, columns: number): number => 0.05 * parentSize.width / columns;

const getSize = (parentSize: ISize, rows: number, columns: number, gap: number): ISize => ({
    width: (parentSize.width - (columns + 1) * 1.5 * gap) / columns,
    height: (parentSize.height - (rows + 1) * 1.5 * gap) / rows,
});

export {
    getGrid,
    getSize,
    getColumns,
    getStrokeWidth,
    getFontSize,
    getRows,
    getGap,
    getCentredPos
}

