import {FC} from 'react';
import {Group, Rect, Text} from "react-konva";
import Konva from "konva";
import {IText} from "../ts/interfaces.ts";
import {backgroundColor, fontColor, fontFamily} from "../ts/consts.ts";

const MyText: FC<IText> = ({x, text, fontSize, width, strokeWidth}) => {
    const padding = 0.03 * width;
    const textWidth = new Konva.Text({text, fontSize, fontFamily}).getTextWidth();

    return (
        <Group x={x} y={-strokeWidth / 2}>
            <Rect
                y={-strokeWidth / 4}
                width={textWidth + 2 * padding}
                height={strokeWidth * 2}
                fill={backgroundColor}
            />
            <Text
                x={padding}
                y={-fontSize / 2}
                text={text}
                fontSize={fontSize}
                fontFamily={fontFamily}
                fill={fontColor}
            />
        </Group>
    );
};

export default MyText;
