import './sidebar.scss'
import { menus, helpers } from 'assets/db';
import logo from 'assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import close from 'assets/icons/close.png'


const Sidebar = ({sideMenu, setSideMenu}) => {
  const navigate = useNavigate();
  const role = "admin";
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
        <div className="wrapper">
          <div className="menus-wrapper">
            <div>
              <h1>Menu</h1>
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
                        <p>{menu.title}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="helpers-wrapper">
            <h1>Yordam</h1>

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
                        <p>{menu.title}</p>
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