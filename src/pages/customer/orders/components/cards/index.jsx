import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import { formatNums } from "services/formatNums";
import { useTranslation } from "react-i18next";


const Cards = ({ infos }) => {
  const {t, i18n} = useTranslation()
  const cards = [
    {
      icon: shoppingCart,
      title: t("Umumiy buyurtmalar"),
      count: formatNums(infos[0]),
      // val: "$",
    },
    {
      icon: mijozlar,
      title: t("Aktiv buyurtmalar"),
      count: formatNums(infos[1]),
      // val: "$",
    },
  ];
  return (
    <div className="customer-cards">
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
    </div>
  );
};

export default Cards;
