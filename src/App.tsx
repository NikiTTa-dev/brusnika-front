import './App.css';
import {Layer, Stage, Group} from 'react-konva';
import Branch from "./components/Branch.tsx";
import {getCentredPosX, getCentredPosY, getGrid, getSize} from "./ts/utils.ts";
import {useState} from "react";
import {height, width, DATA} from "./ts/consts.ts";


const draw = (data, parentSize, scale) => {
    if (!data) return;

    const columns = Math.ceil(Math.sqrt(data.data.length));
    const rows = data.data.length === 1 ? 1 : Math.ceil(data.data.length / columns);
    const gap = 0.0618 * parentSize.width / columns
    const size = getSize(parentSize, rows, columns, gap);
    const grid = getGrid(rows, columns, size, gap);

    return data.data.map((item, index) => (
            <Group
                key={grid[index].key}
                x={getCentredPosX(grid[index].x, parentSize.width, size.width, gap, columns)}
                y={getCentredPosY(grid[index].y, parentSize.height, size.height, gap, rows)}
            >
                <Branch
                    text={item.text}
                    scale={scale}
                    size={size}
                    strokeWidth={Math.min(size.width / (100 * scale), 1)}
                    fontSize={size.width / 30}
                />
                {draw(item?.children, size, scale)}
            </Group>
        )
    );
}

function App() {
    const [stage, setStage] = useState({scale: 1, x: 0, y: 0});

    const handleWheel = (e: any) => {
        e.evt.preventDefault();
        const scaleBy = 1.02;
        const minScale = 0.5;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
        const clampedScale = Math.max(minScale, newScale);

        setStage({
            scale: clampedScale,
            x: (stage.getPointerPosition().x / clampedScale - mousePointTo.x) * clampedScale,
            y: (stage.getPointerPosition().y / clampedScale - mousePointTo.y) * clampedScale
        });
    };


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
            <Layer>
                {draw(DATA, {width, height}, stage.scale)}
            </Layer>
        </Stage>
    )
}


export default App
