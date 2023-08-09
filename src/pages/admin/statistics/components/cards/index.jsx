import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import nasiya from "assets/icons/UmumiyNasiyaIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import { useTranslation } from "react-i18next";

const Cards = ({ infos }) => {
  const {t, i18n} = useTranslation()
  const cards = [
    {
      icon: shoppingCart,
      title: t("Umumiy savdo"),
      count: formatNums(infos[0]),
      val: "$",
    },
    {
      icon: mijozlar,
      title: t("Mijozlar soni"),
      count: formatNums(infos[1]),
      val: i18n.language == "ru" ? "" : "ta",
    },
    {
      icon: nasiya,
      title: t("Ishlagan kunlari"),
      count: formatNums(infos[2]),
      val: t("kun"),
    },
    {
      icon: mahsulot,
      title: t("Mahsulotlar soni"),
      count: formatNums(infos[3]),
      val: i18n.language == "ru" ? "" : "ta",
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
