import Loader from 'components/loader'
import { GetAll } from 'modules'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './customersProducts.scss'
import { useGet } from 'crud'
import Products from '../../components/Products'
import ErrorPage from 'components/errorPage'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const CustomerProducts = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const { data, isLoading, isError, error } = useGet({
    queryKey: ["users-products"],
    url: "users-products",
  });
  const [category, setCategory] = useState(data?.data[0][`name_${lang}`]);
  // console.log(category);
  useEffect(()=>{
    setCategory(data?.data[0][`name_${lang}`]);
  },[lang, data])
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage {...{error}}/>
  // console.log(data);
  return (
    <div className="container">
      <div className="users-products__categories">
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          
            {data?.data?.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <p
                    onClick={() => setCategory(el[`name_${lang}`])}
                    style={
                      category === el[`name_${lang}`]
                        ? { background: "#F9C70B" }
                        : { background: "#B2B7C1" }
                    }
                  >
                    {el[`name_${lang}`]}
                  </p>
                </SwiperSlide>
              );
            })}
          
        </Swiper>
      </div>
      <Products {...{ data, category, lang }} />
    </div>
  );
}

export default CustomerProducts