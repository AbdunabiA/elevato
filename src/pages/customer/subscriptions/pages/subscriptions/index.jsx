import Loader from 'components/loader';
import { GetAll } from 'modules'

const CustomerSubscriptions = () => {
  return (
    <GetAll queryKey={['customer-subscriptions']} url={'/users-status-packages'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                console.log(items);
                return <div>CustomerSubscriptions</div>;
            }
        }
    </GetAll>
  )
}

export default CustomerSubscriptions