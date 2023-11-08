import {Group, Rect, Text} from "react-konva";
import {FC} from "react";
import {ICard} from "../ts/interfaces.ts";
import {borderColor} from "../ts/consts.ts";


const Item: FC<ICard> = (props) => {
    const {text, size, strokeWidth, fontSize, scale} = props;
    const {width, height} = size;

    return (
        <>
            <Rect
                width={width}
                height={height}
                stroke={borderColor}
                strokeWidth={strokeWidth}
            />

            {
                scale * width < 1200 &&
                <Group x={width * 0.05} y={-strokeWidth / 2}>
                    <Rect width={width * 0.4} y={-strokeWidth / 2} height={strokeWidth * 2} fill='white'/>
                    <Text x={width * 0.01} y={-fontSize} text={text} width={width * 0.4} fontSize={fontSize}/>
                </Group>
            }
        </>
    );
};

export default Item;
