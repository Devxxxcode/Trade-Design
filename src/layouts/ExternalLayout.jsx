import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TickerTape } from "react-ts-tradingview-widgets";

const ExternalLayout = () => {
  return (
      <div>
        <TickerTape colorTheme="light"></TickerTape>
        <Navbar/>
        <hr />
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default ExternalLayout