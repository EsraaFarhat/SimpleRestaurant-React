import React, { Component } from 'react';

import qs from 'query-string';

class ProductDetails extends Component {
    state = {  }

    handleSave = () => {
        this.props.history.push("/cart");
        // this.props.history.replace("/cart");
    }

    render() { 
        const product = this.props.products.filter(c => c.id === parseInt(this.props.match.params.id))[0];

        

        const res = qs.parse(this.props.location.search);
        console.log(res);
        return ( 
        <React.Fragment>
            <h1>No. {product.id}</h1>
            <h1>Name: {product.name}</h1>
            <h1>Quantity: {product.count}</h1> 
            <button onClick={this.handleSave} className="btn btn-primary">Save</button>
        </React.Fragment>);
    }
}
 
 
export default ProductDetails;