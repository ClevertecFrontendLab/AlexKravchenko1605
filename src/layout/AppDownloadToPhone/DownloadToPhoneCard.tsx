import './DownloadToPhoneCard.css';

import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Divider } from 'antd';

export const DownloadToPhone: React.FC = () => {
    return (
        <div className='download-to-phone'>
            <div className='text-wrapper'>
                <p>Скачать на телефон </p>
                <p>Доступно в PRO-тарифе</p>
            </div>
            <Divider />
            <div className='os-wrapper'>
                <a href='#'>
                    {' '}
                    <AndroidFilled style={{ marginRight: '8px' }} />
                    Android OS
                </a>
                <a href='#'>
                    <AppleFilled style={{ marginRight: '8px' }} />
                    Apple iOS
                </a>
            </div>
        </div>
    );
};
