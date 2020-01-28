import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsPage from './ProductsPage/ProductsPage.js'
import LoginForm from '../src/LoginForm/LoginForm.js'
import { Provider } from 'react-redux';
import store from './reducers/store';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
        {/* <ProductsPage/> */}
        <Provider store={store}>
          <LoginForm />
        </Provider>
    </div>
    
  );
}

export default App;
