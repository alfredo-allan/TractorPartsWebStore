import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import InformationCarousel from './Components/InformationCarousel/InformationCarousel';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import Footer from './Components/Footer/Footer'
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
      <ProductCarousel /> {/* Aqui renderizamos o carrossel */}
      <main>
        {/* Outros conteúdos do aplicativo podem ser adicionados aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
