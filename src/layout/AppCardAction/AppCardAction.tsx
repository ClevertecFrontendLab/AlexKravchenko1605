import './AppCardAction.css';

import { CardAction } from 'src/types';
import { Divider } from 'antd';

export const AppCardAction: React.FC<CardAction> = ({ title, icon, label }) => {
    return (
        <div className='action-card'>
            <p>{title}</p>
            <Divider />
            <a href='#'>
                {icon} {label}
            </a>
        </div>
    );
};
