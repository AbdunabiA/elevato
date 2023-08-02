import woman from 'assets/images/Woman.png'
import phone from 'assets/icons/PhoneIcon.png'
import './employeeSmallCard.scss'

const EmployeeSmallCard = ({data}) => {
  return (
    <div className="small-card__wrapper">
      <div className="top">
        <div className="user-avatar__wrapper">
          <img src={`https://elevato.pythonanywhere.com${data?.photo}`} alt="" />
        </div>
        <div>
          <h2>{data?.first_name} {data?.last_name}</h2>
          <p>sotuvchi</p>
        </div>
      </div>
      <div className="bottom">
        {/* <h1 className="ball">5000 ball</h1> */}
        {
          data.phone_number ? <div className="phone">
          <div>
            <img src={phone} alt="phone" />
          </div>
          <p>{data?.phone_number}</p>
        </div> : null
        }
        {
          data.phone_number2 ? <div className="phone">
          <div>
            <img src={phone} alt="phone" />
          </div>
          <p>+998 90 000 00 00</p>
        </div> : null
        }
      </div>
    </div>
  );
}

export default EmployeeSmallCard