import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBTooltip,
    MDBIcon
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// import { Container } from './styles';

export default function DefaultNav(props) {
    const { toggleCollapse, closeCollapse, collapseID } = props;
    const logo = require('../../assets/img/icon-white.png');
    const scrollingTo = to => {
        let element = document.getElementById(to);

        let heightOfElement = element.scrollHeight;

        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    return (
        <MDBNavbar color='green' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                <img src={logo} height="30" />
            </MDBNavbarBrand>
            <MDBNavbarToggler
                onClick={toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink
                            exact
                            to='/'
                            onClick={() => { scrollingTo('top-page'); closeCollapse('mainNavbarCollapse') }}
                        >
                            <strong>Início</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink
                            to='/'
                            onClick={() => { scrollingTo('about'); closeCollapse('mainNavbarCollapse') }}
                        >
                            <strong>Sobre</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink
                            to='/'
                            onClick={() => { scrollingTo('consultorias'); closeCollapse('mainNavbarCollapse') }}
                        >
                            <strong>Consultorias</strong>
                            {/* <AnchorLink offset={() => 90} style={{ color: 'white' }} onClick={closeCollapse('mainNavbarCollapse')} href='#consultorias'><strong>Consultorias</strong></AnchorLink> */}
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink
                            to='/'
                            onClick={() => { scrollingTo('testimonials'); closeCollapse('mainNavbarCollapse') }}
                        >
                            <strong>Depoimentos</strong>
                            {/* <AnchorLink offset={() => 90} style={{ color: 'white' }} onClick={closeCollapse('mainNavbarCollapse')} href='#products'><strong>Depoimentos</strong></AnchorLink> */}
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem className='mr-2'>
                        <MDBTooltip
                            placement='bottom'
                            domElement
                            style={{ display: 'block' }}
                        >
                            <a
                                className='nav-link Ripple-parent'
                                href='https://instagram.com/pt.tiagocarvalho'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <strong>
                                    <MDBIcon fab icon="instagram" />
                                </strong>
                            </a>
                            <span>Siga-me no Instagram</span>
                        </MDBTooltip>
                    </MDBNavItem>
                    <MDBNavItem className='mr-2'>
                        <MDBTooltip
                            placement='bottom'
                            domElement
                            style={{ display: 'block' }}
                        >
                            <a
                                className='nav-link Ripple-parent'
                                href='https://facebook.com/tiago.carvalho.587606'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <strong>
                                    <MDBIcon fab icon="facebook" />
                                </strong>
                            </a>
                            <span>Siga-me no Facebook</span>
                        </MDBTooltip>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}
