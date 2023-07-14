import EmployeeBigCard from "components/cards/employeeBigCard";
import "./employeeBigCards.scss";
import { useNavigate } from "react-router-dom";

const EmployeeBigCards = () => {
  const navigate = useNavigate()
  return (
    <div className="big-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="big-cards__wrapper">
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
        <EmployeeBigCard onClick={() => navigate(`/employee/1`)} />
      </div>
    </div>
  );
};

export default EmployeeBigCards;
