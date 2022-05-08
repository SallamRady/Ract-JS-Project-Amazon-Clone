import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row'>
                <div className='col-12'>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className="bi bi-facebook"/> : Face book Link
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="bi bi-facebook"/> : Face book Link
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="bi bi-facebook"/> : Face book Link
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="bi bi-facebook"/> : Face book Link
                            </a>
                        </li>
                    </ul>

                    <p className='text-white text-center lead'>
                        Created and Designed By Sallam Rady Ramadan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
