import './sidebar.scss'
import { menus, helpers } from 'assets/db';
import logo from 'assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import close from 'assets/icons/close.png'
import { useTranslation } from 'react-i18next';
import { storage } from 'services';


const Sidebar = ({sideMenu, setSideMenu}) => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  let role = 'admin'
  if (storage.get("role")) {
    role = storage.get("role");
  } else {
    role = "admin";
  }
  return (
    <>
      {sideMenu ? 
        <div 
          className="back-black__cover"
          id='cover'
          onClick={(e)=>{
            if (e.target.id === "cover") {
              setSideMenu(false);
            }
          }}
        ></div> : null}
      <div className={`sidebar ${sideMenu ? "active" : ""}`}>
        <div 
          className="logo-wrapper"
          onClick={()=>navigate('/')}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar-wrapper">
          <div className="menus-wrapper">
            <div>
              <h1>{t("Menu")}</h1>
              <div
                className="close-icon__wrapper"
                onClick={() => setSideMenu(false)}
              >
                <img src={close} alt="icon" />
              </div>
            </div>
            <nav>
              <ul>
                {menus[role].map((menu, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={menu.path}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <div>
                          <img src={menu.icon} alt="icon" />
                        </div>
                        <p>{t(`${menu.title}`)}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="helpers-wrapper">
            <h1>{t("Yordam")}</h1>

            <nav>
              <ul>
                {helpers[role].map((menu, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={menu.path}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <div>
                          <img src={menu.icon} alt="icon" />
                        </div>
                        <p>{t(`${menu.title}`)}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar