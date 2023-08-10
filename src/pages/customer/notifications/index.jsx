import { GetAll } from 'modules';
import './notifications.scss'
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';
import { useTranslation } from 'react-i18next';

export const CustomerNotifications = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language

  return (
    <GetAll queryKey={['users-notifications']} url={'/users-notifications'}>
      {
        ({items, isLoading, isError, error}) => {
          if(isLoading) return <Loader/>
          if(isError) return <ErrorPage {...{error}}/>
          console.log(items);
          return (
            <div className="container">
              {
                items?.map((notif, i) =>{
                  return (
                    <div className='users-notification__wrapper'>
                      <h2>{notif[`title_${lang}`]}</h2>
                      <p>{notif[`message_${lang}`]}</p>
                    </div>
                  )
                })
              }
            </div>
          )
        }
      }
    </GetAll>
  )
};
