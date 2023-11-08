import './App.css';
import {Layer, Stage, Group} from 'react-konva';
import Item from "./components/Item.tsx";
import {getCentredPosX, getCentredPosY, getGrid} from "./ts/utils.ts";
import {useEffect, useState} from "react";
import {height, branchSize, width, unitSize} from "./ts/consts.ts";


function App() {
    const [units, setUnits] = useState(getGrid(1, 3, unitSize, 10));
    const [branches, setBranches] = useState(getGrid(1, 3, branchSize, 20));
    const [stage, setStage] = useState({scale: 1, x: 0, y: 0});

    const handleWheel = (e: any) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setStage({
            scale: newScale,
            x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
            y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale
        });
    };

    useEffect(() => {
        setUnits(getGrid(2, 2, unitSize, Math.min(50 / stage.scale, 10)));
        setBranches(getGrid(2, 2, branchSize, Math.min(80 / stage.scale, 20)));

    }, [stage.scale]);

    return (
        <Stage
            width={width}
            height={height}
            draggable
            onWheel={handleWheel}
            scaleX={stage.scale}
            scaleY={stage.scale}
            x={stage.x}
            y={stage.y}
        >
            <Layer x={getCentredPosX(0, width, branchSize.width, 20, 2).x}
                   y={getCentredPosY(0, height, branchSize.height, 20, 2).y}
            >
                {
                    branches.map(({key, x, y}) =>
                        <Group x={x} y={y} key={key}>
                            <Item
                                size={branchSize}
                                strokeWidth={Math.min(5 / stage.scale, 2)}
                                text='Филиал'
                                fontSize={branchSize.width / 30}
                                scale={stage.scale}
                            />
                            {
                                units.map(({key, x: x1, y: y1}) =>
                                    <Group
                                        key={key}
                                        x={getCentredPosX(x1, branchSize.width, unitSize.width, 10, 2)}
                                        y={getCentredPosY(y1, branchSize.height, unitSize.height, 10, 2)}
                                    >
                                        <Item
                                            scale={stage.scale}
                                            size={unitSize}
                                            strokeWidth={Math.min(3 / stage.scale, 1)}
                                            text='Подразделение'
                                            fontSize={unitSize.width / 30}
                                        />
                                    </Group>
                                )
                            }
                        </Group>
                    )
                }
            </Layer>
        </Stage>
    )
}

export default App
