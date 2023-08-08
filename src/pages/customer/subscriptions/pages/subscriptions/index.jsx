import { SubscriptionCard } from 'components/cards';
import Loader from 'components/loader';
import { useGet } from 'crud';
import { GetAll } from 'modules'
import { Link } from 'react-router-dom';
import './subscriptions.scss'
import { useTranslation } from 'react-i18next';

const CustomerSubscriptions = () => {
  const {data} = useGet({
    queryKey: ["users-profile"],
    url: "users-profile",
  });
  const {i18n} = useTranslation()
  // console.log(data);
  return (
    <GetAll queryKey={['customer-subscriptions']} url={'/users-status-packages'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                console.log(items);
                return (
                  <div className='container'>
                    {
                      i18n.language == 'ru' || i18n.language == "Ru-ru" ? <h1 className='title'>Ваш тарив <Link>{data?.data?.status?.name}</Link></h1> : <h1 className='title'>Siz <Link>{data?.data?.status?.name}</Link> tarifiga obuna bo'lgansiz</h1>
                    }
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

export default CustomerSubscriptions