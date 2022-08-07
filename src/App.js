import React from 'react';
import './App.css'

import {Navbar, Header, Features, Download, Faq, Subscribe,Footer, Services} from './components'

const App = () => {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
         <Header />
      </header>
        <Features />
        <Download  />
        <Services />
        <Subscribe />
        <Faq />
        <Footer />


    </main>
  );
}

export default App;
