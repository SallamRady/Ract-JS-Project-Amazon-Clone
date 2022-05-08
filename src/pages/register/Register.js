import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Logo from '../../resources/images/amazon_PNG13.png';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { RegisterProcess} from "../../redux/actions/user";
import { useNavigate } from 'react-router';
const Register = () => {
    //Declaration....
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispach = useDispatch();
    const {user} = useSelector(state=>state);
    const Navigator = useNavigate();
    //Methods...
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispach(RegisterProcess(email,password))
        setEmail('')
        setPassword('')
    }
    useEffect(() => {
        if(user !== null){
            Navigator('/');
        }
    }, [user]);

    // return our view...
    return (
        <div className='login'>
            <img src={Logo} width='20%' style={{marginTop:'40px'}} alt='Amazon'/>
            <h2>Create New Account</h2>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me for a month" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Continue
                </Button>
                <Link to='/login' className='rgLink' color='info'>
                    have an account?Sign In!
                </Link>
            </Form>
        </div>
    );
};

export default Register;
