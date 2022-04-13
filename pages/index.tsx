import React, { useState } from "react";

function Index() {
  const [allProduct,setAllProduct]=useState([
    {id:1,quantity:1,title:"Mackboox Air Pro",price:1575,discountCode:'fms'},
    {id:2,quantity:1,title:"Mackboox M1 Pro",price:653,discountCode:'fm'},
    {id:3,quantity:1,title:"I Phne 13 Pro max",price:344,discountCode:'fmsk'},
    {id:4,quantity:1,title:"R15 v3",price:345,discountCode:'fmswer'},
    {id:5,quantity:1,title:"Tesla",price:654,discountCode:'fmsers'},
    {id:6,quantity:1,title:"Airpods",price:8975,discountCode:'fmsbd'},
    {id:7,quantity:1,title:"HeadPhone",price:434,discountCode:'fmawes'},
    {id:8,quantity:1,title:"Asus",price:345,discountCode:'fw4ms'},
  ])


  const [cartItem,setCartItem] =useState([]);

  interface addCartSingle {
    id:number;
    title:string;
    price: number;
    discountCode:string;
    quantity:number;
  }

  // addtoCart funtion login inside in here

  const addTocart= (addCartItem: addCartSingle)=> {
      console.log(addCartItem)

      let newCart = [...cartItem];
      const findIndex = cartItem.findIndex((item)=> item.id === addCartItem.id)

      if(findIndex >=0 ){
        newCart[findIndex].quantity +=1;
      }else{
        newCart = [...cartItem,addCartItem];
      }

      
      console.log('all the newcart ',newCart)
      setCartItem(newCart)
      console.log('all Cart item',cartItem)

  }

  // count the cartProduct Total
    const TotalPrice =()=> {
    const price = cartItem.reduce((total,item)=> total + (item.quantity * item.price), 0)
    console.log(price)

  }


  
  // this is the addTocart Click Handler
  const CLickhandler=()=> {
  addTocart({id:8,quantity:1,title:"Asus",price:345,discountCode:'fw4ms'});}
  TotalPrice();
  

  // removeTocart funtion login inside in here
  const RemoveItem =(id :number)=> {

    const findIndex = cartItem.findIndex((item)=> item.id === id)

    let newCart = [...cartItem]
    if(findIndex >= 0) {
        if(newCart[findIndex].quantity> 1){
            newCart[findIndex].quantity -= 1;
        }else{
            newCart.splice(findIndex,1)
        }
    }else{
      alert('There are no product with this id')
    }

    setCartItem(newCart)

          console.log('all the newcart  this called by remove funtion',newCart)
      console.log('all Cart item this called by remove funtion',cartItem)
  TotalPrice();


  }
  // this is the removecart Click Handler
  const RemoveSingleRomCart=()=> {
    RemoveItem(8)
  }




  return (
    <div>
      {/* <h1 onClick={CLickhandler}>Hellow</h1> */}
      <h1 >Hellow Faysal</h1>

      {/* <h1 onClick={RemoveSingleRomCart}>Remove from Cart</h1> */}


{/* 
      {cartItem?.map((item)=> (
<SingleProductCart key={item.id} item={item} />
      ))} */}
    </div>
  );
}

export default Index;



export const SingleProductCart = ({item})=> {
  return(
            <div>
          <h1>{item?.title}</h1>
          <p>{item?.price}</p>
          <p>{item?.quantity}</p>
          <p>{item?.discountCode}</p>
        </div>
  )

}