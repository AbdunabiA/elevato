import { GetAll } from 'modules';
import './notifications.scss'
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';
import { useTranslation } from 'react-i18next';
import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import { useNavigate } from 'react-router-dom';

export const CustomerNotifications = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const navigate = useNavigate()

  return (
    <GetAll queryKey={['users-notifications']} url={'/users-notifications'}>
      {
        ({items, isLoading, isError, error}) => {
          if(isLoading) return <Loader/>
          if(isError) return <ErrorPage {...{error}}/>
          // console.log(items);
          return (
            <div className="container">
              <div
                className="tariff__arrow-circle-left"
                onClick={() => navigate(-1)}
              >
                <img src={arrowLeft} alt="" />
              </div>
              {items?.map((notif, i) => {
                return (
                  <div key={i} className="users-notification__wrapper">
                    <h2>{notif[`title_${lang}`]}</h2>
                    <p>{notif[`message_${lang}`]}</p>
                  </div>
                );
              })}
            </div>
          );
        }
      }
    </GetAll>
  )
};

