import React,{useState} from 'react';
import './Navbar.css';
import loginImg from "../../tdl_logo.png";
import tcpLogo from '../../tcp.jfif';
import cromaLogo from '../../croma.jpeg';
import westsideLogo from '../../westside.jpg';
import starbazarLogo from '../../starbazar.png';
import titanLogo from '../../titan.png';
import profilePic from '../../profile_pic.png';
import $ from 'jquery';
import Header from './header';

function Navbar(){
    return (
        <>
        <div class="navbar">
        <Header/>
  
</div>
   <p className="Sales-Order">Catalog</p> 
<div className="card" onClick="Test()">
  <div className="container">
    <p className="Display-Business-Vol">TCP</p> 
    <p className="Condition-Contracts">Last Published on<br/>10 Oct. 2020 by Mona</p> 
    <p className="Sku-Unit">50<sub className="Unit">SKUs</sub></p>
  </div>
</div>
<p className="Sales-Order-Brand">Recent Partner Catalogs</p> 
<div className="card1">
  <img src={cromaLogo}  alt="Avatar" className="Image-1"/>
<p className="Display-Business-Vol-1">Croma Retail</p>
  <div className="Condition-Contracts-1">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">15345<sub className="Unit">SKUs</sub></p>
</div>
</div>
<div className="card2">
  <img src={westsideLogo} alt="Avatar" className="Image-2"/>
  <p className="Display-Business-Vol-2">Westside Retail</p>
  <div className="Condition-Contracts-1">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">120<sub className="Unit">SKUs</sub></p>
</div>
</div>
<div className="card3">
  <img src={starbazarLogo} alt="Avatar" className="Image-2"/>
  <p className="Display-Business-Vol-2">Star Bazar</p>
  <div className="Condition-Contracts-1">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">200<sub className="Unit">SKUs</sub></p>

</div>
</div>
<div className="card4">
  <img src={titanLogo} alt="Avatar" className="Image-2"/>
<p className="Display-Business-Vol-2">Titan</p>
  <div className="Condition-Contracts-1">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">100<sub className="Unit">SKUs</sub></p>
</div>
</div>
        </>
    );
}

export default Navbar
