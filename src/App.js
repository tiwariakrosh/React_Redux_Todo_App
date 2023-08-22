import React from 'react';
import { Toaster } from 'react-hot-toast';

import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
// import './styles/styles.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={'app__wrapper'}>
          <AppHeader />
          <Home />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
