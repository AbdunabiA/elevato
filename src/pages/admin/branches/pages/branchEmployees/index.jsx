import React from 'react'
import EmployeeBigCards from '../../components/employeeBigCards';
import { GetAll } from 'modules';
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';
import { useParams } from 'react-router-dom';

const BranchEmployees = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div className="container">
      <GetAll queryKey={['employees']} url='/admin-employees'>
        {({items, isLoading, isError, error}) => {
          if(isLoading) return <Loader/>
          if(isError) return <ErrorPage {...{error}}/>
          console.log(items);
          return (
            <>
              <EmployeeBigCards />
            </>
          );
        }}
      </GetAll>
    </div>
  );
}

export default BranchEmployees