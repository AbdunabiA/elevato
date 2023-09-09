import { GetAll } from 'modules'
import React from 'react'
import ProductsSales from '../../components/productsSales'
import Loader from 'components/loader'
import ErrorPage from 'components/errorPage'
import ProductsTable from '../../components/productsTable'

const EmployeeProducts = () => {
  return (
    <GetAll
        queryKey={['employee-products']}
        url={'employees-products'}
    >
        {
            ({items, isLoading, isError, error})=>{
                if(isLoading) return <Loader/>
                if(isError) return <ErrorPage {...{error}}/>
                // console.log(items);
                return (
                    <div className='container'>
                        <ProductsSales data={items?.products_diagram}/>
                        <ProductsTable data={items?.products}/>
                    </div>
                )
            }
        }
    </GetAll>
  )
}

export default EmployeeProducts