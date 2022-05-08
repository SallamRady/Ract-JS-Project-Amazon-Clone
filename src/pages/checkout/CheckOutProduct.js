import React from 'react';
import './CheckOut.css';
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/actions/user";

const CheckOutProduct = ({product}) => {
    const dispatch = useDispatch();
    const handleRemoveProduct = (id)=>{
        dispatch(removeFromCart(id))
    }
    return (
        <div className='productCheckOutCard'>
            <img style={{ marginRight: '3%'}} src={product.image} width='360px' height='200px' alt='product'/>
            <div className='info'>
                <h6>{product&&product.title}</h6>
                <h6>{product&&product.price} $</h6>
                <h6>{
                    Array(product&&product.rating).fill().map(
                        (_,star)=><span key={star}><i style={{color:'gold'}} className="bi bi-star-fill"/></span>
                    )
                }</h6>
                <button
                    onClick={()=>handleRemoveProduct(product.id)}
                    style={{width: '190px',marginTop: '20px'}}
                    className='btn btn-warning'>
                    <i className="bi bi-cart3"/>Remove From Cart
                </button>
            </div>
        </div>
    );
};

export default CheckOutProduct;
