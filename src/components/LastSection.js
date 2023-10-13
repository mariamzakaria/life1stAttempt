import React from "react";
import img1 from "../Photos/fifth1.jpg"
import img2 from "../Photos/fifth2.jpg"
import img3 from "../Photos/fifth3.jpg"
import img4 from "../Photos/fifth4.jpg"
import img5 from "../Photos/fifth5.jpg"
import img6 from "../Photos/fifth6.jpg"
import Card from 'react-bootstrap/Card';


export default function LastSection(){

return(
<div className="last-sec-container">
    <div className="last-sec-imgs">

   
       <div className="my-row">
        <Card.Img variant="top" src={img1} />
       
        <Card.Img variant="top" src={img2} />
        </div>
      
      <div  className="my-row">
        <Card.Img variant="top" src={img3} />
       
        <Card.Img variant="top" src={img4} />
       
        </div>

      <div  className="my-row">
        <Card.Img variant="top" src={img5} />
       
        <Card.Img variant="top" src={img6} />
       
        </div>
    
    
    
    </div>

<div className="last-sec-texts">

<h2>Vintage Style</h2>
<div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> 
<p>when an unknown printer</p>
</div>
<h2>#Lusiontheme</h2>

</div>









</div>



)






}