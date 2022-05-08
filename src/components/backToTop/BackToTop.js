import React, {useState,useEffect} from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = ()=>{
        if(window.pageYOffset > 500)
            setDisplay(true)
        else
            setDisplay(false)
    }

    const GoToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll',toggleDisplay);
        return () => {
            window.removeEventListener('scroll',toggleDisplay)
        };
    }, []);



    //return view...
    if(display){
        return (
            <div id='BackToTop' onClick={GoToTop}>
                <i className="bi bi-arrow-up-circle-fill"/>
            </div>
        );
    }else{
        return (
            <div> </div>
        );
    }
};

export default BackToTop;
