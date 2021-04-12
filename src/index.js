// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import ShoppingCart from './components/shoppingCart';
import App from './components/app';
// import Product from './components/product';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';

ReactDOM.render(<BrowserRouter>
                    <App/>
                </BrowserRouter>, document.querySelector('#root'));