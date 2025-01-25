import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import InformationCarousel from './Components/InformationCarousel/InformationCarousel';
import './Style/Theme.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        desktopImage={require('./Assets/Img/bannerdesktop.png')}
        mobileImage={require('./Assets/Img/bannermobile.png')}
      />
      <InformationCarousel />
      <main>
        {/* Outros conteúdos do aplicativo podem ser adicionados aqui */}
      </main>
    </div>
  );
}

export default App;
