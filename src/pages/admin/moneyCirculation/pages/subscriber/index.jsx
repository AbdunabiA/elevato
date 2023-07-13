import { GetAll } from 'modules'
import React from 'react'
import SubscriberInfoForm from '../../components/subscriberInfoForm'
import FinancialInfo from '../../components/financialInfo'

const Subscriber = () => {
  return (
    <div className='container'>
        {/* <GetAll> */}
            {
                (()=>{
                    return (
                        <>
                            <SubscriberInfoForm/>
                            <FinancialInfo/>
                        </>
                    )
                })()
            }
        {/* </GetAll> */}
    </div>
  )
}

export default Subscriber