import React, {useState} from "react";
import MyNav from "./components/MyNav.js"
import Header from "./components/Header.js"
//import MyCarousel from "./components/MyCarousel.js";
import img1 from "./Photos/afghanistan2.jpg"
import img2 from "./Photos/moroco2.jpg"
import MyCarouselMapper from "./components/mappers/MyCarouselMapper.js";
/*import img3 from "./Photos/s1.jpg"
import img4 from "./Photos/s2.jpg"
import img5 from "./Photos/s3.jpg"
import img6 from "./Photos/s4.jpg"*/
import ProductsMapperSec1 from "./components/mappers/ProductsMapperSec1";
import { Routes, Route } from "react-router-dom"

import Shop from "./pages/Shop.js";
import MyCart from "./pages/MyCart.js";
import img7 from "./Photos/log1.jpg"
import img8 from "./Photos/log2.png"
import img9 from "./Photos/log3.png"
//import img10 from "./Photos/t4.jpg"
import ProductsMapperSec2 from "./components/mappers/ProductsMapperSec2.js";
import OffersSection from "./components/OffersSection.js";
import LastSection from "./components/LastSection.js";
import img11 from "./Photos/comunity1.jpg"
import img12 from "./Photos/health.jpg"
import img13 from "./Photos/education.jpg"
import img14 from "./Photos/emergncy2.jpg"
import img15 from "./Photos/water2.jpg"
/*import img16 from "./Photos/shopC6.jpg"
import img17 from "./Photos/shopC7.jpg"
import img18 from "./Photos/shopC8.jpg"*/
import img19 from "./Photos/gaza.jpg"
import img20 from "./Photos/libya.jpg"

//import { useState } from "react";


function App(props){

 let carouselItems=[{img:img1,id:1,url:"https://www.lifeusa.org/emergency"},{img:img2,id:2,url:"https://life.givecloud.co/product/359C41A/morocco-earthquake-relief"},{img:img19,id:3,url:"https://www.lifeusa.org/emergency"},{img:img20,id:4,url:"https://life.givecloud.co/product/0BEFF85/libya-flood-relief"}]

 //first section products 
 /*let productsSection1=[{id:1,name:"Clothing",price:200,img:img3, quantity:5},
 {id:2,name:"Bag Brand",price:100,img:img4, quantity:20},
 {id:3,name:"Accessories",price:150,img:img5, quantity:6},
 {id:4,name:"Shoes",price:300,img:img6, quantity:8}]*/

 //second section products (Best Selling)
 let productsSection2=[{id:1,name:"أكبر المساهمات الخيرية في الولايات المتحدة 2023",price:150.00,img:img7, quantity:0,url:"https://www.lifeusa.org/post/the-biggest-charitable-contributions-in-the-u-s-2023"},
 {id:2,name:"سماع النداء: لويزيانا",price:110.00,img:img8, quantity:0,url:"https://www.lifeusa.org/post/hearing-the-call-louisiana"},
 {id:3,name:"فيضانات غير مسبوقة في ليبيا: دعوة للتضامن والعمل العالمي",price:200.00,img:img9, quantity:0,url:"https://www.lifeusa.org/post/unprecedented-flooding-in-libya-a-call-for-global-solidarity-and-action"}]

 let shopProducts=[
 {id:1,name:"الصحة",price:120.00,img:img12, quantity:0},
 {id:2,name:"التعليم",price:150.00,img:img13, quantity:0},
 {id:3,name:"الاغاثة العاجلة",price:210.00,img:img14, quantity:0},
 {id:4,name:"سقيا الماء",price:200.00,img:img15, quantity:0},
 /*{id:5,name:"تطوير المجتمع",price:100.00,img:img11, quantity:0},
 {id:6,name:"Shirt",price:250.00,img:img16, quantity:0},
 {id:7,name:"Jeans",price:320.00,img:img17, quantity:0},
 {id:8,name:"Jeans",price:350.00,img:img18, quantity:0},
{id:9,name:"Hood",price:105.00,img:img11, quantity:0}*/]

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
      <Route path="/" element={ <div>
                                <Header/>
                                <MyCarouselMapper carouselItems={carouselItems}/> 
                               {/* <ProductsMapperSec1 productsSection1={productsSection1}/>*/}
                                <ProductsMapperSec2 productsSection2={productsSection2}/>
                                <OffersSection/>
                                {/*<LastSection/>*/}</div>}/>
      {/*<Route path="/" element={ <ProductsMapperSec1 productsSection1={this.productsSection1}/>}/>
      <Route path="/" element={ <Home />}/>*/}
      <Route path="/Shop" element={ <Shop shopProducts={shopProducts} addToCart={addToCart}/>}/>
      <Route path="/Cart" element={ <MyCart myCart={myCart} myDelete={myDelete} increase={increase} decrease={decrease} totalPrice={totalPrice} getTotalPrice={getTotalPrice}/>}/>
      </Routes>
    </div>
  );
}

export default App;
