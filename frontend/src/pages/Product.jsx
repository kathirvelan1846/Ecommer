import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breakcrums/Breadcrum';
import { Productdisplay } from '../components/productdisplay/Productdisplay';
import { Descriptionbox } from '../components/descriptionbox/Descriptionbox';
import { Relatedproduct } from '../components/Relatedproduct/Relatedproduct';




export const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id  === Number(productId));
    
  return (
    <div > 
        <Breadcrum product={product}/>
        <Productdisplay product={product}/>
        <Descriptionbox/>
        <Relatedproduct/>
</div>
  )
}
