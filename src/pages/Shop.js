import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import ShopPageDesign from "../components/ShopPageDesign";

import banner from "../Photos/afghanistan2.jpg"


export default function Shop(props){


return(
<div className="my-shop-container  height-40">
    <div className="shop-banner" dir="rtl" lang="ar">
    <img src={banner} alt="shop banner" className="shop-banner-img" dir="rtl" lang="ar"/>
    </div>
<Container fluid="sm" className="">
<Row xs={2} md={4} className="g-4 margin-5">
{/*ProductDesign page is rendered here*/}
{props.shopProducts.map((product)=>{

return( <Col key={product.id}>
<ShopPageDesign product={product} addToCart={props.addToCart} /> {/*increase={props.increase} decrease={props.decrease} delete={props.delete} */}

</Col>)

})}

</Row>

{/*<Button variant="danger" className="reset-btn" onClick={this.props.reset}>Reset</Button>*/}
</Container>
<div className="all-products-btn-div">
<Button variant="secondary" className="" as={Link} to="/" >Back Home</Button>
</div>
</div>





)





} 