import React from "react";
import ProductsDesignSec1 from "../ProductsDesignSec1";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function ProductsMapperSec1 (props){



return(
/*<div>
{this.props.productsList.map((e)=>{
       return (<h1 key={e.id}>{e.name}</h1>
       )
      })}
</div>*/

    
<div className="my-cart-container margin-5">
<Container fluid="sm">
<Row xs={3} md={3} className="g-4 margin-5">
{/*ProductDesign page is rendered here*/}
{props.productsSection1.map((product)=>{

return( <Col key={product.id}>
<ProductsDesignSec1 product={product}  /> {/*increase={props.increase} decrease={props.decrease} delete={props.delete} */}

</Col>)

})}

</Row>
{/*<Button variant="danger" className="reset-btn" onClick={this.props.reset}>Reset</Button>*/}
</Container>
</div>





)







}

export default ProductsMapperSec1;