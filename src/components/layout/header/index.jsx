import './header.scss'
import searcIcon from 'assets/icons/SearchIcon.png'
import notification from 'assets/icons/NotificationIcon.png'
import avatar from 'assets/images/Woman.png'

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='wrapper__left'>
          <h1>Asosiy Panel</h1>
        </div>
        <div className='wrapper__right'>
          <div className='input__wrapper'>
            <label htmlFor="search">
              <img src={searcIcon} alt="icon" />
            </label>
            <input type="text" id='search' placeholder='Qidirish'/>
          </div>
          <div className='notification'>
            <img src={notification} alt="icon" />
          </div>
          <div className='avatar'>
            <img src={avatar} alt="" />
          </div>
          <button>Chiqish</button>
        </div>
      </div>
    </header>
  );
}

export default Header