import {FC} from 'react';
import {Group, Rect, Text} from "react-konva";
import Konva from "konva";
import {IText} from "../ts/interfaces.ts";
import {backgroundColor, fontColor, fontFamily} from "../ts/consts.ts";

const MyText: FC<IText> = ({text, fontSize, width, strokeWidth}) => {
    const leftMargin = 0.04 * width;
    const padding = 0.02 * width;
    const textWidth = new Konva.Text({text, fontSize, fontFamily}).getTextWidth();

    return (
        <Group x={leftMargin} y={-strokeWidth / 2}>
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
