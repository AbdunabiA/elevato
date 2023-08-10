import Loader from 'components/loader'
import { GetAll } from 'modules'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './customersProducts.scss'
import { useGet } from 'crud'
import Products from '../../components/Products'
import ErrorPage from 'components/errorPage'

const CustomerProducts = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const { data, isLoading, isError, error } = useGet({
    queryKey: ["users-products"],
    url: "users-products",
  });
  const [category, setCategory] = useState(data?.data[0][`name_${lang}`]);
  console.log(category);
  useEffect(()=>{
    setCategory(data?.data[0][`name_${lang}`]);
  },[lang])
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage {...{error}}/>
  console.log(data);
  return (
            <div className='container'>
              <div className='users-products__categories'>
                {
                  data?.data?.map((el, i)=>{
                    return (
                      <p
                        key={i}
                        onClick={() => setCategory(el[`name_${lang}`])}
                        style={
                          category === el[`name_${lang}`]
                            ? { background: "#F9C70B" }
                            : { background: "#B2B7C1" }
                        }
                      >
                        {el[`name_${lang}`]}
                      </p>
                    );
                  })
                }
              </div>
              <Products {...{data, category, lang}}/>
            </div>
          )
}

export default CustomerProducts