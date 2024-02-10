import './AppHeaderTitle.css';

import { Breadcrumb, Button, Typography } from 'antd';
import { SettingFilled } from '@ant-design/icons';

const { Title } = Typography;

export const AppHeaderTitle: React.FC = () => {
    return (
        <div className='header-wrapper'>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className='header-title'>
                <Title>
                    Приветствуем тебя в CleverFit — приложении, <br />
                    которое поможет тебе добиться своей мечты!
                </Title>
                <div className='heading-extra'>
                    <Button
                        className={'settings-btn'}
                        icon={<SettingFilled style={{ marginRight: '2px' }} />}
                    >
                        Настройки
                    </Button>
                </div>
            </div>
        </div>
    );
};
