import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.css" 
import {  BsFillTrashFill } from "react-icons/bs";



export default function CartDesign (props){




    return(
       


       
          <Card key={props.product.id}>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body>
              <Card.Title>{props.product.name} <span>{props.product.quantity} </span></Card.Title>
              <Card.Text>{props.product.price}$</Card.Text>
              <div className="btns">
            <Button variant="success" onClick={()=>props.increase(props.product)}>+</Button>
            <Button variant="warning" onClick={()=>props.decrease(props.product)}>-</Button>
            <Button variant="danger" onClick={()=>props.myDelete(props.product)}><BsFillTrashFill /></Button>
            </div>
            </Card.Body>
          </Card>
       









    )







}

