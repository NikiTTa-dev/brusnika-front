import {Group, Rect} from "react-konva";
import {FC} from "react";
import {ICard} from "../ts/interfaces.ts";
import {borderColor} from "../ts/consts.ts";
import MyText from "./MyText.tsx";


const Branch: FC<ICard> = (props) => {
    const {
        text,
        size,
        strokeWidth,
        fontSize
    } = props;
    const {width, height} = size;


    return (
        <Group>
            <Rect
                width={width}
                height={height}
                stroke={borderColor}
                strokeWidth={strokeWidth}
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

export default Branch;
