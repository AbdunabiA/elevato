import plusIcon from 'assets/icons/blackPlusIcon.png'
import "./cards.scss";
import { useNavigate } from 'react-router-dom';


const Cards = () => {
  const navigate = useNavigate()
  
  return (
    <div className="cards-add">
      <div className="cards-add__card" onClick={() => navigate("/add-product")}>
        <div>
          <img src={plusIcon} alt="icon" />
        </div>
        <h1>Mahsulot qo'shish</h1>
      </div>
    </div>
  );
};

export default Cards;
