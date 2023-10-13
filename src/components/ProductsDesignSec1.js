import React from "react";
import Card from 'react-bootstrap/Card';
import "../style/style.css"




function ProductsDesignSec1 (props) {




    return(
       


       
          <Card key={props.product.id}>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body>
              <Card.Title className="card-title">{props.product.name} </Card.Title>{/*<span>{this.props.product.quantity} </span> */}
              <Card.Text>Items: {props.product.quantity}</Card.Text>
            {/*   <div className="btns">
           <Button variant="success" onClick={()=>props.increase(this.props.product)}>+</Button>
            <Button variant="warning" onClick={()=>props.decrease(this.props.product)}>-</Button>
            <Button variant="danger" onClick={()=>props.delete(this.props.product)}>Delete</Button>
    </div>*/}
            </Card.Body>
          </Card>
       









    )






}

export default ProductsDesignSec1//ProductDesign