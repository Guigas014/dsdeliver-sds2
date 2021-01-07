import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

import Navbar from '../Navbar';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';

import Footer from '../Footer';

import './styles.css';


function Orders() {
  const [ products, setProducts ] = useState<Product[]>([])
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

      <Footer />
    </div>
  ) 
}

export default Orders;

