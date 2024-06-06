import DrawFigures from 'features/drawFigures/DrawFigures';
import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import useDebounce from 'shared/hooks/useDebounce';

type TSize = {
    width: number;
    height: number;
};

export default function DrawAreaStage() {
    const [size, setSize] = useState<TSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const debouncedSize: TSize = useDebounce<TSize>(size, 200);

    useEffect(() => {
        const checkSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', () =>
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        );
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    return (
        <Stage
            width={debouncedSize.width}
            height={debouncedSize.height}
            style={{ backgroundColor: '#F8F1F5' }}
            draggable
        >
            <Layer>
                <DrawFigures />
            </Layer>
        </Stage>
    );
}
