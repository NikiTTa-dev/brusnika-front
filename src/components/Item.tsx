import {Group, Rect} from "react-konva";
import {FC} from "react";
import {ICard} from "../ts/interfaces.ts";
import {backgroundColor, borderColor} from "../ts/consts.ts";
import MyText from "./MyText.tsx";

const Item: FC<ICard> = ({text, size, strokeWidth, fontSize}) => {
    const {width, height} = size;

    return (
        <Group>
            <Rect
                width={width}
                height={height}
                stroke={borderColor}
                strokeWidth={strokeWidth}
                fill={backgroundColor}
            />
            {
                <MyText
                    text={text}
                    fontSize={fontSize}
                    width={width}
                    strokeWidth={strokeWidth}
                />
            }
        </Group>
    );
};

export default Item;
