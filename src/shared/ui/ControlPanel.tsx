import { memo } from 'react';
import './controlPanel.css';

type TProps = {
    children?: React.ReactNode;
};

export const ControlPanel = memo(function ControlPanel({ children }: TProps) {
    return <div className='control-panel'>{children}</div>;
});
