import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.css"
import { Link } from "react-router-dom";




function ProductsDesignSec2 (props) {




    return(
       


       
          <Card key={props.product.id}>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body>
              <Card.Title className="card-title" as={Link} to={props.product.url}>{props.product.name} </Card.Title>{/*<span>{this.props.product.quantity} </span> */}
              {/*<Card.Text>Price: {props.product.price}$</Card.Text>
              <Button variant="outline-primary" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >Shop Now</Button>*/}
            {/*   <div className="btns">
           <Button variant="success" onClick={()=>props.increase(this.props.product)}>+</Button>
            <Button variant="warning" onClick={()=>props.decrease(this.props.product)}>-</Button>
            <Button variant="danger" onClick={()=>props.delete(this.props.product)}>Delete</Button>
    </div>*/}
            </Card.Body>
          </Card>
       









    )






}

export default ProductsDesignSec2//ProductDesign