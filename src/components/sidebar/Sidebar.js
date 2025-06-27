import React from 'react'
import './style.scss';
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faHome, faMoneyBillTransfer, faRoute, faSliders, faTicket } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const navData=[
        { to: '/', icon: faHome, label: 'Home' },
        { to: '/booking', icon: faTicket, label: 'Booking' },
        { to: '/payment', icon: faDollar, label: 'Payment' },
        { to: '/Splite-payment', icon: faMoneyBillTransfer, label: 'Split Payment' },
        { to: '/refund-track', icon: faRoute, label: 'Refund Track' }
    ]
    return (
        <div className="sidebar">
            <div className="comp-logo">
                <NavLink to="/" className="logo">
                    <img src={logo} alt='' className='img-fluid' />
                </NavLink>
            </div>
            <Nav className="sideNav flex-column">
                {navData.map((item, index) => (
                    <NavLink key={index} to={item.to} className="nav-link">
                        <FontAwesomeIcon icon={item.icon} className='me-3' size='md' />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
                {/* <NavLink to="/">
                    <FontAwesomeIcon icon={faHome} className='me-3' size='md' />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/booking">
                    <FontAwesomeIcon icon={faTicket} className='me-3' size='md' />
                    <span>Booking</span>
                </NavLink>
                <NavLink to="/payment">
                    <FontAwesomeIcon icon={faDollar} className='me-3' size='md' />
                    <span>Payment</span>
                </NavLink>
                <NavLink to="/Splite-payment">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className='me-3' size='md' />
                    <span>Split Payment</span>
                </NavLink>
                <NavLink to="/refund-track">
                    <FontAwesomeIcon icon={faRoute} className='me-3' size='md' />
                    <span>Refund Track</span>
                </NavLink> */}
                

            </Nav>
        </div>
    )
}
