import {IPos, ISize} from "./interfaces.ts";
import {width} from "./consts.ts";

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

const getAbsolutePos = (pos: IPos, parentPos: IPos): IPos => ({
    x: parentPos.x + pos.x,
    y: parentPos.y + pos.y
})

const getColumns = (amount: number): number => Math.ceil(Math.sqrt(amount));
const getRows = (amount: number, columns: number): number => Math.ceil(amount / columns);
const getStrokeWidth = (scale: number): number => Math.min(3 / scale, 2);
const getFontSize = (width: number): number => width / 35;

const getGap = (parentSize: ISize, columns: number): number => 0.05 * parentSize.width / columns;

const getSize = (parentSize: ISize, rows: number, columns: number, gap: number): ISize => ({
    width: (parentSize.width * 0.95 - (columns + 1) * gap) / columns,
    height: (parentSize.height * 0.95 - (rows + 1) * gap) / rows,
});

const isScaled = (scale: number, parentSize: ISize): boolean => scale * parentSize.width >= width;
const isHovered = (pointerPos: IPos, pos: IPos, size: ISize): boolean => pointerPos.x >= pos.x && pointerPos.x <= pos.x + size.width
    && pointerPos.y >= pos.y && pointerPos.y <= pos.y + size.height;

export {
    getGrid,
    getSize,
    getColumns,
    getStrokeWidth,
    getFontSize,
    getRows,
    getGap,
    getCentredPos,
    getAbsolutePos,
    isScaled,
    isHovered,
}

