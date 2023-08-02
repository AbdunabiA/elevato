import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import kupon from "assets/icons/KuponIcon.png";
import plusIcon from 'assets/icons/blackPlusIcon.png'
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";

const Cards = ({ infos }) => {
  const navigate = useNavigate()
  const cards = [
    {
      icon: shoppingCart,
      title: "Umumiy obuna summasi",
      count: formatNums(infos[0]),
      val: "$",
    },
    {
      icon: mijozlar,
      title: "Bonus",
      count: formatNums(infos[1]),
      val: "$",
    },
    {
      icon: kupon,
      title: "Foydalanuvchilar",
      count: formatNums(infos[2]),
      val: "ta",
    },
  ];
  return (
    <div className="cards">
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
      <div className="add-tariff" onClick={()=>navigate('/subscriptions/create/')}>
        <h2 className="add-tariff__title">Tarif yaratish</h2>
        <div>
          <img src={plusIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
