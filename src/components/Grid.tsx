import {DATA} from "../ts/consts.ts";
import {FC, memo} from "react";
import {ISize} from "../ts/interfaces.ts";
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


const draw = (data: any, parentSize: ISize): any => {
    if (!data) return;

    console.log('draw')
    const columns = getColumns(data.length);
    const rows = getRows(data.length, columns);
    const gap = getGap(parentSize, columns);
    const size = getSize(parentSize, rows, columns, gap);
    const grid = getGrid(rows, columns, size, gap);

    return data.map((item: any, index: number) => {
        const centredPos = getCentredPos(grid[index], parentSize, size, gap, columns, rows);
        return (
            <Group key={grid[index].key} x={centredPos.x} y={centredPos.y}>
                <Item
                    text={item.text}
                    size={size}
                    strokeWidth={getStrokeWidth(size.width)}
                    fontSize={getFontSize(size.width)}
                />
                {draw(item.children, size)}
            </Group>
        )
    });
}

const Grid: FC<ISize> = ({width, height}) => draw(DATA, {width, height});
export default memo(Grid);
