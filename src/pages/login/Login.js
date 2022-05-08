import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import './Login.css';
import Logo from '../../resources/images/amazon_PNG13.png';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {LoginProcess, loginStart} from "../../redux/actions/user";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state);
    const [loading, setLoading] = useState(false);
    const Navigator = useNavigate();
    useEffect(() => {
       if(user !== null)
           Navigator('/')
    }, [user]);

    const SignIn = (e)=>{
        e.preventDefault();
        setLoading(true);
        dispatch(loginStart())
        dispatch(LoginProcess(email,password));
        setLoading(false);
        setEmail('')
        setPassword('')
    }
    return (
        <div className='login'>
            <img src={Logo} width='20%' style={{marginTop:'40px'}} alt='Amazon'/>
            <h2>SignIn -Start Your Journey</h2>
            <Form onSubmit={SignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={e=>setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={e=>setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me for a month" />
                </Form.Group>
                <Button disabled={loading} variant="warning" type="submit">
                    Sign In {loading?'...':''}
                </Button>
                <Link to='/register' className='rgLink' color='info'>
                    I don't have an account!
                </Link>
            </Form>
        </div>
    );
};

export default Login;
