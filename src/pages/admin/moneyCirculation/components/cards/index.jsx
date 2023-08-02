import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import plus from "assets/icons/AddPlusIconWhite.svg";
import minus from "assets/icons/CircleMinusIconWhite.svg";

const Cards = ({ infos }) => {
  const cards = [
    {
      icon: shoppingCart,
      title: "Hisob raqamidagi summa",
      count: formatNums(infos[0]),
      val: "uzs",
    },
    {
      icon: mijozlar,
      title: "Debet",
      count: formatNums(infos[1]),
      val: "uzs",
    },
    {
      icon: mahsulot,
      title: "Kirim",
      count: formatNums(infos[2]),
      val: "uzs",
      right_side: true,
      right_icon: plus,
    },
    {
      icon: shoppingCart,
      title: "Chiqim",
      count: formatNums(infos[3]),
      val: "uzs",
      right_side: true,
      right_icon: minus,
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
