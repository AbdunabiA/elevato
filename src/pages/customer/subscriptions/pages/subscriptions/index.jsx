import { SubscriptionCard } from 'components/cards';
import Loader from 'components/loader';
import { useGet } from 'crud';
import { GetAll } from 'modules'
import { Link } from 'react-router-dom';
import './subscriptions.scss'

const CustomerSubscriptions = () => {
  const {data} = useGet({
    queryKey: ["users-profile"],
    url: "users-profile",
  });
  // console.log(data);
  return (
    <GetAll queryKey={['customer-subscriptions']} url={'/users-status-packages'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                console.log(items);
                return (
                  <div className='container'>
                    <h1 className='title'>
                      Siz <Link>{data?.data?.status?.name}</Link> tarifiga obuna bo'lgansiz
                    </h1>
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