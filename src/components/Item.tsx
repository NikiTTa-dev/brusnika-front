import {Group, Rect} from "react-konva";
import {FC} from "react";
import {IItem} from "../ts/interfaces.ts";
import {
    backgroundColor,
    borderColor,
    borderColorEmployee,
    borderColorVacancy,
    Type
} from "../ts/consts.ts";
import MyText from "./MyText.tsx";
import PositionInfo from "./PositionInfo.tsx";

const Item: FC<IItem> = ({content, size, strokeWidth, fontSize, type}) => {
    const {width, height} = size;
    const leftTextMargin = 0.04 * width;

    return (
        <Group>
            <Rect
                width={width}
                height={height}
                stroke={type === Type.Employee ? borderColorEmployee : type === Type.Vacancy ? borderColorVacancy : borderColor}
                strokeWidth={strokeWidth}
                fill={backgroundColor}
            />
            <MyText
                x={leftTextMargin}
                text={content.name ?? content.roleName}
                fontSize={fontSize}
                width={width}
                strokeWidth={strokeWidth}
            />
            <PositionInfo
                x={leftTextMargin}
                content={content}
                size={size}
                strokeWidth={strokeWidth}
                fontSize={fontSize}
            />
        </Group>
    );
};

export default Item;
