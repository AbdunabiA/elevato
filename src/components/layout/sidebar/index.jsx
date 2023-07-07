import './sidebar.scss'
import { menus, helpers } from 'assets/db';
import logo from 'assets/images/logo.png'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const role = 'admin'
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className='wrapper'>
        <div className='menus-wrapper'>
          <h1>Menu</h1>
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
        <div className='helpers-wrapper'>
          <h1>Yordam</h1>

          <nav>
            <ul>
              {
                helpers[role].map((menu, i) => {
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
  );
}

export default Sidebar