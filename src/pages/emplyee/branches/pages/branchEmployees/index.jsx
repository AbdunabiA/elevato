import EmployeeBigCard from 'components/cards/employeeBigCard'
import ErrorPage from 'components/errorPage'
import Loader from 'components/loader'
import { GetAll } from 'modules'
import React from 'react'
import { useTranslation } from 'react-i18next'

const EmployeeBranchEmployees = () => {
  const {t, i18n} = useTranslation()
  return (
    <GetAll
      queryKey={["employee-employees"]}
      url={"employees-warehouse/employees/"}
    >
      {({items, isLoading, isError, error}) => {
        if(isLoading) return <Loader/>
        if(isError) return <ErrorPage {...{error}}/>
        // console.log(items);
        return (
          <div className="container">
            <h1>{t("Xodimlar")}</h1>
            <div className='big-cards'>
              {
                items?.employees?.map((el, i)=>{
                  return <EmployeeBigCard key={i} data={el} allIncome={false}/>
                })
              }
            </div>
          </div>
        );
      }}
    </GetAll>
  );
}

export default EmployeeBranchEmployees