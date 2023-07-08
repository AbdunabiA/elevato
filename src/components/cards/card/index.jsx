import './card.scss'

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="card__top">
        <div className="icon__wrapper">
          <img src={card.icon} alt="" />
        </div>
        <p className="card__top-title">{card.title}</p>
      </div>
      <div className="card__bottom">
        <h1 className="card__bottom-count">{card.count}</h1>
        <p className="card__bottom-val">{card.val}</p>
      </div>
    </div>
  );
}

export default Card