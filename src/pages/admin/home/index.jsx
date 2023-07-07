import { useState,} from "react";
import "./home.scss";
import {GetAll} from "modules";
import { getLastMonth } from "services/dates";
import moment from "moment";
import Filters from "components/filters";
import shoppingCart from 'assets/icons/ShoppingCart.png'
import mijozlar from 'assets/icons/MijozlarIcon.png'
import kupon from 'assets/icons/KuponIcon.png'
import mahsulot from 'assets/icons/MahsulotIcon.png'

const Index = () => {
  const [filter, setFIlter] = useState(getLastMonth());
  const [date, setDate] = useState(null)
  // console.log(
  //   moment(date).format("DD-MM-YYYY")
  // );
  
  return (
    <div className="container">
      {/* <GetAll queryKey={[]}> */}
      {(() => {
        const cards = [
          {
            icon: shoppingCart,
            title: "Umumiy Savdo",
            count: 80000000
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            val: "uzs",
          },
          {
            icon: mijozlar,
            title: "Mijozlar soni",
            count: 591
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            val: "ta",
          },
          {
            icon: kupon,
            title: "Umumiy Kupon",
            count: 100000
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            val: "ball",
          },
          {
            icon: mahsulot,
            title: "Umumiy ball",
            count: 73580
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            val: "ta",
          },
        ];
        return (
          <>
            <Filters {...{filter, setFIlter, date, setDate}}/>
            <div className="cards">
              {
                cards.map((card, i)=>{
                  return (
                    <div key={i} className="card">
                      <div className="card__top">
                        <div className="icon__wrapper">
                          <img src={card.icon} alt="" />
                        </div>
                        <p className="card__top-title">{card.title}</p>
                      </div>
                      <div className="card__bottom">
                        <h1 className="card__bottom-count">{card.count}</h1>
                        <p className="card__bottom-val">{card.val}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
        );
      })()}
      {/* </GetAll>  */}
    </div>
  );
};

export default Index;
