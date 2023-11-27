import {DATA} from "../ts/consts.ts";
import {FC, memo} from "react";
import {IGrid, IPos, ISize} from "../ts/interfaces.ts";
import {
    getAbsolutePos,
    getCentredPos,
    getColumns,
    getFontSize,
    getGap,
    getGrid,
    getRows,
    getSize,
    getStrokeWidth, isHovered, isScaled
} from "../ts/utils.ts";
import {Group} from "react-konva";
import Item from "./Item.tsx";


const draw = (data: any, parentSize: ISize, scale: number, pointerPos: IPos, parentPos: IPos): any => {
    if (!data) return;

    const columns = getColumns(data.length);
    const rows = getRows(data.length, columns);
    const gap = getGap(parentSize, columns);
    const size = getSize(parentSize, rows, columns, gap);
    const grid = getGrid(rows, columns, size, gap);

    return data.map((item: any, index: number) => {
        const pos = getCentredPos(grid[index], parentSize, size, gap, columns, rows);
        const absolutePos = getAbsolutePos(pos, parentPos);

        return (
            <Group key={item.id} x={pos.x} y={pos.y}>
                <Item
                    text={item.text}
                    size={size}
                    strokeWidth={getStrokeWidth(size.width)}
                    fontSize={getFontSize(size.width)}
                />
                {
                    isScaled(scale, parentSize) && isHovered(pointerPos, absolutePos, size)
                    && draw(item.children, size, scale, pointerPos, absolutePos)
                }
            </Group>
        )
    });
}

const Grid: FC<IGrid> = ({parentSize, scale, pointerPos}) =>
    draw(DATA, parentSize, scale, pointerPos, {x: 0, y: 0});


export default memo(Grid);
