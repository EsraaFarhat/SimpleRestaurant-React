import React, { Component } from 'react';

import axios from 'axios'

class ProductForm extends Component {
    state = { 
        id:"",
        name: "",
        price: "",
     }

     async componentDidMount(){
        const id = this.props.match.params.id;
        
        if(id != 'new'){
            const {data} = await axios.get("http://localhost:3001/products/" + id);

            const state = {...this.state};

            state.name = data.name;
            state.price = data.price;
            state.id = data.id;

            this.setState(state);
        }
     }
     handleSubmit = async (e) => {
        e.preventDefault();
        
        if(this.props.match.params.id === 'new'){
            const obj = {...this.state, count:1, isInCart: false};
    
            await axios.post("http://localhost:3001/products", obj);
        }
        else{
            const obj = {...this.state, count:1, isInCart: false};
            delete obj.id;
            
            await axios.put("http://localhost:3001/products/" + this.state.id, obj );
        }

        this.props.history.replace("/admin");
     }

     handleChange = (e) => {
        //Clone
        let state = { ...this.state };
        //Edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set state
        this.setState(state);
      };
    render() { 
        return ( 
            <React.Fragment>
                <h1>{this.props.match.params.id === 'new' ? "Add product" : "Edit product"}</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                    Name
                    </label>
                    <input
                    name="name"
                    type="text"
                    autoFocus
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    id="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                    Price
                    </label>
                    <input
                    name="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.handleChange}
                    className="form-control"
                    id="price"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                {this.props.match.params.id === 'new' ? "Add" : "Edit"}
                </button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default ProductForm;