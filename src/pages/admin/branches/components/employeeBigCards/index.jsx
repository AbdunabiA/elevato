import EmployeeBigCard from "components/cards/employeeBigCard";
import "./employeeBigCards.scss";
import { useNavigate } from "react-router-dom";

const EmployeeBigCards = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className="big-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="big-cards__wrapper">
        {
          data?.employees.map((el, i)=>{
            return <EmployeeBigCard data={el} key={i}  />;
          })
        }
      </div>
    </div>
  );
};

export default EmployeeBigCards;
