import './AppFooter.css';
import { DownloadToPhone } from '../AppDownloadToPhone/DownloadToPhoneCard';
export const AppFooter: React.FC = () => {
    return (
        <div className='footer-wrapper'>
            <a href='#' className='reviews'>
                Смотреть отзывы
            </a>
            <DownloadToPhone />
        </div>
    );
};
