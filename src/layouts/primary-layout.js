import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const PrimaryLayout = () => {
    console.log('render PrimaryLayout')
    return (
        <div className="layout">
        <Sidebar></Sidebar>
        <div className="body-container">
          <Header></Header>
          <div className="body-content">
          <Outlet/>
          </div>
        </div>
      </div>
    )
}

export default PrimaryLayout;