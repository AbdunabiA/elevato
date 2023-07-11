import EmployeeBigCard from "components/cards/employeeBigCard";
import "./employeeBigCards.scss";

const EmployeeBigCards = () => {
  return (
    <div className="big-cards">
      <h1 className="title">Xodimlar</h1>
      <div className="big-cards__wrapper">
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
        <EmployeeBigCard />
      </div>
    </div>
  );
};

export default EmployeeBigCards;
