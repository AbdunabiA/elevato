import './card.scss'

const Card = ({card}) => {
  return (
    <div className="card">
      <div className='card__left'>
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
      {
        card?.right_side ? <div className='card__right'>
        <div>
          <img src={card?.right_icon} alt="" />
        </div>
      </div>
      : null
      }
      
    </div>
  );
}

export default Card