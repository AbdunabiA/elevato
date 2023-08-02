import { ProductCard } from 'components/cards'
import './Products.scss'
import React from 'react';

const Products = ({data, category, lang}) => {
  return (
    <div className="customer-products">
      {
        data.data.filter((el) => el[`name_${lang}`] === category)
        .map((prod)=>{
            return prod?.products?.map((elem, i)=>{
               if(!elem.deleted) return (
                <React.Fragment key={i}>
                    <ProductCard data={elem}/>
                </React.Fragment>
            )})
        })
      }
      
    </div>
  );
}

export default Products