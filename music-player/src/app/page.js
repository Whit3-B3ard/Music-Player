'use client'
import React from 'react';
import Routes from './routes.js';
import UserContextProvider from './context/UserContext.js'
const Page = () => {
    return (
      <div id="root">
        <UserContextProvider>
        <Routes />
        </UserContextProvider>
      </div>
    );
  };
  
  export default Page;