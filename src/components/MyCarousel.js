import React,{Component} from "react";
//import  Carousel  from 'react-bootstrap/Carousel';
import "../style/style.css"





export default class MyCarousel extends Component{
render(){
return(

        
        
           
           <div className="red">
                <a href={this.props.item.url}>
            <img className="d-block w-100" src={this.props.item.img} alt="First slide" />
                </a>
        
          </div>
          
       
    





)}





}