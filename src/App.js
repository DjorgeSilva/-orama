import './css/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from "./components/Layout.js";
import { BannerHome } from "./components/BannerHome.js";
import { NavBar } from "./components/NavBar.js";
import { Legenda } from "./components/Legenda.js";
import { BtnConta } from "./components/BtnConta.js";
import { Filtros } from "./components/Filtros.js";
import { Footer } from "./components/Footer.js"
import { OuterFooter } from "./components/OuterFooter.js";
import { LegendaDesktop } from './components/LegendaDesktop.js';


function App() {

  return (
    <React.Fragment>
      <BannerHome />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>

      <Layout>
        <div>
          <Legenda/>
          <Filtros />
        </div>

        <div>
        <LegendaDesktop/>
        <Footer />

        </div>


      </Layout>
      <BtnConta />
      <OuterFooter/>
    </React.Fragment>
  );
  
}

export default App;
