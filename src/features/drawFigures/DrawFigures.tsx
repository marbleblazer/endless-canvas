import { useGlobalContext } from 'app/App';
import { Circle, Rect, Star } from 'react-konva';

export default function DrawFigures() {
    const [state] = useGlobalContext();

    return (
        <>
            {state.figures.map(({ id, type, x, y }) => {
                switch (type) {
                    case 'Circle':
                        return (
                            <Circle
                                key={id}
                                draggable={state.mode === 'cursor'}
                                radius={40}
                                x={x}
                                y={y}
                                fill='#abc0ca'
                                stroke={'gray'}
                                strokeWidth={1}
                            />
                        );
                    case 'Rectangle':
                        return (
                            <Rect
                                key={id}
                                draggable={state.mode === 'cursor'}
                                x={x}
                                y={y}
                                fill='#C7135B'
                                width={100}
                                height={70}
                                stroke={'gray'}
                                strokeWidth={1}
                            />
                        );
                    case 'Star':
                        return (
                            <Star
                                key={id}
                                draggable={state.mode === 'cursor'}
                                x={x}
                                y={y}
                                innerRadius={20}
                                outerRadius={50}
                                numPoints={5}
                                fill='#D29397'
                                stroke={'gray'}
                                strokeWidth={1}
                            />
                        );
                    default:
                        console.error('Invalid type');
                }
            })}
        </>
    );
}
