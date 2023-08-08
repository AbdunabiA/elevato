import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import plus from "assets/icons/AddPlusIconWhite.svg";
import minus from "assets/icons/CircleMinusIconWhite.svg";
import { useTranslation } from "react-i18next";


const Cards = ({ infos }) => {
  const {t, i18n} = useTranslation()
  const cards = [
    {
      icon: shoppingCart,
      title: t("Bonus"),
      count: formatNums(infos[0]),
      // val: "$",
    },
    {
      icon: mijozlar,
      title: t("Keshbek"),
      count: formatNums(infos[1]),
      // val: "$",
    },
    {
      icon: mahsulot,
      title: t("Izdoshlar soni"),
      count: formatNums(infos[2]),
      val: i18n.language === 'ru' || i18n.language == 'Ru-ru' ? "" : "ta",
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
        <h1 className="bonus-card__title">{t("Kunlik bonus")}</h1>
      </div>
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
    </div>
  );
};

export default Cards;
