import './subscriptionCard.scss'

const SubscriptionCard = ({data}) => {
  return (
    <div className="subscription-card">
      <div>
        <h2 className="subscription-card__name ">{data?.name}</h2>
        <p className="subscription-card__price">
          <span>{data?.price}$</span>/oyiga
        </p>
      </div>
      <p className="subscription-card__about">
        Lorem ipsum dolor sit amet consectetur. Id egestas mattis eget viverra
        pellentesque suscipit sit ultrices. Aliquet faucibus pellentesque amet
        fusce ligula. Fermentum leo viverra pulvinar elementum morbi fermentum
        ante eu lobortis. Adipiscing vulputate ullamcorper nulla ullamcorper
        duis sed.
      </p>
    </div>
  );
}

export default SubscriptionCard