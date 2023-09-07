import { SubscriptionCard } from 'components/cards';
import Loader from 'components/loader';
import { useGet } from 'crud';
import { GetAll } from 'modules'
import { Link } from 'react-router-dom';
import './subscriptions.scss'
import { useTranslation } from 'react-i18next';
import ErrorPage from 'components/errorPage';

const EmployeeSubscriptions = () => {
  const {data} = useGet({
    queryKey: ["users-profile"],
    url: "users-profile",
  });
  const {i18n} = useTranslation()
  // console.log(data);
  return (
    <GetAll queryKey={['customer-subscriptions']} url={'/users-status-packages'}>
        {
            ({items, isLoading, isError, error})=>{
                if(isLoading) return <Loader/>
                if(isError) return <ErrorPage {...{error}}/>
                // console.log(items);
                return (
                  <div className='container'>
                    {/* {
                      i18n.language == 'ru' || i18n.language == "ru-RU" ? <h1 className='title'>Ваш тариф <Link>{data?.data?.status?.name}</Link></h1> : <h1 className='title'>Siz <Link>{data?.data?.status?.name}</Link> tarifiga obuna bo'lgansiz</h1>
                    } */}
                    <div className='subscriptions-cards'>
                      {
                        items.map((el, i)=>{
                          return <SubscriptionCard data={el} key={i}/>
                        })
                      }
                    </div>
                  </div>
                )
            }
        }
    </GetAll>
  )
}

export default EmployeeSubscriptions