import React ,{Component} from "react";
import MyCarousel from "../MyCarousel.js";
import  Carousel  from 'react-bootstrap/Carousel';


export default class MyCarouselMapper extends Component{
render(){

   

    return(
       
        
        <Carousel dir="rtl" lang="ar">

       
        {this.props.carouselItems.map((item)=>(
             <Carousel.Item key ={item.id} dir="rtl" lang="ar">
       
            <MyCarousel  item={item} dir="rtl" lang="ar"/>
            </Carousel.Item>
              
            ))}
        </Carousel>

    )}
}