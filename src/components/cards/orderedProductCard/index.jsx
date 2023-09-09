import { Button } from "components/buttons";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import cartIcon from "assets/icons/ShoppingCart.png";
import "./orderedProductCard.scss";
import { ContainerForm } from "modules";
import { Field } from "formik";
import { AsyncSelect, Input } from "components/fields";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePost } from "crud";
import { get } from "lodash";
import { useQueryClient } from "@tanstack/react-query";

const OrderedProductCard = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { mutate: deleteProduct, isLoading: deleteLoading } = usePost();
  const queryClient = useQueryClient();
  // console.log(data);

  return (
    <div className="product-card">
      <ToastContainer />
      <div className="product-card__img">
        <img
          src={`https://paymentstest-60d8729405f3.herokuapp.com${data?.product.photo}`}
          alt=""
        />
      </div>
      <div className="product-card__info">
        <div className="product-card__info__title-price">
          <h1>{data?.product.name}</h1>
          <p>
            {data?.product.price}
            <span>$</span>
          </p>
        </div>
        <div className="product-card__info__about">
          <h2>{t("Batafsil")}</h2>
          <p>{data && data?.product[`about_${lang}`]}</p>
        </div>
        <h3 className="product-card__info__manufacturer">
          {t("Ishlab chiqaruvchi")}: <span>{data?.product.manufacturer}</span>
        </h3>
        <div className="product-card__info__count-wrapper">
          <h2>
            {t("Status")}: {data?.done ? t("Bajarilgan") : t("Aktiv")}
          </h2>
          <div className="product-order-inputs">
            <div>
              <p>{t("Soni")}</p>
              <p>{data?.amount}</p>
            </div>
            <div>
              <p>{t("Umumiy summa")}</p>
              <p>{data?.amount * data?.product?.price}$</p>
            </div>
            <div>
              <p>{t("Filial")}</p>
              <p>{data?.warehouse?.name}</p>
            </div>
          </div>
          <div className="product-button__wrapper">
            <Button
              onClick={
                !data?.done || deleteLoading
                  ? () => {
                      deleteProduct({
                        url: `users-products/order/${data.id}/`,
                        method: "delete",
                        onSuccess: () => {
                          toast.success("SUCCESSFUL");
                          queryClient.invalidateQueries("users-products-order");
                        },
                        onError: (error) => {
                          toast.error(
                            get(error, "response.data.message", error?.message)
                          );
                        },
                      });
                    }
                  : () => {}
              }
              disabled={deleteLoading || data?.done}
              text={"Bekor qilish"}
              color={"#FF0000"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProductCard;
