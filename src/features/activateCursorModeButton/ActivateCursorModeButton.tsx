import { useGlobalContext } from 'app/App';
import './activateCursorModeButton.css';

export default function ActivateCursorModeButton() {
    const [_, setState] = useGlobalContext();

    const handleClick = () => {
        setState(prev => ({ ...prev, mode: prev.mode === 'cursor' ? 'draw' : 'cursor' }));
    };

    return (
        <button
            type='button'
            title='Cursor mode'
            className='activateCursorModeButton'
            onClick={handleClick}
        >
            Cursor Mode
        </button>
    );
}
