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
    const fontSize = getFontSize(size.width);
    const strokeWidth = getStrokeWidth(scale);

    return data.map((item: any, index: number) => {
        const pos = getCentredPos(grid[index], parentSize, size, gap, columns, rows);
        const absolutePos = getAbsolutePos(pos, parentPos);
        let height = size.height;

        return (
            <Group key={item.id} x={pos.x} y={pos.y}>
                <Item
                    content={item}
                    size={{width: size.width, height}}
                    strokeWidth={strokeWidth}
                    fontSize={fontSize}
                    type={item.type}
                />
                {
                    isScaled(scale, parentSize) && isHovered(pointerPos, absolutePos, size)
                    && draw(item?.positions ? [...item.positions, ...item.childrenGroups] : item.childrenGroups, size, scale, pointerPos, absolutePos)
                }
            </Group>
        )
    });
}

const Grid: FC<IGrid> = ({data, parentSize, scale, pointerPos}) =>
    draw(data, parentSize, scale, pointerPos, {x: 0, y: 0});


export default memo(Grid);
