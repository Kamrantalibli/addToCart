import React from 'react'
import ProductItem from './ProductItem';
import data from "../data/data";

const Products = () => {
  return (
    <div className='mt-5'>
      <div className="row ">
        {data.carData.map((deyer,saygac)=>{
          return(
            <ProductItem
            sekil={deyer.img}
            basliq={deyer.title}
            aciqlama={deyer.desc}
            qiymet={deyer.price}
            key={saygac}
            mehsul = {deyer}
             />
          )
        })}
      </div>
    </div>
  )
}

export default Products