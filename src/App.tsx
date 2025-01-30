import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import InformationCarousel from './Components/InformationCarousel/InformationCarousel';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel';
import FeaturedCategories from './Components/FeaturedCategories/FeaturedCategories';
import MainBrands from './Components/MainBrands/MainBrands';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import './Style/Theme.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Header onCategoryClick={setActiveCategory} />

        {/* Banner sempre visível */}
        <Banner
          desktopImage={require('./Assets/Img/bannerdesktop.png')}
          mobileImage={require('./Assets/Img/bannermobile.png')}
        />

        {activeCategory ? (
          <CategoryDetails category={activeCategory} />
        ) : (
          <>
            <InformationCarousel />
            <ProductCarousel />
            <main>
              <FeaturedCategories />
              <MainBrands />
            </main>
          </>
        )}

        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
