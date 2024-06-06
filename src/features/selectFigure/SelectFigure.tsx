import { useGlobalContext } from 'app/App';
import './selectFigure.css';

type Figure = 'Rectangle' | 'Circle' | 'Star';

const FIGURES: Figure[] = ['Rectangle', 'Circle', 'Star'];

export default function SelectFigure() {
    const [state, setState] = useGlobalContext();

    return (
        <select
            title='Select figure'
            className='select-figure'
            defaultValue=''
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setState({
                    mode: 'draw',
                    selectedFigure: e.target.value as Figure,
                    figures: [
                        ...state.figures,
                        {
                            type: e.target.value as Figure,
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2,
                            id: crypto.randomUUID(),
                        },
                    ],
                })
            }
        >
            <option
                hidden
                value=''
            >
                Select figure...
            </option>
            {FIGURES.map(figure => (
                <option
                    key={figure}
                    value={figure}
                >
                    {figure}
                </option>
            ))}
        </select>
    );
}
