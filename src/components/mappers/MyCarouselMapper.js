import React ,{Component} from "react";
import MyCarousel from "../MyCarousel.js";
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.rtl.min.css';



export default class MyCarouselMapper extends Component{
render(){

   

    return(
       
        
        <Carousel>

       
        {this.props.carouselItems.map((item)=>(
             <Carousel.Item key ={item.id} >
       
            <MyCarousel  item={item} />
            </Carousel.Item>
              
            ))}
        </Carousel>


    )}
}