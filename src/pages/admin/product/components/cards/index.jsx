import plusIcon from 'assets/icons/blackPlusIcon.png'
import "./cards.scss";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Cards = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  return (
    <div className="cards-add">
      <div className="cards-add__card" onClick={() => navigate("/add-product")}>
        <div>
          <img src={plusIcon} alt="icon" />
        </div>
        <h1>{t("Mahsulot qo'shish")}</h1>
      </div>
    </div>
  );
};

export default Cards;
