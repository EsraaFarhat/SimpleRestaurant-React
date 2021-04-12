import React, { Component } from 'react';
import Cart from './cart';

class Admin extends Component {
    state = {  }

    render() { 
        const {products, onDelete} = this.props;

        
        return ( 
            <React.Fragment>
                <h1>Admin</h1>
                <button className="btn btn-primary" onClick={() => this.props.history.push("/productForm/new")}>Add</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                             <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td style={{cursor: "pointer"}} onClick={() => this.props.history.push(`/productForm/${product.id}`)}><i className="fas fa-edit"></i></td>
                                <td style={{cursor:"pointer"}} onClick={ () => {onDelete(product)}}><i className="fas fa-trash"></i></td>
                             </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Admin;