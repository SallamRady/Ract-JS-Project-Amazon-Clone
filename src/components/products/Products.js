import React, {useEffect} from 'react';
import './Products.css';
import {products} from "../../units/ProductsData";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/actions/user";
import {useNavigate} from "react-router";
const Products = () => {
    const dispatch = useDispatch();
    const ProductsRow1 = products.slice(0,2);
    const ProductsRow2 = products.slice(2,5);
    const ProductsRow3 = products[5];
    const Navigator = useNavigate();
    const handleAddToCart = (pro)=>{
        dispatch(addToCart(pro));
    }
    const ProductType1 = ProductsRow1.map(
        pro=>{
            return (
                <div key={pro.id} className='col-12 col-sm-6'>
                    <div className='productCard'>
                    <h5 style={{cursor:'pointer'}} onClick={()=>Navigator(`/product/${pro.id}`)}>{pro.title}</h5>
                    <h6><strong>{pro.price} $</strong></h6>
                    <h6>{
                        Array(pro.rating).fill().map(
                            (_,star)=><span key={star}><i style={{color:'gold'}} className="bi bi-star-fill"/></span>
                        )
                    }</h6>
                    <img
                        className='productImg'
                        src={pro.image}
                        alt={pro.title}/>
                    <button
                        onClick={()=>handleAddToCart(pro)}
                        style={{width: '190px',marginTop: '20px'}}
                        className='btn btn-warning'>
                        <i className="bi bi-cart3"/>Add to Cart
                    </button>
                </div>
                </div>
            )
        }
    )
    const ProductType2 = ProductsRow2.map(
        pro=>{
            return (
                <div key={pro.id} className='col-12 col-sm-4'>
                    <div className='productCard'>
                        <h5 style={{cursor:'pointer'}} onClick={()=>Navigator(`/product/${pro.id}`)}>{pro.title}</h5>
                        <h6><strong>{pro.price} $</strong></h6>
                        <h6>{
                            Array(pro.rating).fill().map(
                                (_,star)=><span key={star}><i style={{color:'gold'}} className="bi bi-star-fill"/></span>
                            )
                        }</h6>
                        <img
                            className='productImg'
                            src={pro.image}
                            alt={pro.title}/>
                        <button
                            onClick={()=>handleAddToCart(pro)}
                            style={{width: '190px',marginTop: '20px'}}
                            className='btn btn-warning'>
                            <i className="bi bi-cart3"/>Add to Cart
                        </button>
                    </div>
                </div>
            )
        }
    )
    return (
        <div className='container-fluid p-2 mt-5'>
            <div className='row'>
                {ProductType1}
                {ProductType2}
                <div className='col-12 col-sm-8' style={{margin:'0 auto'}}>
                    <div className='productCard'>
                        <h5 style={{cursor:'pointer'}} onClick={()=>Navigator(`/product/${ProductsRow3.id}`)}>{ProductsRow3.title}</h5>
                        <h6><strong>{ProductsRow3.price} $</strong></h6>
                        <h6>{
                            Array(ProductsRow3.rating).fill().map(
                                (_,star)=><span key={star}><i style={{color:'gold'}} className="bi bi-star-fill"/></span>
                            )
                        }</h6>
                        <img
                            className='productImg'
                            src={ProductsRow3.image}
                            alt={ProductsRow3.title}/>
                        <button
                            onClick={()=>handleAddToCart(ProductsRow3)}
                            style={{width: '190px',marginTop: '20px'}}
                            className='btn btn-warning'>
                            <i className="bi bi-cart3"/>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
