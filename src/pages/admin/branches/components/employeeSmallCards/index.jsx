import { EmployeeSmallCard } from 'components/cards'
import add from "assets/icons/CaretCircleRight.png";
import './employeeSmallCards.scss'
import { useNavigate } from 'react-router-dom';

const EmployeeSmallCards = ({data}) => {
  const navigate = useNavigate()
  if(data.length > 3) {
    data.length = 3
  }
  // console.log(data);
  return (
    <div className="employee-small-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="employee-small-cards-wrapper">
        {data.map((el, i) => (
          <EmployeeSmallCard key={i} data={el}/>
        ))}
        <div
          className="plus-icon-wrapper"
          onClick={() => navigate("employees")}
        >
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmployeeSmallCards