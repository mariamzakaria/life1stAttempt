

import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ProductsDesignSec2 from './../ProductsDesignSec2';
import { Link } from "react-router-dom";


function ProductsMapperSec2 (props){



return(
/*<div>
{this.props.productsList.map((e)=>{
       return (<h1 key={e.id}>{e.name}</h1>
       )
      })}
</div>*/

    
<div className="my-cart-container margin-5 height-40">
<Container fluid="sm" className="sec2-container">
<Row xs={2} md={4} className="g-4 margin-5">
{/*ProductDesign page is rendered here*/}
{props.productsSection2.map((product)=>{

return( <Col key={product.id}>
<ProductsDesignSec2 product={product}  /> {/*increase={props.increase} decrease={props.decrease} delete={props.delete} */}

</Col>)

})}

</Row>
<div className="all-products-btn-div">
<Button variant="outline-danger" className="all-products-btn" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >All Products</Button>
</div>
{/*<Button variant="danger" className="reset-btn" onClick={this.props.reset}>Reset</Button>*/}
</Container>
</div>





)







}

export default ProductsMapperSec2;
























