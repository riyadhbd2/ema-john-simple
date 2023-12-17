import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3>Order Summary</h3>
            <p>Selected items:{cart.length} </p>
            <p>Total price: </p>
            <p>Total shipping charge: </p>
            <p>Tax: </p>
            <h3>Grand total: </h3>
            <div className='cart-buttons'>
                <button className='btn-clear'>Clear cart</button>
                <button className='btn-review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;