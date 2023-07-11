import { EmployeeSmallCard } from 'components/cards'
import add from "assets/icons/CaretCircleRight.png";
import './employeeSmallCards.scss'

const EmployeeSmallCards = () => {
  return (
    <div className="employee-small-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="employee-small-cards-wrapper">
        <EmployeeSmallCard />
        <EmployeeSmallCard />
        <EmployeeSmallCard />
        <div className="plus-icon-wrapper">
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmployeeSmallCards