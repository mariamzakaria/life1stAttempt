import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.css"
import { Link } from "react-router-dom";
import img1 from "../Photos/boys.jpg"
//import Row from 'react-bootstrap/Row';

export default function OffersSection (props){

return(

<div className="offers-container">
    <div className="">
    {/*<Row xs={1} md={1} className="g-4">*/}
    <Card className=" text-dark offers-card1" bg="warning" dir="rtl">
      <Card.Img src={img1} alt="Card image" className="offers-card1-img"/>
      <Card.ImgOverlay className="bottom-text" >
       {/* <Card.Text className="offer-text" >تطوير المجتمع</Card.Text>
        <Card.Title className="offer-text">
          Christmas 40% off
        </Card.Title>
       {/* <Card.Text>Last updated 3 mins ago</Card.Text>*/}
       {/* <Button className="offer-text font-1-half" variant="outline-dark" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >تعرف على المزيد</Button>*/}
      </Card.ImgOverlay>
    </Card>
    

    </div>
   
    <Card  className="my-card offers-card1 transparent">
       
      <div>
      <Card.Body className="my-card-body">
      <div>
      <Card.Title className="offer-text light_green_text" dir="rtl"> تطوير المجتمع</Card.Title>
      <Card.Title className="offer-text weight_900" dir="rtl">يبني</Card.Title>
      </div>
        <div>
        <Card.Title className="offer-text weight_900" dir="rtl">صمود</Card.Title>
        <Card.Title className="offer-text light_green_text" dir="rtl">لبناء شيء رائع!</Card.Title>
        </div>
        {/*<Card.Text>
          With supporting text below as a natural lead-in to additional content.
</Card.Text>*/}
        <Button variant="outline-dark" className="offer-text font-1-half" as={Link} to="/Shop" onClick={()=>props.decrease(this.props.product)} >تعرف على المزيد</Button>
      </Card.Body>
      </div>
    </Card>

  




</div>


)








}