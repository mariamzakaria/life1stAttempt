import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.css"
import { Link } from "react-router-dom";
import img1 from "../Photos/f1.png"
//import Row from 'react-bootstrap/Row';

export default function OffersSection (props){

return(

<div className="offers-container">
    <div className="">
    {/*<Row xs={1} md={1} className="g-4">*/}
    <Card className=" text-dark offers-card1" bg="warning">
      <Card.Img src={img1} alt="Card image" className="offers-card1-img"/>
      <Card.ImgOverlay className="bottom-text" >
        <Card.Text className="offer-text" >MERRY</Card.Text>
        <Card.Title className="offer-text">
          Christmas 40% off
        </Card.Title>
       {/* <Card.Text>Last updated 3 mins ago</Card.Text>*/}
        <Button className="offer-text font-1-half" variant="outline-dark" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >Shop Now</Button>
      </Card.ImgOverlay>
    </Card>
    

    </div>
   
    <Card bg="warning" className="my-card offers-card1">
       
      <div>
      <Card.Body className="my-card-body">
      <div>
      <Card.Title className="offer-text">Your</Card.Title>
      <Card.Title className="offer-text">Next</Card.Title>
      </div>
        <div>
        <Card.Title className="offer-text">Purchase</Card.Title>
        <Card.Title className="offer-text">10% off</Card.Title>
        </div>
        {/*<Card.Text>
          With supporting text below as a natural lead-in to additional content.
</Card.Text>*/}
        <Button variant="outline-dark" className="offer-text font-1-half" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >Shop Now</Button>
      </Card.Body>
      </div>
    </Card>

  




</div>


)








}