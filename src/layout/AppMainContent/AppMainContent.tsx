import { Typography } from 'antd';
import './AppMainContent.css';
import { AppCardAction } from '../AppCardAction/AppCardAction';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';

const { Title } = Typography;
export const AppMainContent: React.FC = () => {
    return (
        <>
            <section className='app-possibilities'>
                <p>
                    С CleverFit ты сможешь:
                    <br /> — планировать свои тренировки на календаре, выбирая тип и уровень
                    нагрузки;
                    <br /> — отслеживать свои достижения в разделе статистики, сравнивая свои
                    результаты <br /> с нормами и рекордами;
                    <br /> — создавать свой профиль, где ты можешь загружать свои фото, видео и
                    отзывы <br /> о тренировках;
                    <br /> — выполнять расписанные тренировки для разных частей тела, следуя
                    подробным инструкциям и советам профессиональных тренеров.
                </p>
            </section>
            <section className='app-content-title'>
                <Title level={4}>
                    CleverFit — это не просто приложение, а твой личный помощник <br /> в мире
                    фитнеса. Не откладывай на завтра — начни тренироваться <br /> уже сегодня!
                </Title>
            </section>
            <section className='app-card-actions'>
                <AppCardAction
                    title={'Расписать тренировки'}
                    icon={<HeartFilled style={{ marginRight: '8px' }} />}
                    label={'Тренировки'}
                />
                <AppCardAction
                    title={'Назначить календарь'}
                    icon={<CalendarOutlined style={{ marginRight: '8px' }} />}
                    label={'Календарь'}
                />
                <AppCardAction
                    title={'Заполнить профиль'}
                    icon={<IdcardOutlined style={{ marginRight: '8px' }} />}
                    label={'Профиль'}
                />
            </section>
        </>
    );
};
