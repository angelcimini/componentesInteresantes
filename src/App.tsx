import React from 'react';
import './App.css';
import BordesDegradados from './components/BordesDegradados/BordesDegradados';
import Checkbox from './components/Checkbox/Checkbox';
import Galeria from './components/Galeria/Galeria';
import GaleriaResponsive from './components/GaleriaResponsive/GaleriaResponsive';
import Loader from './components/Loader/Loader';
import OtroLoader from './components/OtroLoader/OtroLoader';
import TrueEnArray from './components/TrueEnArray/TrueEnArray';
import TrueEnCondicion from './components/TrueEnCondicionales/TrueEnCondicionales';


function App() {
  return (
    <div className="App">
      
      <div className="component-container">
        <div className="misComponentes">
          <h3>Checkbox</h3> <Checkbox />
          <h3>Loader </h3> <Loader />
          <h3>Otro Loader </h3> <OtroLoader />
        </div>
        <div>
          <h3>La función some()</h3> <TrueEnArray />
          <h3>True en condicionales </h3><TrueEnCondicion />
        </div>
        <div><h3>BordesDegradados</h3> <BordesDegradados /></div>
      </div>
      <div><h3>Galeria</h3> <Galeria /></div>  
      <div><h3>GaleriaResponsive <GaleriaResponsive /></h3></div>
    </div>
  );
}

export default App;
