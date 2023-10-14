import React from "react";
import Container from 'react-bootstrap/Container';
import "../style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
///import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillCartFill } from 'react-icons/bs';

import { Link } from "react-router-dom";
import "../style/style.css"

function Header(props){
//render(){
/*let cartColor=()=>{
  if(this.props.cartItems===0){
    return "cart-items-quantity red"
  }else{
    return "cart-items-quantity green"
  }
}*/
    return( 

     <div className="top_background_image">
          <Container dir="rtl" className=" promotional_phrases_section">
          <Row>
            <Col> 
            <div className="header_text_div">
            <Row className="weight_900">30
            </Row>
            <Row className="light_green_text">
                عاما من خدمة الانسانية
            </Row>
            </div>
            </Col>

            <Col>
            <div className="header_text_div">
            <Row className="weight_900">550
            </Row>
            <Row className="light_green_text">
        مليون دولار وزعت على المستحقين 
            </Row>
            </div>
            </Col>

            <Col>
            <div className="header_text_div">
            <Row className="weight_900">13
            </Row>
            <Row className="light_green_text">
                مكتبا حول العالم
            </Row>
            </div></Col>

            <Col>
            <div className="header_text_div no_border">
                <Row className="weight_900">850
            </Row>
            <Row className="light_green_text">
               مشروع مياه
            </Row>
            </div></Col>
          </Row>
        </Container>
        </div>

    )

       

   
//}
}

export default Header;



