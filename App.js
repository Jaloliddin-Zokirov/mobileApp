import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from './components/Theme/ThemeContext';
import Theme from './components/Theme/Theme';
import AppNavigation from './AppNavigation/AppNavigation';
import LogReg from './components/LogReg/LogReg';
import LogRegNavigation from './AppNavigation/LogRegNavigation';

const App = () => {
  const [mode, setMode] = useState(false)

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeTheme',
      (data) => {
        setMode(data)
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener)
    }
  })

  return (
    <>
      <ThemeContext.Provider value={mode === true ? Theme.dark : Theme.light}>
        <NavigationContainer>
          {/* <LogRegNavigation />
          <LogReg /> */}
          <AppNavigation />
          <Footer />
        </NavigationContainer>
      </ThemeContext.Provider>
    </>
  )
};


export default App;
