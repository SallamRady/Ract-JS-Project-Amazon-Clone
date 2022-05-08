import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import './MainHeader.css';
import logo from '../../resources/images/Amazon-Logo-Transparent-1024x310.png';
import {headerItems} from "../../units/ProductsData";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LogoutProccess} from "../../redux/actions/user";
const MainHeader = () => {
    const {user,cart} = useSelector(state=>state);
    const dispatch = useDispatch();
    const Item = headerItems.map(
        item=> <option key={item} value={item}>{item}</option>
    )

    const HandleLogOut = ()=>{
        if(user !== null){
            dispatch(LogoutProccess())
        }
    }
    return (
        <Navbar
            className='mainNavbar sticky-top'
            expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                        className='header-logo'
                        src={logo}
                        style={{width:'80px'}}
                        alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 flex-grow-1 justify-content-around"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link
                            href="#action1"
                            className='d-flex  align-items-center text-white'>
                            <i className="bi bi-geo-alt" style={{fontSize:'25px'}}/>
                            <div className='action-options'>
                                <span className='option1'>Hello</span><br/>
                                <span className='option2'><b>Select Your Address</b></span>
                            </div>
                        </Nav.Link>
                        <Form className='d-flex  align-items-center' style={{width:'50%'}}>
                            <Form.Select
                                style={{width: '20%',height: '40px',borderRadius: '5px 0 0 5px'}}
                                aria-label="select type..">
                                {Item}
                            </Form.Select>
                            <FormControl
                                style={{height: '40px',borderRadius:'0'}}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"/>
                            <Button variant="warning"
                                    style={{width: '20%',height: '40px',borderRadius: '0 5px 5px 0'}}>
                                <i className="bi bi-search"/>
                            </Button>
                        </Form>
                        <Nav.Link
                            as={Link}
                            to={user!==null?'':"/login"}
                            className='d-flex align-items-center text-white'>
                            <div className='action-options'>
                                <span className='option1' style={{}}>
                                    Hello {user!==null?user.email.substring(0,user.email.indexOf('@')):'Guest'}
                                </span><br/>
                                <span className='option2' onClick={HandleLogOut}><b>{user!==null?'Sign Out':'Sign In'}</b></span>
                            </div>
                        </Nav.Link>
                        <Nav.Link
                            href="#action1"
                            className='d-flex  align-items-center text-white'>
                            <div className='action-options'>
                                <span className='option1'>Return</span><br/>
                                <span className='option2'><b>& Orders</b></span>
                            </div>
                        </Nav.Link>
                        <Nav.Link
                            href="#action1"
                            className='d-flex align-items-center text-white'>
                            <div className='action-options'>
                                <span className='option1'>Your</span><br/>
                                <span className='option2'><b>Prime</b></span>
                            </div>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/checkout"
                            className='d-flex  align-items-center text-white flex-end'>
                            <span className='option1'>
                                <i
                                    style={{fontSize:'30px'}}
                                    className="bi bi-cart4"/>
                            </span>
                            <span
                                style={{fontSize:'20px'}}
                                className='option2 text-warning'><b>{cart.length}</b></span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainHeader;
