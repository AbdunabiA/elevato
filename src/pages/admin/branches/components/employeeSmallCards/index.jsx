import { EmployeeSmallCard } from 'components/cards'
import add from "assets/icons/CaretCircleRight.png";
import './employeeSmallCards.scss'
import { useNavigate } from 'react-router-dom';

const EmployeeSmallCards = () => {
  const navigate = useNavigate()
  return (
    <div className="employee-small-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="employee-small-cards-wrapper">
        <EmployeeSmallCard />
        <EmployeeSmallCard />
        <EmployeeSmallCard />
        <div className="plus-icon-wrapper" onClick={()=>navigate('employees')}>
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmployeeSmallCards