import { GetAll } from 'modules'
import React from 'react'
import EmployeeInfoForm from '../../components/employeeInfoForm'

const Employee = () => {
  return (
    <div className='container'>
      {/* <GetAll> */}
      {
        (()=>(
          <>
            <h1 className='title'>Xodim</h1>
            <EmployeeInfoForm/>
          </>
        ))()
      }
      {/* </GetAll> */}
    </div>
  )
}

export default Employee