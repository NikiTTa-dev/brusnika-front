import {Rect} from "react-konva";
import {FC} from "react";
import {ICard} from "../ts/interfaces.ts";
import {borderColor} from "../ts/consts.ts";


const Item: FC<ICard> = ({x, y, size, scale}) => {
    return (
        <>
            <Rect
                x={x}
                y={y}
                width={size.width}
                height={size.height}
                stroke={borderColor}
                strokeWidth={scale}
            />
            {/*<Rect*/}
            {/*    x={x + 10} y={y - 6}*/}
            {/*    width={100}*/}
            {/*    height={20}*/}
            {/*    fill='white'*/}
            {/*/>*/}
        </>
    );
};

export default Item;
