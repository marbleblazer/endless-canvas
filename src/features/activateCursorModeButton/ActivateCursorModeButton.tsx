import { useGlobalContext } from 'app/App';
import './activateCursorModeButton.css';

export default function ActivateCursorModeButton() {
    const [state, setState] = useGlobalContext();

    const handleClick = () => {
        setState(prev => ({ ...prev, mode: 'cursor' }));
    };

    return (
        <button
            type='button'
            title='Cursor mode'
            className={`activateCursorModeButton ${state.mode === 'cursor' ? 'active' : ''}`}
            onClick={handleClick}
        >
            Cursor Mode
        </button>
    );
}
