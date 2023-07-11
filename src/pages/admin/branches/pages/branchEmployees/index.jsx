import React from 'react'
import EmployeeBigCards from '../../components/employeeBigCards';

const BranchEmployees = () => {
  return (
    <div className="container">
      {/* <GetAll> */}
      {(() => {
        return (
          <>
            <EmployeeBigCards />
          </>
        );
      })()}
      {/* </GetAll> */}
    </div>
  );
}

export default BranchEmployees