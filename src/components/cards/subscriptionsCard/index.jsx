import { useTranslation } from 'react-i18next';
import './subscriptionCard.scss'

const SubscriptionCard = ({data}) => {
  const {t, i18n} = useTranslation()
  return (
    <div className="subscription-card">
      <div>
        <h2 className="subscription-card__name ">{data?.name}</h2>
        <p className="subscription-card__price">
          <span>{data?.price}$</span>
        </p>
      </div>
      <p className="subscription-card__about">
        {data[`about_${i18n.language}`]}
      </p>
    </div>
  );
}

export default SubscriptionCard