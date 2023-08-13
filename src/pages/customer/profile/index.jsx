import { GetAll } from 'modules'
import './profile.scss'
import Loader from 'components/loader'
import SubscriberInfoForm from './components/subscriberInfoForm'
import TreeTables from './components/treeTables'
import { isError } from 'lodash'
import ErrorPage from 'components/errorPage'

export const CustomerProfile = () => {
  return (
    <GetAll queryKey={['customer-profile']} url={'/users-profile'}>
        {
            ({items, isLoading, isError, error})=>{
                if(isLoading) return <Loader/>
                if(isError) return <ErrorPage {...{error}}/>
                // console.log(items);
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

