import { ControlPanel } from 'shared/ui/ControlPanel';
import './app.css';
import DrawAreaStage from 'widgets/drawAreaStage/DrawAreaStage';
import SelectFigure from 'features/selectFigure/SelectFigure';
import ActivateCursorModeButton from 'features/activateCursorModeButton/ActivateCursorModeButton';
import { createContext, useContext, useState } from 'react';

type TState = {
    mode: 'cursor' | 'draw';
    selectedFigure: 'Rectangle' | 'Circle' | 'Star' | '';
    figures: { type: 'Rectangle' | 'Circle' | 'Star'; x: number; y: number; id: string }[];
};

const Context = createContext<[TState, React.Dispatch<React.SetStateAction<TState>>]>([
    { mode: 'cursor', selectedFigure: '', figures: [] },
    () => {},
]);

export const useGlobalContext = () => useContext(Context);

export default function App() {
    const [state, setState] = useState<TState>({ mode: 'cursor', selectedFigure: 'Rectangle', figures: [] });

    return (
        <Context.Provider value={[state, setState]}>
            <ControlPanel>
                <SelectFigure />
                <ActivateCursorModeButton />
            </ControlPanel>
            <DrawAreaStage />
        </Context.Provider>
    );
}
