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
      title: "Bonus",
      count: formatNums(infos[0]),
      // val: "$",
    },
    {
      icon: mijozlar,
      title: "Keshbek",
      count: formatNums(infos[1]),
      // val: "$",
    },
    {
      icon: mahsulot,
      title: "Izdoshlar soni",
      count: formatNums(infos[2]),
      val: "ta",
      right_side: true,
      right_icon: plus,
    },
    // {
    //   icon: shoppingCart,
    //   title: "Pul yechish",
    //   count: formatNums(infos[3]),
    //   val: "uzs",
    //   right_side: true,
    //   right_icon: minus,
    // },
  ];
  return (
    <div className="cards">
      <div className="bonus-card">
        <h1 className="bonus-card__title">Kunlik bonus</h1>
      </div>
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
    </div>
  );
};

export default Cards;
