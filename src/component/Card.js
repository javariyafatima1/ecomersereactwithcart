import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/Context';
import { Button, Toast, } from 'react-bootstrap';

const Card = ({item}) => {
  const {
    state: { cart },
    dispatch,
  } = CartContext();

  const [total, setTotal] = useState();
  useEffect(() =>{
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
    <div className="container mt-4">
   <h1 className="mb-4 text-center">Cart Items </h1>
   <div className="row">
       {
        cart.map(item => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <Toast>
      <Toast.Header>
        <img src={item.image} style={{width:50,height:50}} className="rounded me-2 " alt="" />
        <strong className="me-auto">{item.title}</strong>
        <small>Rating:{item.rating.rate}</small>
      </Toast.Header>
      <Toast.Body>Price:{item.price}</Toast.Body>
    </Toast>
    </div>
         
        
         
        ))}
       

    </div>
    <div className="mt-4 text-center">
    <h2> Totalitem:  {cart.length}</h2>  
    <h2> Total Amount:{total} </h2>  
    <Button className="mt-3" variant="primary">
      Check out
    </Button>
    </div>
    </div>
    </>
  );
}

export default Card;
