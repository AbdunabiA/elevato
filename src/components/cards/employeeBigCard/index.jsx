import woman from "assets/images/Woman.png";
import { formatNums } from "services/formatNums";
import "./employeeBigCard.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import avatar from "assets/images/avatar.png";

const EmployeeBigCard = ({ data, onClick = () => {}, allIncome = true }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  console.log(data);
  return (
    <div className="employee-big-card" onClick={onClick}>
      <div className="top">
        <div className="top__avatar-wrapper">
          <img
            src={data?.photo ? `https://paymentstest-60d8729405f3.herokuapp.com${data?.photo}` : avatar}
            alt="img"
          />
        </div>
        <div className="overall-infos">
          {allIncome ? (
            <div>
              {/* <h1>{formatNums(14000000)}</h1>
              <p>{t("Umumiy daromad")}</p> */}
            </div>
          ) : null}
          {/* <div>
            <h1>{formatNums(5000)}</h1>
            <p>Umumiy ball</p>
          </div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="name">
          <h1>
            {data.first_name} {data.last_name}
          </h1>
          <p>{t("sotuvchi")}</p>
        </div>
        <div className="tel-nums">
          <div>
            <p className="label">{t("Telefon raqam")}</p>
            <p className="tel-num">{data.phone_number}</p>
          </div>
          {/* <div>
            <p className="label">Telefon raqam2</p>
            <p className="tel-num">+998900000000</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeBigCard;
