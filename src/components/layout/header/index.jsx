import './header.scss'
import searcIcon from 'assets/icons/SearchIcon.png'
import notification from 'assets/icons/NotificationIcon.png'
import avatar from 'assets/images/Woman.png'
import hamburger from 'assets/icons/humburger.png'
import { useLocation} from 'react-router-dom'
import { Button } from 'components/buttons'

const Header = ({ setSideMenu }) => {
  const options = [
    {label:"RU", value:"ru"},
    {label:"UZ", value:"uz"}
  ]
  const location = useLocation();
  const paths = {
    "/branches": "Filiallar",
    "/product": "Mahsulot",
    "/money-circulation": "Pul Aylanmasi",
    "/statistics": "Statistika",
    "/support": "Qo'llab Quvvatlash",
    "/settings": "Sozlamalar",
    "/big-leap": "Big Leap Team",
    "/subscriber": "Obunachi",
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
                return paths[item];
              }
            })}
            {location.pathname.toLowerCase() === "/" ? "Asosiy panel" : null}
          </h1>
        </div>
        <div className="header-wrapper__right">
          <div className="input__wrapper">
            <label htmlFor="search">
              <img src={searcIcon} alt="icon" />
            </label>
            <input type="text" id="search" placeholder="Qidirish" />
          </div>
          <div className="notification">
            <img src={notification} alt="icon" />
          </div>
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <select className='languages' >
            <option value="uz-UZ">UZ</option>
            <option value="ru-RU">RU</option>
          </select>
          <Button text={'chiqish'}/>
        </div>
      </div>
    </header>
  );
};

export default Header