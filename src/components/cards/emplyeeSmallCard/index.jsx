import woman from "assets/images/Woman.png";
import phone from "assets/icons/PhoneIcon.png";
import "./employeeSmallCard.scss";
import avatar from "assets/images/avatar.png";

const EmployeeSmallCard = ({ data }) => {
  return (
    <div className="small-card__wrapper">
      <div className="top">
        <div className="user-avatar__wrapper">
          <img
            src={data?.photo ? `https://paymentstest-60d8729405f3.herokuapp.com${data?.photo}` : avatar}
            alt=""
          />
        </div>
        <div>
          <h2>
            {data?.first_name} {data?.last_name}
          </h2>
          <p>sotuvchi</p>
        </div>
      </div>
      <div className="bottom">
        {/* <h1 className="ball">5000 ball</h1> */}
        {data?.phone_number ? (
          <div className="phone">
            <div>
              <img src={phone} alt="phone" />
            </div>
            <p>{data?.phone_number}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EmployeeSmallCard;
