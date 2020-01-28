import React from 'react';
// import logo from './logo.svg';
import './ProductsView.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import itemList from '../viewItems.json';
import LoginForm from '../LoginForm/LoginForm.js'

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }
    render () {
        return (
            <div>
                {/* <Row gutter={40}>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle">
                        {itemList.map(co => <div><img src={`${co.image}`} className="imgStyle"></img></div>)}
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle">col-4</Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle">col-4</Col>
                </Row>
                <Row gutter={40}>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle" >col-4</Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle">col-4</Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="gridStyle">col-4</Col>
                </Row> */}
                {/* <div style={{height: '50px',backgroundColor: 'lightgrey'}}>
                    <button className="btn btn-primary" onClick={this._onButtonClick}>Login</button>
                    { this.state.showComponent ?
                    <LoginForm /> : null }
                </div> */}

                <Row gutter={40}>
                    {(itemList).map(co => 
                        <Col 
                        xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}
                        lg={{ span: 4 }} xl={{ span: 4 }}
                        className="gridStyl">
                            <div style={{display:"block"}}>
                                <img src={`${co.image}`} width="100%"/>
                            </div>
                            <div className="watchText">
                                {co.name}
                            </div>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}

export default ProductsPage;
