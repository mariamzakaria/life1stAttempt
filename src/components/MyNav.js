import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/style.css"
///import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillCartFill } from 'react-icons/bs';

import { Link } from "react-router-dom";

function MyNav(props){
//render(){
/*let cartColor=()=>{
  if(this.props.cartItems===0){
    return "cart-items-quantity red"
  }else{
    return "cart-items-quantity green"
  }
}*/
    return( 



        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar" dir="rtl" lang="ar">
        <Container className="nav-container">
          
       <div className="pages-nav-container">
       <Nav.Link className="white" as={Link} to="/" dir="rtl" lang="ar">الرئيسية</Nav.Link>
        <Nav.Link  className="white" as={Link} to="/Shop" dir="rtl" lang="ar">تبرع</Nav.Link>
       
       </div>
          <Navbar.Brand href="#home">Life</Navbar.Brand>
          {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
          <Nav.Link as={Link} to="/cart" dir="rtl" lang="ar">
           {props.myCart.length===0 ? <div className="cart-items-quantity red">{props.myCart.length}</div>: 
           <div className="cart-items-quantity green">{props.myCart.length}</div> }
        {/*  <div className="cart-items-quantity red">{props.myCart.length}</div> */} 
          <BsFillCartFill className="white font-25 " dir="rtl" lang="ar"/></Nav.Link>
        { /* <Navbar.Collapse id="responsive-navbar-nav">
         
            <Nav>
             <Nav.Link href="#deets">hj{this.props.userName}</Nav.Link>
              <Nav.Link  eventKey={2} href="#memes"> oo{this.props.cartItems}</Nav.Link>
            </Nav>
    </Navbar.Collapse>*/}
        </Container>
      </Navbar>


    )

       

   
//}
}

export default MyNav;