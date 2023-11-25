import {DATA, width} from "../ts/consts.ts";
import {FC, memo} from "react";
import {IPos, ISize} from "../ts/interfaces.ts";
import {
    getCentredPos,
    getColumns,
    getFontSize,
    getGap,
    getGrid,
    getRows,
    getSize,
    getStrokeWidth
} from "../ts/utils.ts";
import {Group} from "react-konva";
import Item from "./Item.tsx";


const draw = (data: any, parentSize: ISize, scale: number, pointerPos: IPos): any => {
    if (!data) return;

    const columns = getColumns(data.length);
    const rows = getRows(data.length, columns);
    const gap = getGap(parentSize, columns);
    const size = getSize(parentSize, rows, columns, gap);
    const grid = getGrid(rows, columns, size, gap);

    return data.map((item: any, index: number) => {
        const centredPos = getCentredPos(grid[index], parentSize, size, gap, columns, rows);
        
        return (
            <Group key={item.id} x={centredPos.x} y={centredPos.y}>
                <Item
                    text={item.text}
                    size={size}
                    strokeWidth={getStrokeWidth(size.width)}
                    fontSize={getFontSize(size.width)}
                />
                {
                    scale * parentSize.width >= width
                    && pointerPos.x >= centredPos.x && pointerPos.x < centredPos.x + parentSize.width / 2
                    && pointerPos.y >= centredPos.y && pointerPos.y < centredPos.y + parentSize.height / 2
                    && draw(item.children, size, scale, pointerPos)
                }
            </Group>
        )
    });
}

const Grid: FC = ({width, height, scale, pointerPos}) =>
    draw(DATA, {width, height}, scale, pointerPos);


export default memo(Grid);
