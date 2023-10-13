import React from "react";
import CartDesign from "../components/CartDesign"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function MyCart (props){
 return(
<div className="cart-page-container">
{props.myCart.length ===0 ? 
    <div className="cart-items-container width-100" border="danger"><h1>Your Cart Is Empty</h1> <div>
    <div>
    <Button variant="danger" className="get-price-btn margin-5" onClick={props.getTotalPrice}>Get Total Price</Button> Total Price:{props.totalPrice}$
    </div>
    <Button variant="secondary" className="get-price-btn" as={Link} to="/shop" onClick={props.reset}>Continue Shopping</Button>
    </div>
    </div> : 
    <div className="cart-items-container width-100 ">
  <Container fluid="sm" className="">      
<Row xs={2} md={4} className="g-4 cart-grid">
{/*ProductDesign page is rendered here*/}
{props.myCart.map((product)=>(

 <Col key={product.id}>
<CartDesign product={product}  increase={props.increase} decrease={props.decrease} myDelete={props.myDelete} /> 

</Col>

))}

</Row>
</Container>
<div>
<div>
<Button variant="danger" className="get-price-btn margin-5" onClick={props.getTotalPrice}>Get Total Price</Button> Total Price:{props.totalPrice}$
</div>
<Button variant="secondary" className="get-price-btn" as={Link} to="/shop" onClick={props.reset}>Continue Shopping</Button>
</div>
</div>}

    </div>
 )




}