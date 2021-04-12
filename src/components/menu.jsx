import React, { Component } from 'react';
import Cart from './cart';

class Menu extends Component {
    state = {  }
    render() { 
        const {products, onClick} = this.props;
        // console.log(products);
        return ( 
            <React.Fragment>
                <h1>Menu</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                             <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <Cart onClick={onClick} product={product}/>
                             </tr>
                            // console.log(product.name)
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Menu;