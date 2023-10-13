import React, {useState} from "react";
import MyNav from "./components/MyNav.js"
//import MyCarousel from "./components/MyCarousel.js";
import img1 from "./Photos/afghanistan2.jpg"
import img2 from "./Photos/moroco2.jpg"
import MyCarouselMapper from "./components/mappers/MyCarouselMapper.js";
import img3 from "./Photos/s1.jpg"
import img4 from "./Photos/s2.jpg"
import img5 from "./Photos/s3.jpg"
import img6 from "./Photos/s4.jpg"
import ProductsMapperSec1 from "./components/mappers/ProductsMapperSec1";
import { Routes, Route } from "react-router-dom"

import Shop from "./pages/Shop.js";
import MyCart from "./pages/MyCart.js";
import img7 from "./Photos/t1.jpg"
import img8 from "./Photos/t2.jpg"
import img9 from "./Photos/t3.jpg"
import img10 from "./Photos/t4.jpg"
import ProductsMapperSec2 from "./components/mappers/ProductsMapperSec2.js";
import OffersSection from "./components/OffersSection.js";
import LastSection from "./components/LastSection.js";
import img11 from "./Photos/shopC1.jpg"
import img12 from "./Photos/shopC2.jpg"
import img13 from "./Photos/shopC3.jpg"
import img14 from "./Photos/shopC4.jpg"
import img15 from "./Photos/shopC5.jpg"
import img16 from "./Photos/shopC6.jpg"
import img17 from "./Photos/shopC7.jpg"
import img18 from "./Photos/shopC8.jpg"

//import { useState } from "react";


function App(props){

 let carouselItems=[{img:img1,id:1},{img:img2,id:2}]

 //first section products 
 let productsSection1=[{id:1,name:"Clothing",price:200,img:img3, quantity:5},
 {id:2,name:"Bag Brand",price:100,img:img4, quantity:20},
 {id:3,name:"Accessories",price:150,img:img5, quantity:6},
 {id:4,name:"Shoes",price:300,img:img6, quantity:8}]

 //second section products (Best Selling)
 let productsSection2=[{id:1,name:"Quilted Gilet With Hood",price:150.00,img:img7, quantity:0},
 {id:2,name:"Quilted Gilet With Hood",price:110.00,img:img8, quantity:0},
 {id:3,name:"Quilted Gilet With Hood",price:200.00,img:img9, quantity:0},
 {id:4,name:"Quilted Gilet With Hood",price:250.00,img:img10, quantity:0}]

 let shopProducts=[{id:1,name:"Hood",price:100.00,img:img11, quantity:0},
 {id:2,name:"Shirt",price:120.00,img:img12, quantity:0},
 {id:3,name:"Shirt",price:150.00,img:img13, quantity:0},
 {id:4,name:"Shirt",price:210.00,img:img14, quantity:0},
 {id:5,name:"Shirt",price:200.00,img:img15, quantity:0},
 {id:6,name:"Shirt",price:250.00,img:img16, quantity:0},
 {id:7,name:"Jeans",price:320.00,img:img17, quantity:0},
 {id:8,name:"Jeans",price:350.00,img:img18, quantity:0},
 {id:9,name:"Hood",price:105.00,img:img11, quantity:0}]

const [myCart,setmyCart]=useState([])

const [totalPrice,srtTotalPrice]=useState(0)
  /**********************ADD TO CART FUNCTION****************************************/
const addToCart= (product)=>{
  console.log(product);
  
  
  if(myCart.length===0){
   product.quantity++
    myCart.push(product)
    setmyCart(myCart)
  }else {  {/*} if(myCart.length>0)*/}
    let matchingProds= myCart.filter((cartProduct)=>{return product.id===cartProduct.id})
   
     if(matchingProds.length===0){
      product.quantity++
      myCart.push(product)
      setmyCart(myCart)
     }else { {/* if(matchingProds.length>0)  */}
      setmyCart( myCart.map((cartProduct)=>{
        if(product.id==cartProduct.id){ cartProduct.quantity++}
       
      return cartProduct
      }))
      
     }
     
   
  }
  
  console.log(myCart.length);
  console.log(myCart);


 }
 console.log(myCart);

 /**********************INCREASE FUNCTION****************************************/
 const increase=(selectedProduct)=>{
  
  setmyCart(myCart.map((product)=>{
    if(product.id===selectedProduct.id){
      product.quantity++
    }
  
  return product
  
  }))
 
  
  }

 /**********************DECREASE FUNCTION****************************************/
 const decrease=(selectedProduct)=>{
  
  setmyCart(myCart.map((product)=>{
    if(product.id===selectedProduct.id  && product.quantity>1){
      product.quantity--
  
    }
  
  return product
  
  }))
  //set state
  //this.setState({productsList,cartItems})
  
  
  }


  /**********************DELETE FUNCTION****************************************/
  const myDelete=(selectedProduct)=>{

    setmyCart(myCart.filter((product)=>{
      
    return product !== selectedProduct
    
    }))
    
    
    }

    /**********************GET TOTAL PRICE FUNCTION****************************************/
  const getTotalPrice=()=>{

    if(myCart.length>0){
    srtTotalPrice( myCart.map((product)=>{
      
    return product.price *product.quantity
    
    }).reduce((acc,prod)=>{
      return eval(acc+prod)
    }))}else if(myCart.length===0){
      srtTotalPrice(0)}
    
    
    }


  return (
    <div className="App">
      <MyNav myCart={myCart}/>
      <Routes>
      <Route path="/" element={ <div><MyCarouselMapper carouselItems={carouselItems}/> 
                                <ProductsMapperSec1 productsSection1={productsSection1}/>
                                <ProductsMapperSec2 productsSection2={productsSection2}/>
                                <OffersSection/>
                                <LastSection/></div>}/>
      {/*<Route path="/" element={ <ProductsMapperSec1 productsSection1={this.productsSection1}/>}/>
      <Route path="/" element={ <Home />}/>*/}
      <Route path="/Shop" element={ <Shop shopProducts={shopProducts} addToCart={addToCart}/>}/>
      <Route path="/Cart" element={ <MyCart myCart={myCart} myDelete={myDelete} increase={increase} decrease={decrease} totalPrice={totalPrice} getTotalPrice={getTotalPrice}/>}/>
      </Routes>
    </div>
  );
}

export default App;
