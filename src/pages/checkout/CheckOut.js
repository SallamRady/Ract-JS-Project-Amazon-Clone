import React, {useEffect} from 'react';
import offer from "../../resources/images/product/offers.jpg";
import {useSelector} from "react-redux";
import MainHeader from "../../components/header/mainHeader";
import './CheckOut.css';
import CheckOutProduct from "./CheckOutProduct";
import Footer from "../../components/footer/Footer";
import {useNavigate} from "react-router";

const CheckOut = () => {
    const Navigator = useNavigate();
    const { user,cart } = useSelector(state=>state);
    let total = 0.0;
    for (const item in cart) {
        console.log(item)
        total += Number(cart[item].price);
    }
    return (
       <>
           <MainHeader/>
           <div className='container-fluid pt-5 pb-5 bg-white'>
               <div className='row'>
                   <div className='col-12 col-sm-8 text-center'>
                       <img style={{float:'right'}} src={offer} width='95%' height='300px' className='mb-5' alt='ad on amazon'/>
                   </div>
                   <div className='col-12 col-sm-4 '>
                       <div className='subTotle pt-5'>
                           <br/>
                           <h3>Cart Summary Info</h3>
                           <br/>
                           <h6>SubTotal ({cart.length} &#160; items) : {total}</h6>
                           <br/>
                           <button
                               onClick={()=>Navigator('/payment')}
                               className='btn btn-warning'>
                               <i className="bi bi-credit-card-2-front"/>&#160;&#160;Check Out
                           </button>
                       </div>
                   </div>
                   <div className='col-12 p-2'>
                       <div className='date'>
                           <h4>Hello,&#160;&#160;{user&&user.email}</h4>
                           <h5>{cart&&cart.length === 0 ?"Your Shopping Cart is Empty":"Your Shopping Cart"}</h5>
                           <hr/>
                           {
                               cart&&cart.map(
                                   pro=>{
                                      return  <CheckOutProduct key={pro.id} product={pro}/>
                                   }
                               )
                           }
                       </div>
                   </div>
               </div>
           </div>
           <Footer/>
       </>
    );
};

export default CheckOut;
