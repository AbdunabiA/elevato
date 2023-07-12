import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
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
      title: " Umumiy mijozlar soni",
      count: formatNums(infos[1]),
      val: "ta",
    },
    {
      icon: mahsulot,
      title: "Umumiy obuna summasi",
      count: formatNums(infos[2]),
      val: "uzs",
    },
    {
      icon: shoppingCart,
      title: "Umumiy bonus",
      count: formatNums(infos[3]),
      val: "uzs",
    },
    {
      icon: shoppingCart,
      title: "Umumiy yechilgan pullar",
      count: formatNums(infos[3]),
      val: "uzs",
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
