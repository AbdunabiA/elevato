import EmployeeBigCard from "components/cards/employeeBigCard";
import "./employeeBigCards.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EmployeeBigCards = ({data}) => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  return (
    <div className="big-cards">
      <h1 className="title">{t("Xodimlar")}</h1>
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
