import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsFillCartFill } from 'react-icons/bs';
import "../style/style.css"
//import { Link } from "react-router-dom";




function ShopPageDesign (props) {




    return(
       

        
       
          <Card key={props.product.id}>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body>
              <Card.Title className="card-title">{props.product.name} </Card.Title>{/*<span>{this.props.product.quantity} </span> */}
              <Card.Text>Price: {props.product.price}$</Card.Text>
              <Button  onClick={()=>props.addToCart(props.product)} ><BsFillCartFill /></Button>  
            {/*   <div className="btns">
           <Button variant="success" onClick={()=>props.increase(this.props.product)}>+</Button>
            <Button variant="warning" onClick={()=>props.decrease(this.props.product)}>-</Button>
            <Button variant="danger" onClick={()=>props.delete(this.props.product)}>Delete</Button>
    </div>*/}
            </Card.Body>
          </Card>
       









    )






}

export default ShopPageDesign//ProductDesign