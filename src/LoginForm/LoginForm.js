import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/reducer';
import './LoginForm.css';
import ProductsPage from '../ProductsPage/ProductsPage.js'
import ProductsView from '../ProductsView/ProductsView.js'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>

          <div className="form-group">
            <input type="submit" value="Login" />
          </div>
          { isLoginPending && <div className="message">Please wait...</div> }
          { !isLoginSuccess && <div className="message">Logged Out.</div> }
          { isLoginSuccess && <div className="message">Logged In.</div> }
          { loginError && <div className="message">{loginError.message}</div> }
        </div>

        {/* <div > */}
        {/* { isLoginPending && <div>Please wait...</div> }
        { !isLoginSuccess && <div className="message">Logged Out.
            
          </div> }
          { isLoginSuccess && <div className="message">Logged In.
            <ProductsPage />
          </div> }
          { loginError && <div>{loginError.message}</div> } */}
        {/* </div> */}

        <div className="page-header">
          <h2>Watch Gallery</h2>
        </div>
        <div>        
          { !isLoginSuccess && <div>
            <ProductsView />
          </div> }
          { isLoginSuccess && <div>
            <ProductsPage />
          </div> }        
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);