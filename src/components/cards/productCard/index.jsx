import { Button } from 'components/buttons';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import cartIcon from 'assets/icons/ShoppingCart.png'
import './productCard.scss'
import { ContainerForm } from 'modules';
import { Field } from 'formik';
import { AsyncSelect, Input } from 'components/fields';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductCard = ({data}) => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [count, setCount] = useState(1)
  
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
          <ToastContainer />
          <ContainerForm
            fields={[
              {
                name: "amount",
                required: true,
              },
              {
                name: "warehouse",
                required: true,
                type: "object",
                onSubmitValue: (value) => value?.id,
              },
              {
                product: data.id,
              },
            ]}
            url="/users-products/order/"
            onSuccess={() => {toast.success('SUCCESSFUL')}}
            onError={(error)=>{toast.error(error?.message)}}
          >
            {({ handleSubmit, isLoading, values }) => {
              const overallValue = values.amount * data.price;
              return (
                <>
                <div className='product-order-fields'>
                  <div className='product-order-inputs'>
                  <Field
                    type="number"
                    value={1}
                    onChange={(e) => setCount(e.target.value)}
                    name="amount"
                    label={t("Soni")}
                    component={Input}
                    defaultValue={1}
                    />
                  <label className='product-order-input'>
                    <span>{t("Umumiy summa")}</span> <br />
                    <input
                      type="text"
                      value={overallValue ? overallValue : data.price}
                      />
                  </label>
                  <Field
                    name="warehouse"
                    label={t("Filial")}
                    component={AsyncSelect}
                    loadOptionsUrl={"/warehouses/"}
                    optionLabel={`name`}
                    optionValue={`name`}
                    />
                  </div>
                </div>
                <div className="product-button__wrapper">
                  <Button 
                    text={t("Buyurtma berish")} 
                    icon={cartIcon} 
                    onClick={handleSubmit}
                    disabled={isLoading ? true : false}
                    />
                </div>
                </>
              );
            }}
          </ContainerForm>
          {/* <div>
            <span className="product-counter__label">{t("Soni")}</span> <br />
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div>
            <span className="product-ovaerall-value">{t("Umumiy summa")}</span> <br />
            <span>{overallValue}</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard