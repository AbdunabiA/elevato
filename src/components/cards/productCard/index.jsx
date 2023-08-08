import { Button } from 'components/buttons';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import cartIcon from 'assets/icons/ShoppingCart.png'
import './productCard.scss'

const ProductCard = ({data}) => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [count, setCount] = useState(1)
  const overallValue = count * data.price
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={`https://elevato.pythonanywhere.com/${data?.photo}`} alt="" />
      </div>
      <div className="product-card__info">
        <div className="product-card__info__title-price">
          <h1>{data.name}</h1>
          <p>
            {data.price}
            <span>$</span>
          </p>
        </div>
        <div className="product-card__info__about">
          <h2>{t("Batafsil")}</h2>
          <p>{data[`about_${lang}`]}</p>
        </div>
        <h3 className="product-card__info__manufacturer">
          {t("Ishlab chiqaruvchi")}: <span>{data.manufacturer}</span>
        </h3>
        <div className="product-card__info__count-wrapper">
          <div>
            <span className="product-counter__label">{t("Soni")}</span> <br />
            <input
              type="number"
              // value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div>
            <span className="product-ovaerall-value">{t("Umumiy summa")}</span> <br />
            <span>{overallValue}</span>
          </div>
        </div>
        <div className="product-button__wrapper">
          <Button text={t("Buyurtma berish")} icon={cartIcon} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard