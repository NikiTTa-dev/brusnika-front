import {Group, Text} from "react-konva";
import {FC} from "react";
import {IInfo} from "../ts/interfaces.ts";
import {fontColor, fontFamily, secondaryFontColor} from "../ts/consts.ts";


const PositionInfo: FC<IInfo> = ({x, content, size, fontSize}) => {
    const {height} = size;


    return (
        <Group x={x} y={0.05 * height}>
            {content.type &&
                <>
                    <Text
                        text='ФИО'
                        fontSize={0.8 * fontSize}
                        fill={secondaryFontColor}
                        fontFamily={fontFamily}
                    />
                    <Text
                        y={0.08 * height}
                        text='Тип работы'
                        fontSize={0.8 * fontSize}
                        fill={secondaryFontColor}
                        fontFamily={fontFamily}
                    />
                </>
            }
            <Text
                y={0.03 * height}
                text={
                    content.firstName
                        ? `${content.firstName} ${content.lastName} ${content.patronymic}`
                        : content.type
                }
                fontSize={fontSize}
                fill={fontColor}
                fontFamily={fontFamily}
            />
            <Text
                y={0.11 * height}
                text={content.workType}
                fontSize={fontSize}
                fill={fontColor}
                fontFamily={fontFamily}
            />
        </Group>
    );
};

export default PositionInfo;
