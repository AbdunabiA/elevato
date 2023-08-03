import './header.scss'
import searcIcon from 'assets/icons/SearchIcon.png'
import notification from 'assets/icons/NotificationIcon.png'
import avatar from 'assets/images/Woman.png'
import hamburger from 'assets/icons/humburger.png'
import { useLocation, useNavigate} from 'react-router-dom'
import { Button } from 'components/buttons'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { usePost } from 'crud'
import { storage } from 'services'

const Header = ({ setSideMenu }) => {
  const {t, i18n} = useTranslation()
  // console.log(i18n.language);
  const {mutate} = usePost()
  const navigate = useNavigate()
  const role = storage.get('role')
  
  

  useEffect(()=>{
    mutate({
      url: "/login/",
      values:{
        "userinput":"elevato",
        "password":"done7858"
      },
      onSuccess:({data})=>{
        storage.set('token', data?.access)
      },
      onError:(error)=>{
        console.log(error);
      }
    });
  },[])

  
  const location = useLocation();
  const paths = {
    "/branches": "Filiallar",
    "/product": "Mahsulotlar",
    "/money-circulation": "Pul aylanmasi",
    "/statistics": "Statistika",
    "/support": "Qo'llab Quvvatlash",
    "/settings": "Sozlamalar",
    "/big-leap": "Big Leap Team",
    "/subscriber": "Obunachi",
    "/employee":"Xodim",
    "/orders":"Buyurtmalar"
  };
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-wrapper__left">
          <div
            className="humburger-icon__wrapper"
            onClick={() => setSideMenu(true)}
          >
            <img src={hamburger} alt="" />
          </div>
          <h1>
            {Object.keys(paths).map((item) => {
              if (
                location.pathname.toLowerCase().includes(item.toLowerCase())
              ) {
                return t(paths[item]);
              }
            })}
            {location.pathname.toLowerCase() === "/" ? t("Asosiy panel") : null}
          </h1>
        </div>
        <div className="header-wrapper__right">
          <Button text={"Admin"} onClick={() => storage.set("role", "admin")} />
          <Button text={"Mijoz"} onClick={() => storage.set("role", "mijoz")} />
          <div className="input__wrapper">
            <label htmlFor="search">
              <img src={searcIcon} alt="icon" />
            </label>
            <input type="text" id="search" placeholder={t("Qidirish")} />
          </div>
          {role !== "admin" ? (
            <div className="notification">
              <img src={notification} alt="icon" />
            </div>
          ) : null}
          <div className="avatar" onClick={() => navigate("/profile")}>
            <img src={avatar} alt="" />
          </div>
          <select
            className="languages"
            defaultValue={i18n.language === "ru-RU" ? "ru" : "uz"}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
          <Button text={t("Chiqish")} />
        </div>
      </div>
    </header>
  );
};

export default Header