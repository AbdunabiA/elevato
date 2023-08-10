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
import { usePost } from 'crud';


const ProductCard = ({data}) => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [count, setCount] = useState(1)
  const overallValue = count * data?.price
  const {mutate:orderProduct, isLoading, isError, error} = usePost()
  
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
          <ContainerForm>
            {({ values }) => {
              return (
                <>
                  <div className="product-order-fields">
                    <div className="product-order-inputs">
                      <label>
                        <span>{t("Soni")}</span> <br />
                        <input
                          type="number"
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                        />
                      </label>
                      <label className="product-order-input">
                        <span>{t("Umumiy summa")}</span> <br />
                        <input type="text" value={overallValue} disabled />
                      </label>
                      <Field
                        name="warehouse"
                        label={t("Filial")}
                        component={AsyncSelect}
                        loadOptionsUrl={"/warehouses/"}
                        optionLabel={`name`}
                        optionValue={`name`}
                        isSearchable
                        searchKey="name"
                      />
                    </div>
                  </div>
                  <div className="product-button__wrapper">
                    <Button
                      text={t("Buyurtma berish")}
                      icon={cartIcon}
                      onClick={() => {
                        orderProduct({
                          url: "/users-products/order/",
                          values: {
                            amount: count,
                            product: data?.id,
                            warehouse: values?.warehouse?.id,
                          },
                          onSuccess: () => {
                            toast.success("SUCCESSFUL");
                          },
                          onError: (error) => {
                            toast.error(error?.message);
                          },
                        });
                      }}
                      disabled={isLoading ? true : false}
                      type={'button'}
                    />
                  </div>
                </>
              );
            }}
          </ContainerForm>
        </div>
      </div>
    </div>
  );
}

export default ProductCard