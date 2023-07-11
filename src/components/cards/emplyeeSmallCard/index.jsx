import woman from 'assets/images/Woman.png'
import phone from 'assets/icons/PhoneIcon.png'
import './employeeSmallCard.scss'

const EmployeeSmallCard = () => {
  return (
    <div className='small-card__wrapper'>
      <div className='top'>
        <div className='user-avatar__wrapper'>
          <img src={woman} alt="" />
        </div>
        <div>
          <h2>Ziyoda Hasanova</h2>
          <p>sotuvchi</p>
        </div>
      </div>
      <div className='bottom'>
        <h1 className='ball'>5000 ball</h1>
        <div className='phone'>
          <div>
            <img src={phone} alt="phone" />
          </div>
          <p>+998 90 000 00 00</p>
        </div>
        <div className='phone'>
          <div>
            <img src={phone} alt="phone" />
          </div>
          <p>+998 90 000 00 00</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSmallCard