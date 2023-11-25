import {Layer, Stage} from 'react-konva';
import {height, width} from "./ts/consts.ts";
import {useState} from "react";
import Grid from "./components/Grid.tsx";


function App() {
    const [stage, setStage] = useState({scale: 1, x: 0, y: 0});

    const handleWheel = (e: any): void => {
        e.evt.preventDefault();
        const scaleBy = 1.04;
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
        <Stage width={width}
               height={height}
               draggable
               onWheel={handleWheel}
               scaleX={stage.scale}
               scaleY={stage.scale}
               x={stage.x}
               y={stage.y}
        >
            <Layer>
                <Grid width={width} height={height}/>
            </Layer>
        </Stage>
    )
}


export default App
