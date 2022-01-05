import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../../constants/routes';

import keyringText from '../../img/keyring-text.svg'
import './nav.css';


const Navigation = () => (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>HOME</Link>
        </li>
        <li>
          <Link to={ROUTES.ECOSYSTEM}>ECOSYSTEM</Link>
        </li>
        <li>
          <Link to={ROUTES.FAQS}>FAQS</Link>
        </li>
        <li>
          <Link to={ROUTES.LAUNCH}>LAUNCH</Link>
        </li>
      </ul>
    </div>
  );

const LandingNavCollapse = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <header role="banner">
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <div class="container-fluid">
                <Link to={ROUTES.LANDING}><img class="navbar-logo" src={keyringText} alt="Keyring Protocol" /></Link>
            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse landing` } >
            <Link class="nav-link" to={ROUTES.ECOSYSTEM}>ECOSYSTEM</Link>
            <Link class="nav-link" to={ROUTES.FAQS}>FAQS</Link>
            <Link class="nav-link" to={ROUTES.LAUNCH}>LAUNCH</Link>
        </div>
        </nav>
        </header>
    );
}

const FooterNav = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid landing nav-menu">
            <div class="navbar-nav me-auto">
            <Link class="nav-link" to={ROUTES.LAUNCH}>LAUNCH</Link>
            <Link class="nav-link" to={ROUTES.ECOSYSTEM}>ECOSYSTEM</Link>
            <Link class="nav-link" to={ROUTES.FAQS}>FAQS</Link>
            </div>

            <Link class="nav-link" to={ROUTES.DISCORD}>Discord</Link>
            <Link class="nav-link" to={ROUTES.GITHUB}>Github</Link>
            <Link class="nav-link" to={ROUTES.TWITTER}>Twitter</Link>
        </div>
        </nav>
);



  

export default Navigation;

export { LandingNavCollapse, FooterNav }