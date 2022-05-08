import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Guard = ({children}) => {
    const {user} = useSelector(state=>state);
    const Navigator = useNavigate();
    useEffect(() => {
        if(user === null)
            Navigator('/login')
    }, [user]);

    return (
        <>
            {children}
        </>
    );
};

export default Guard;
