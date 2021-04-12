import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {

    render() { 
        const {products, onDelete, onIncrement, onReset} = this.props;
        const selectedProducts = products.filter(p => p.isInCart === true);
        return ( 
            <React.Fragment>
                <h1 className="mb-3">Shopping Cart </h1> 
                {selectedProducts.map(product => (
                    <Product key={product.id} onDelete={onDelete} onIncrement={onIncrement} product = {product}/>
                ))}
                <button className="btn btn-secondary m-2" onClick={onReset}>Reset</button>

            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;