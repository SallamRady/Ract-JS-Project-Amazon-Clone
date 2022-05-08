import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CheckOutProduct from "../checkout/CheckOutProduct";
import {Form} from "react-bootstrap";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {auth, db} from "../../units/Firebase";
import {paymentDone, setUser} from "../../redux/actions/user";
import axios from "../../units/axios";
import {useNavigate} from "react-router";

const Payment = () => {
    const Navigator = useNavigate();
    const {user,cart} = useSelector(state=>state)
    let total = 0.0;
    for (const item in cart) {
        console.log(item)
        total += Number(cart[item].price);
    }
    const dispatch = useDispatch();
    const [successed, setSuccessed] = useState(false);
    const [proccessing, setProccessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    //methods.....
    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method:'POST',
                url:`/payment/create?total=${total*100}`
            })
            setClientSecret(response);
        }
        getClientSecret();
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProccessing(true);
        for (let i=0;i<100000;i++){console.log(' ')}
        dispatch(paymentDone())
        Navigator('/')
        const payload = await stripe.confirmCardPayment('sk_test_51Klc7QIx0ZhOngyzxhAZMfF6pR3ey9pI4sit2KlGwUOw7jB6gg9k2u5mIfnSaNRFYswaxby5F4ktD9rWcPd43ZEf00BspazeIt', {
            payment_method: {
                card: CardElement,
                billing_details: {
                    name: 'Jenny Rosen',
                },
            },
        }).then(({paymentIntent})=>{
            db.collection("users").doc(user && user.uid).collection("orders").doc(paymentIntent.id).set({
                cart:cart,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            });
            setSuccessed(true);
            setError(null);
            setProccessing(false);
           Navigator('/orders') ;
        }).catch(
            (err)=>console.log('err:'+err)
        )
        console.log('payload',payload)
    };
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error?e.error.message:'')
    };
    return (
        <div className='container-fluid bg-white'>
            <div className='row pt-5'>
                <div className='col-11 m-auto d-flex'>
                    <h5 style={{width: '20%'}}>Delivery Address</h5>
                    <div className='address'>
                        <p>{user&&user.email}</p>
                        <p>Tahta city, the village of Najwa Al-Sawama west, near the post office</p>
                        <p>Sohag , Egypt</p>
                    </div>
                </div>
                <hr/>
                <div className='col-11 m-auto d-flex'>
                    <h5 style={{width: '20%'}}>Review Items</h5>
                    <div className='address'>
                        {
                            cart&&cart.map(
                                pro=>{
                                    const ky = Number(pro.id)+(Math.random()*100);
                                    return  <CheckOutProduct key={ky} product={pro}/>
                                }
                            )
                        }
                    </div>
                </div>
                <hr/>
                <div className='col-11 m-auto d-flex'>
                    <h5 style={{width: '20%'}}>Payment Method</h5>
                    <div className='address' style={{width: '60%'}}>
                        <h5>Order Total : {total} $</h5>
                        <Form onSubmit={handleSubmit}>
                            <br/>
                            <CardElement onChange={handleChange}/>
                            <br/>
                            <button
                                // disabled={ proccessing || disabled || successed }
                                type='submit' className='btn btn-warning'>
                                &#160;&#160;
                                {proccessing?'processing..':'Buy Now'}
                                &#160;&#160;
                            </button>
                            <small className='text-danger'>
                                {error&&error}
                            </small>
                        </Form>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
