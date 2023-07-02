import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import AppNavigation from './AppNavigation/AppNavigation';
import LogReg from './components/LogReg/LogReg';
import LogRegNavigation from './AppNavigation/LogRegNavigation';
import StoreWrapper from './components/StoreWrapper/StoreWrapper';

const App = () => {

  return (
    <>
      <StoreWrapper>
        <NavigationContainer>
          {/* <LogRegNavigation />
          <LogReg /> */}
          <AppNavigation />
          <Footer />
        </NavigationContainer>
      </StoreWrapper>
    </>
  )
};


export default App;
