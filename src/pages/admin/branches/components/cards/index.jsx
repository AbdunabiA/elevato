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
      val: "uzs",
    },
    {
      icon: mijozlar,
      title: "Mijozlar soni",
      count: formatNums(infos[1]),
      val: "ta",
    },
    {
      icon: nasiya,
      title: "Umumiy Nasiya",
      count: formatNums(infos[2]),
      val: "uzs",
    },
    {
      icon: mahsulot,
      title: "Umumiy Mahsulotlar",
      count: formatNums(infos[3]),
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
