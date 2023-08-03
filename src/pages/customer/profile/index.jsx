import { GetAll } from 'modules'
import './profile.scss'
import Loader from 'components/loader'
import SubscriberInfoForm from './components/subscriberInfoForm'

export const CustomerProfile = () => {
  return (
    <GetAll queryKey={['customer-profile']} url={'/users-profile'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                 return (
                    <div className='container'>
                        <SubscriberInfoForm/>
                    </div>
                 )
            }
        }
    </GetAll>
  )
}

