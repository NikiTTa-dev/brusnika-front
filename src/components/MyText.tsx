import {FC} from 'react';
import {Group, Rect, Text} from "react-konva";
import Konva from "konva";
import {IText} from "../ts/interfaces.ts";

const MyText: FC<IText> = ({text, fontSize, width, strokeWidth}) => {
    const leftMargin = 0.05 * width;
    const padding = 0.02 * width;
    const textWidth = new Konva.Text({
        text: text,
        fontSize: fontSize,
    }).getTextWidth();


    return (
        <Group x={leftMargin} y={-strokeWidth / 2}>
            <Rect
                y={-strokeWidth / 2}
                width={textWidth + 2 * padding}
                height={strokeWidth * 2}
                fill='white'
            />
            <Text
                x={padding}
                y={-fontSize / 2}
                text={text}
                fontSize={fontSize}
            />
        </Group>
    );
};

export default MyText;
