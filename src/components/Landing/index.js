import React from 'react';
import './landing.css';

import secureIcon from '../../img/lock-icon.png'
import trustedIcon from '../../img/star-icon.png'
import supportedIcon from '../../img/cog-icon.png'
import banner from '../../img/banner-asset.png'

const Landing = () => (
  <div>
    <LandingHeader/>
    <KeyringEcosystem/>
  </div>
);

const LandingHeader = () => (

    <div className="fh-container center-text">
        <div className="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>KEYRING</h1>
                    <h2>Protocol</h2> 
                    <p>Verify exchange users with confidence using our leading know your customer protocol</p>  
                </div>
                <div class="col-md-6">
                    <img src={banner} alt="Image" className="resize_fit_center" />
                </div>
            </div>
        </div>
    </div>
);

const KeyringEcosystem = () => (
    <div className="container">
        <div class="row">
            <div class="col-md-5">
            <h2>KEYRING</h2>
            <h3>ECOSYSTEM</h3>
             <p>Our ecosystem has been developed to support businesses looking to harness the power of crypto currency exchanges using know your customer protocols</p>
            </div>
            <div class="col-md-2 ecosystem-box">
            
             <EcoBox img={secureIcon} title="SECURE" text="Our verified platform uses secure protocols to ensure our users and their data is protected" />
            </div>
            <div class="col-md-2 ecosystem-box">
            <EcoBox img={trustedIcon} title="TRUSTED" text="Trusted by over 200 defi apps to meet their know your customer needs" />
            
            </div>
            <div class="col-md-2 ecosystem-box" >
            <EcoBox img={supportedIcon} title="SUPPORTED" text="Active and supportive development team that is dedicated to ensuring our service remains operational at all times." />
            </div>
        </div>
        
    </div>
)

const EcoBox = props => (
    <div>
        <div className="ecosystem-box-img-container">
            <img src={props.img} alt="Image" class="resize_fit_center" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Landing;