import React from 'react';
import Navbar from './Header';
import Navbarr from './Header';
import Baner from './Baner';
import { CartContext } from '../context/Context';
import Product from './Product';
import Footer from './Footer';

const Home = () => {
  const {
    state: { products },
  } = CartContext();

  return (
    <div>

      <Baner />
      <div className="product">
        <div className="product-container container">
        
          <div className="row">
            {products.map((item) => (
              <div key={item.id} className="col-6 col-md-4 col-lg-3 mb-4">
                <Product item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
