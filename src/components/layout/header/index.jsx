import './header.scss'
import searcIcon from 'assets/icons/SearchIcon.png'
import notification from 'assets/icons/NotificationIcon.png'
import avatar from 'assets/images/Woman.png'
import hamburger from 'assets/icons/humburger.png'
import { useLocation} from 'react-router-dom'

const Header = ({ setSideMenu }) => {

  const location = useLocation();
  const paths = {
    "/branches": "Filiallar",
    "/product": "Mahsulot",
    "/money-circulation": "Pul Aylanmasi",
    "/statistics": "Statistika",
    "/support":"Qo'llab Quvvatlash",
    "/settings":"Sozlamalar",
    "/big-leap":"Big Leap Team"
  };
  return (
    <header>
      <div className="wrapper">
        <div className="wrapper__left">
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
        <div className="wrapper__right">
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
          <button>Chiqish</button>
        </div>
      </div>
    </header>
  );
};

export default Header