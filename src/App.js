import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {auth} from "./units/Firebase";
import {setUser} from "./redux/actions/user";
import MainHeader from "./components/header/mainHeader";
import Product from "./components/products/Product";
import Footer from "./components/footer/Footer";
import CheckOut from "./pages/checkout/CheckOut";
import Payment from "./pages/payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "./units/axios";
import Guard from "./components/guard/Guard";

const promise = loadStripe("pk_test_51Klc7QIx0ZhOngyz5j2cAjQoF9Y7fIsmB9Ff8uoLaeunzr0xU4okWrwYfpEkzpBvlyplFWoYrBqcfY0O89kiQPXE00m64qOgDl")


function App() {
     //Declaration.....
    const dispatch = useDispatch();
    //methods.....
    useEffect(() => {
        auth.onAuthStateChanged(
            (authUser) =>{
                if(authUser){
                    dispatch(setUser(authUser))
                }else{
                    dispatch(setUser(null))
                }
            }
        )
    }, []);


  return (
    <div className="App">
        <Routes>
            <Route path='/' element={
               <>
                   <MainHeader/>
                   <Home/>
               </>
            }/>
            <Route path='/product/:id' element={
                <>
                    <MainHeader/>
                    <Product/>
                    <Footer/>
                </>
            }/>
            <Route path='/checkout' element={
                <Guard>
                    <CheckOut/>
                </Guard>
            }/>
            <Route path='/payment' element={
                <>
                    <MainHeader/>
                    <Elements stripe={promise}>
                        <Guard>
                            <Payment/>
                        </Guard>
                    </Elements>
                    <Footer/>
                </>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
