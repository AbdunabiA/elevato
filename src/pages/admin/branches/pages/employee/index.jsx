import { GetAll } from 'modules'
import React from 'react'
import EmployeeInfoForm from '../../components/employeeInfoForm'
import { useParams } from 'react-router-dom'
import Loader from 'components/loader'
import ErrorPage from 'components/errorPage'

const Employee = () => {
  const {id} = useParams()
  return (
    <div className="container">
      <GetAll queryKey={["admin-employee"]} url={`/admin-employees/${id}`}>
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage error={error} />;
          console.log(items);
          return (
            <>
              <h1 className="title">Xodim</h1>
              <EmployeeInfoForm data={items}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
}

export default Employee