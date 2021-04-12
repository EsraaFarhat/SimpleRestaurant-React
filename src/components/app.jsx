import React, { Component } from 'react';
// import { Route } from 'react-router';
import Navbar from './navbar';
import ShoppingCart from './shoppingCart';
import {Route} from 'react-router-dom';
import {Switch, Redirect} from 'react-router-dom';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify';

import About from './about';
import Contact from './contact';
import Home from './home';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';
import Login from './login';
import Admin from './admin';
import ProductForm from './productForm';



class App extends Component {
    state = {  
        // products : [
        //     { id: 1, name: "Burger", count: 1, price:20, isInCart:false },
        //     { id: 2, name: "fries", count: 1, price:30, isInCart:false },
        //     { id: 3, name: "cola", count: 1, price:50, isInCart:false   },
        // ]
        products: []
    };

    async componentDidMount(){
        // const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(data);

        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(res => res.json())
        // .then(data => console.log(data));

        const {data} = await axios.get("http://localhost:3001/products");

        this.setState({products: data})
    }

    incrementHandler = (product,num) => {
        let products = [...this.state.products];
        let index = products.indexOf(product);
        products[index] = {...products[index]};

        products[index].count += num;

        this.setState({ products });
        // console.log("clicked");
    }

    deleteHandler = async (product) => {
        const oldProducts = [...this.state.products];
        // console.log("deleted");
        const products = this.state.products.filter((p) => p.id !== product.id);

        this.setState({ products });

        // call backend
        try{
            await axios.delete("http://localhost:3001/products/" + product.id);
        }catch(ex){
            toast.error("Can't delete");
            // toast("Can't delete");

            this.setState({products : oldProducts});

        }

    }

    resetHandler = () => {
        // console.log("reset");
        let products = [...this.state.products];
        products = products.map((product) => {
            product.count = 0;
            return product;
        });
        this.setState({ products });
    }

    handelInCartChange = (product) => {
        let products = [...this.state.products];
        let index = products.indexOf(product);
        products[index] = {...products[index]};

        products[index].isInCart = !products[index].isInCart;

        this.setState({products});
    }

    render() { 
        return ( 
            <React.Fragment>
                <ToastContainer />
                <Navbar productsCount={this.state.products.filter(p => p.isInCart === true).length}/>
                <main className="container">
                    {/* <ShoppingCart 
                        products={this.state.products} 
                        onIncrement={this.incrementHandler}
                        onDelete={this.deleteHandler}
                        onReset={this.resetHandler}
                    /> */}
                    <Switch>
                        <Route path="/products/:id" render={(props) => (
                            <ProductDetails 
                            products={this.state.products}
                            {...props} />
                        )} />
                        <Route path="/cart" render={(props) => (
                            <ShoppingCart 
                                products={this.state.products} 
                                onIncrement={this.incrementHandler}
                                onDelete={this.handelInCartChange}
                                onReset={this.resetHandler}
                                {...props}
                            />
                        )}/>
                        <Route path="/menu" render={(props) => (
                            <Menu 
                                products={this.state.products} 
                                onClick={this.handelInCartChange}
                                {...props}
                            />
                        )}/>
                        <Route path="/admin" render={(props) => (
                            <Admin 
                                products={this.state.products} 
                                onDelete={this.deleteHandler}
                                {...props}
                            />
                        )} />
                        <Route path="/productForm/:id" render={(props) => (
                            <ProductForm
                                products={this.state.products} 
                                {...props}/>
                        )} />
                        <Route path="/login" component={Login} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact}/>
                        <Route path="/notFound" component={NotFound}/>
                        <Route path="/home" component={Home}/>
                        <Redirect from="/" to="/home" />
                        {/* <Route path="/" component={Home}/> */}
                        <Redirect to="/notFound"/>
                    </Switch>
                    

                </main>
            </React.Fragment>
            );
    }
}
 
export default App;