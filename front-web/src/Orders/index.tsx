import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';

import Navbar from '../Navbar';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import OrderLocation from './OrderLocation';

import Footer from '../Footer';

import './styles.css';


function Orders() {
  const [ products, setProducts ] = useState<Product[]>([])
  const [ orderLocation, setOrderLocation ] = useState<OrderLocationData>()
  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])




  return (
    <div className="orders-container">
      <Navbar />

      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />

      <Footer />
    </div>
  ) 
}

export default Orders;

