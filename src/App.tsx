import './App.css';
import {Layer, Stage} from 'react-konva';
import Item from "./components/Item.tsx";
import {getCardsGrid} from "./ts/utils.ts";
import {useEffect, useState} from "react";
import {height, branchSize, width, unitSize} from "./ts/consts.ts";

const branches = getCardsGrid(3, 3, branchSize, 20);

function App() {
    const unitRows = 3;
    const unitColuns = 3
    const [units, setUnits] = useState(getCardsGrid(3, 3, unitSize, 10));
    const [stage, setStage] = useState({scale: 1, x: 0, y: 0});
    const unitGap = Math.min(50 / stage.scale, 10);

    const handleWheel = e => {
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

    useEffect(() => setUnits(getCardsGrid(3, 3, unitSize, Math.min(50 / stage.scale, 10))), [stage.scale]);

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
            <Layer x={50} y={50}>
                {
                    branches.map(({key, x, y}) =>
                        <>
                            <Item key={key}
                                  x={x}
                                  y={y}
                                  size={branchSize}
                                  scale={2}
                            />
                            {
                                units.map(({key, x: x1, y: y1}) =>
                                    <Item key={key}
                                          x={(branchSize.width - ((unitColuns - 1) * unitGap + unitColuns * unitSize.width)) / 2 + x + x1}
                                          y={(branchSize.height - ((unitRows - 1) * unitGap + unitRows * unitSize.height)) / 2 + y + y1}
                                          size={unitSize}
                                          scale={Math.min(3 / stage.scale, 1)}
                                    />)
                            }
                        </>)
                }
            </Layer>
        </Stage>
    )
}

export default App
