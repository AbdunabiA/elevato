import { GetAll } from 'modules'
import './profile.scss'
import Loader from 'components/loader'
import SubscriberInfoForm from './components/subscriberInfoForm'
import TreeTables from './components/treeTables'

export const CustomerProfile = () => {
  return (
    <GetAll queryKey={['customer-profile']} url={'/users-profile'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                console.log(items);
                 return (
                    <div className='container'>
                        <SubscriberInfoForm data={items}/>
                        <TreeTables data={items?.tree}/>
                    </div>
                 )
            }
        }
    </GetAll>
  )
}

