import Loader from 'components/loader'
import { GetAll } from 'modules'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './customersProducts.scss'
import { useGet } from 'crud'
import Products from '../../components/Products'

const CustomerProducts = () => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const [category, setCategory] = useState()
  const { data, isLoading } = useGet({
    queryKey: ["users-products"],
    url: "users-products",
  });
  const profile = useGet({
    queryKey: ["users-profile"],
    url: "users-profile",
  });
  console.log(profile);
  useEffect(()=>{
    setCategory(data?.data[0][`name_${lang}`]);
  },[data])
  if (isLoading) return <Loader />;
  // console.log(data);
  return (
            <div className='container'>
              <div className='users-products__categories'>
                {
                  data.data?.map((el, i)=>{
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