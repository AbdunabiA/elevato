import woman from 'assets/images/Woman.png'
import { formatNums } from 'services/formatNums'
import './employeeBigCard.scss'
import { useNavigate } from 'react-router-dom'

const EmployeeBigCard = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className="employee-big-card" onClick={()=>navigate(`/employee/${data.id}`)}>
      <div className="top">
        <div className="top__avatar-wrapper">
          <img src={`https://elevato.pythonanywhere.com${data.photo}`} alt="img" />
        </div>
        <div className="overall-infos">
          <div>
            <h1>{formatNums(14000000)}</h1>
            <p>Umumiy daromad</p>
          </div>
          {/* <div>
            <h1>{formatNums(5000)}</h1>
            <p>Umumiy ball</p>
          </div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="name">
          <h1>{data.first_name} {data.last_name}</h1>
          <p>sotuvchi</p>
        </div>
        <div className="tel-nums">
          <div>
            <p className="label">Telefon raqam</p>
            <p className="tel-num">{data.phone_number}</p>
          </div>
          <div>
            <p className="label">Telefon raqam2</p>
            <p className="tel-num">+998900000000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeBigCard