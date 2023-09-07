import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import plus from "assets/icons/AddPlusIconWhite.svg";
import minus from "assets/icons/CircleMinusIconWhite.svg";
import { useTranslation } from "react-i18next";
import { useGet, usePost } from "crud";
import { useEffect, useState } from "react";
import Loader from "components/loader";
import Modal from "components/modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Coins from "components/coins";
import { get } from "lodash";


const Cards = ({ infos }) => {
  const {t, i18n} = useTranslation()
  const {mutate:dailyBonus, isLoading, isError, error} = usePost()
  const [bonusModal, setBonusModal] = useState({show:false, data:null})
  const [coins, setCoins] = useState(false)

  const { data } = useGet({
    queryKey: ["user-info"],
    url: "/users-profile",
  });
  // console.log('USER DATA', data?.data?.user?.offer_id);
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
      right_side_click:()=>{
        navigator.clipboard.writeText(
          `https://elevato.me/sign-up?offer_id=${get(
            data,'data.user.offer_id', ''
          )}`
        );
        toast.success("COPIED");
      }
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
      <div
        className="bonus-card"
        onClick={() => {
          setCoins(true);
          dailyBonus({
            url: "/users-get-daily-bonus/",
            method: "post",
            values: { active: true },
            onSuccess: (data) => {
              setBonusModal({ show: true, data: data.data });
            },
            onError: (error) => {
              toast.error(error.message);
            },
          });
        }}
        style={isLoading ? { background: "white" } : {}}
      >
        <ToastContainer />
        {isLoading ? (
          <Loader />
        ) : (
          <h1 className="bonus-card__title">{t("Kunlik bonus")}</h1>
        )}
      </div>
      {coins ? <Coins /> : null}

      {bonusModal.show ? (
        <Modal
          onClose={() => {
            setBonusModal({ show: false, data: null });
            setCoins(false);
          }}
        >
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
