import React from 'react'
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell } from '@fortawesome/free-solid-svg-icons';
import { fa4 } from '@fortawesome/free-solid-svg-icons/fa4';

export default function Header(props) {
    return (
        <div className="header">
            <div className='d-flex flex-column justify-content-center' onClick={() => props.handleNavToggle()}>
                {props.navOpen ? (
                    <FontAwesomeIcon icon={faArrowRight} size='lg' title='Close Navigation' />
                ) : (
                    <div className='hamburger'>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                )}
            </div>

            <div className='d-flex align-items-center gap-3'>
                <div className=''>
                    <FontAwesomeIcon icon={faBell} size='lg' />
                </div>
                <div className='header-profile'>
                    <img src="https://images.pexels.com/photos/3921368/pexels-photo-3921368.jpeg" alt='' className='img-fluid' />
                </div>
            </div>

            {/* <h1>Header</h1> */}

        </div>
    )
}
