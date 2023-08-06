import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import nasiya from 'assets/icons/UmumiyNasiyaIcon.png'
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";

const Cards = ({ infos }) => {
  const cards = [
    {
      icon: shoppingCart,
      title: "Umumiy Savdo",
      count: formatNums(infos[0]),
      val: "$",
    },
    {
      icon: nasiya,
      title: "Ish kunlari",
      count: formatNums(infos[1]),
      val: "kun",
    },
    {
      icon: mahsulot,
      title: "Mahsulotlar qoldigi",
      count: formatNums(infos[2]),
      val: "ta",
    },
  ];
  return (
    <div className="cards">
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
    </div>
  );
};

export default Cards;
