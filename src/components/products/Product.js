import React, {useEffect, useState} from 'react';
import offer from '../../resources/images/product/offers.jpg';
import './Product.css';
import {useParams} from "react-router";
import {products} from "../../units/ProductsData";
import {addToCart} from "../../redux/actions/user";
import {useDispatch} from "react-redux";
const Product = () => {
    const {id} = useParams('id');
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        products.map(
            (pro)=>{
                if(pro.id === id)
                    setProduct(pro)
            }
        )
    }, []);

    const handleAddToCart = (pro)=>{
        dispatch(addToCart(pro));
    }

    return (
        <div className='container-fluid pt-3 pb-5 bg-white'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <img src={offer} width='95%' height='300px' className='mb-5' alt='ad on amazon'/>
                </div>
                <div className='col-12 ProductContent text-center'>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <img src={product.image} width='95%' height='310px'  alt='Product Image'/>
                        </div>
                        <div className='col-12 col-sm-8' style={{ textAlign: 'left'}}>
                            <h2>{product.title}</h2>
                            <h6><strong>{product.price} $</strong></h6>
                            <h6>{
                                Array(product.rating).fill().map(
                                    (_,star)=><span key={star}><i style={{color:'gold'}} className="bi bi-star-fill"/></span>
                                )
                            }</h6>
                            <h6>Specification</h6>
                            <ul>
                                {
                                    product.specification && product.specification.map(
                                        (item,index) =>(<li key={index}><i className="bi bi-arrow-right-circle-fill"/>&#160;{item}</li>)
                                    )
                                }
                            </ul>
                            <h6>Product Description</h6>
                            <p className='lead'>{product.detail}</p>
                            <button
                                onClick={()=>handleAddToCart(product)}
                                style={{width: '190px',marginTop: '20px'}}
                                className='btn btn-warning'>
                                <i className="bi bi-cart3"/>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
