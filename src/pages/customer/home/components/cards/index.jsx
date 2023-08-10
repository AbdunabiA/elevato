import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import plus from "assets/icons/AddPlusIconWhite.svg";
import minus from "assets/icons/CircleMinusIconWhite.svg";
import { useTranslation } from "react-i18next";
import { usePost } from "crud";
import { useState } from "react";
import Loader from "components/loader";
import Modal from "components/modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cards = ({ infos }) => {
  const {t, i18n} = useTranslation()
  const {mutate:dailyBonus, isLoading, isError, error} = usePost()
  const [bonusModal, setBonusModal] = useState({show:false, data:null})
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
      <ToastContainer/>
      <div
        className="bonus-card"
        onClick={() => {
          dailyBonus({
            url: "/users-get-daily-bonus/",
            method: "post",
            values: { active: true },
            onSuccess: (data) => {
              setBonusModal({ show: true, data: data.data });
            },
            onError: (error) => {
              toast.error(error.message)
            },
          });
        }}
        style={isLoading ? {background:"white"} : {}}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <h1 className="bonus-card__title">{t("Kunlik bonus")}</h1>
        )}
      </div>
      {bonusModal.show ? (
        <Modal onClose={() => setBonusModal({ show: false, data: null })}>
          <div style={{ padding: "20px" }}>
            <h2>{bonusModal?.data?.message[i18n.language]}</h2>
            <p style={{ marginTop: "10px" }}>
              {t("Keyingi bonus")}:{bonusModal?.data?.next_bonus}
            </p>
          </div>
        </Modal>
      ) : null}

      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}
    </div>
  );
};

export default Cards;
