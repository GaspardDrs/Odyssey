import React from 'react';
import StyledApp from './style';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {
  return (
    <StyledApp>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
      ;
    </StyledApp>
  );
}

export default App;
