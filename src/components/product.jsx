import React, { Component } from "react";

import {Link} from 'react-router-dom';

class Product extends Component {
//   state = {
//       name: this.props.product.name,
//       count: this.props.product.count,
//       imgUrl: "logo512.png",
//       names: ["Esraa", "Asmaa", "Sara"]
//   };

    getClasses(){
        return this.props.product.count === 0 ? "badge badge-warning m-3" : "badge badge-primary m-3";

    }

    


  render() {
    //   const styles = {color : "green"};

    // let classes;
    // if(this.state.count === 0) classes = "badge badge-warning m-3";
    // else classes = "badge badge-primary m-3";

    return (
        <div className="row">
            <div className="col-2">
                <span style={{ color : "green" }}>
                    <Link to={`/products/${this.props.product.id}`}>
                    {this.props.product.name}</Link></span>
            </div>
            {/* <img src={this.state.imgUrl} alt="image"/> */}

            {/* method 1 */}
            {/* <span style={styles}>{this.state.name}</span> */}   

            {/* method 2 */}
            <div className="col">
                <span className={this.getClasses()}>{this.props.product.count}</span>
                <button onClick={ () => this.props.onIncrement(this.props.product,1)} className="btn btn-success">+</button>
                <span style={{cursor:"pointer"}} className="m-2" onClick={ () => {this.props.onDelete(this.props.product)}}><i className="fas fa-trash"></i></span>
            </div>

            {/* {this.state.names.length == 0 && <h4>No names</h4>}
            <ul>
                {this.state.names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul> */}

            
        </div>
    );
  }
}

export default Product;
